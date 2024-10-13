import React, { useState, useEffect } from "react";
import "./OTA.css"; // Import file CSS
import OTAVersion from "./OTAVersion";

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [updates, setUpdates] = useState([]);

  const fetchVersion = () => {
    // Fetch the JSON data from the backend
    fetch("http://172.28.182.183:5173/upload")
      .then((response) => response.json())
      .then((data) => setUpdates(data))
      .catch((error) => console.error("Error fetching updates:", error));
  };

  useEffect(() => {
    fetchVersion();
  }, []);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    // Gửi request với file lên server
    try {
      const response = await fetch("http://172.28.182.183:5173/upload", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        alert("File uploaded successfully!");
        fetchVersion();
      } else {
        alert("File upload failed!");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Error uploading file");
    }
  };

  return (
    <div className="flex items-center justify-between h-screen gap-y-8">
      <div className="table-container">
        <OTAVersion updates={updates} />
      </div>

      <div className="upload-container">
        <h1>Upload Your OTA Version</h1>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload</button>
        {selectedFile && <p>File selected: {selectedFile.name}</p>}
      </div>
    </div>
  );
}

export default FileUpload;
