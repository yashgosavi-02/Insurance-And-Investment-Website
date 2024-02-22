import React, { useState } from 'react';

const DocumentSubmission = ({ onFileUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      onFileUpload(selectedFile);
      setSelectedFile(null); // Clear selected file after upload
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
      <div className="mb-4">
        <img
          src="https://img.freepik.com/free-vector/image-upload-concept-illustration_114360-996.jpg?w=740&t=st=1708593076~exp=1708593676~hmac=3de9ed42cec588e16a1603176a369b289f5a4cca168e8f74372386d4043e4305"
          alt="Upload"
          className="mx-auto mb-4"
          style={{ maxWidth: '200px' }}
        />
        <input
          type="file"
          id="fileInput"
          className="hidden"
          onChange={handleFileChange}
          accept="image/*"
        />
        <label
          htmlFor="fileInput"
          className="block w-full px-4 py-2 mb-4 text-sm text-center text-white bg-blue-500 rounded-md cursor-pointer hover:bg-blue-600"
        >
          Select File
        </label>
        {selectedFile && (
          <div className="text-center">
            <p className="mb-2">{selectedFile.name}</p>
            <button
              className="px-4 py-2 text-sm text-white bg-green-500 rounded-md hover:bg-green-600"
              onClick={handleUpload}
            >
              Upload
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DocumentSubmission;
