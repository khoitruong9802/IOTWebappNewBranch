// import handle from "mqtt/lib/handlers/index";
import React, { useRef, useState } from "react";
import axios from "axios";

const OTA = () => {
  const inputRef = useRef();

  //
  const [selectedFile, setSelectedFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [uploadStatus, setUploadStatus] = useState("select");

  //
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
      // setUploadStatus("Uploading...");
    }
  };

  //
  const onChooseFile = () => {
    inputRef.current.click();
  };

  //
  const clearFileInput = () => {
    inputRef.current.value = "";
    setSelectedFile(null);
    setProgress(0);
    setUploadStatus("select");
  };

  //
  const handleUpload = async () => {
    if (uploadStatus === "done") {
      clearFileInput();
      return;
    }
    try {
      setUploadStatus("uploading");

      const formData = new FormData();
      formData.append("file", selectedFile);

      const res = await axios.post("http://localhost:5173/upload", formData, {
        onUploadProgress: (progressEvent) => {
          const percentage = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setProgress(percentage);
        },
      });
      setUploadStatus("done");
    } catch (error) {
      setUploadStatus("select");
    }
  };

  return (
    <div className="flex items-center justify-center">
      {/* file input */}
      <input
        ref={inputRef}
        type="file"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />

      {/* button */}
      {!selectedFile && (
        <button
          className="file-btn"
          onClick={onChooseFile}
          style={{
            width: "330px",
            height: "150px",
            fontSize: "18px",
            fontWeight: "500px",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "20px",
            backgroundColor: "#fff",
            border: "1.5px dashed #5d4dcc",
            cursor: "pointer",
            transition: "all 0.3s ease",
            color: "#5d4dcc",
            gap: "15px",
            display: "flex",
          }}
        >
          <span
            className="material-symbols-outlined"
            style={{
              width: "50px",
              height: "50px",
              fontSize: "30px",
              color: "#5d4dcc",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transition: "all 0.3s ease",
              borderRadius: "25px",
              backgroundColor: "#f1efff",
            }}
          >
            upload
          </span>
          Upload File
        </button>
      )}

      {/* display */}
      {selectedFile && (
        <>
          <div
            className="file-card"
            style={{
              width: "300px",
              gap: "15px",
              fontSize: "30px",
              color: "#000",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transition: "all 0.3s ease",
              borderRadius: "6px",
              backgroundColor: "#fff",
              border: "1px solid rgba(117,96,255,0.281)",
              padding: "8px 15px",
            }}
          >
            <span
              className="material-symbols-outlined icon"
              style={{ fontSize: "30px", color: "#7460ff" }}
            >
              description
            </span>
            <div
              className="file-info"
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                gap: "15px",
                width: "36px",
                height: "36px",
                justifyContent: "center",
                color: "#463a99",
                backgroundColor: "#f1efff",
                border: "none",
                borderRadius: "30px",
              }}
            >
              <div style={{ flex: 1 }}>
                {/* display file name */}
                <h6 style={{ flex: 1, fontSize: "13px", fontWeight: "400px" }}>
                  {selectedFile.name}
                </h6>
                <div
                  className="progress-bg"
                  style={{
                    width: "100%",
                    height: "5px",
                    backgroundColor: "rgba(0,0,0,0.076)",
                    borderRadius: "8px",
                    marginTop: "8px",
                  }}
                >
                  <div
                    className="progress"
                    style={{
                      width: `${progress}%`,
                      height: "5px",
                      backgroundColor: "5d4dcc",
                      borderRadius: "8px",
                      transition: "width 0.5s ease",
                    }}
                  ></div>
                </div>
              </div>

              {/* display */}
              {uploadStatus === "select" ? (
                <button onClick={clearFileInput}>
                  <span
                    className="material-symbols-outlined close-icon"
                    style={{ fontSize: "18px", cursor: "pointer" }}
                  >
                    Close
                  </span>
                </button>
              ) : (
                <div
                  className="check-circle"
                  style={{
                    width: "36px",
                    height: "36px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "13px",
                    color: "#463a99",
                    backgroundColor: "#f1efff",
                    border: "none",
                    borderRadius: "30px",
                  }}
                >
                  {uploadStatus === "uploading" ? (
                    `${progress}%`
                  ) : uploadStatus === "done" ? (
                    <span
                      className="material-symbols-outlined check-icon"
                      style={{ fontSize: "20px", cursor: "pointer" }}
                    >
                      Check
                    </span>
                  ) : null}
                </div>
              )}
            </div>
          </div>

          {/* button to final */}
          <button
            className="upload-btn"
            style={{
              width: "330px",
              fontSize: "14px",
              fontWeight: "500",
              color: "#fff",
              backgroundColor: "#7460ff",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              marginTop: "15px",
              padding: "10px",
            }}
            onClick={handleUpload}
          >
            {uploadStatus === "select" || uploadStatus === "uploading"
              ? "Upload"
              : "Done"}
          </button>
        </>
      )}
    </div>
  );
};

export default OTA;
