import { Button } from "antd";
import React, { useRef, useState } from "react";

const OTA = () => {
  const inputRef = useRef();

  //
  const [selectedFile, setSelectedFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [uploadStatus, setUploadStatus] = useState("Selected");

  //
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
      setUploadStatus("Uploading...");
    }
  };

  //
  const onChooseFile = () => {
    inputRef.current.click();
  };

  return (
    <div>
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
          ></span>
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
            <span className="material-symbols-outlined icon">description</span>
            <div
              className="file-info"
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                gap: "15px",
              }}
            >
              <div style={{ flex: 1 }}>
                {/* display file name */}
                <h6 style={{ flex: 1, fontSize: "13px", fontWeight: "400px" }}>
                  File Name Here
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
                      width: "0%",
                      height: "5px",
                      backgroundColor: "5d4dcc",
                      borderRadius: "8px",
                      transition: "width 0.5s ease",
                    }}
                  ></div>
                </div>
              </div>

              {/* display */}
              <button onClick={() => {}}>
                <span className="material-symbols-outlined close-icon">
                  Close
                </span>
              </button>
            </div>
          </div>

          {/* button to final */}
          <button className="upload-btn" onClick={() => {}}>
            Upload
          </button>
        </>
      )}
    </div>
  );
};

export default OTA;
