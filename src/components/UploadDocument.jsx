import React, { useState, useRef } from 'react';
import { Upload } from 'lucide-react';

const UploadDocument = () => {
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <h2 className="text-lg font-medium text-blue-600 mb-2">Upload Your Aadhar Card</h2>
      
      <div 
        className={`border-2 border-dashed rounded-lg p-6 border-gray-300 flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 transition-colors ${file ? 'bg-blue-50' : 'bg-white'}`}
        onClick={handleClick}
      >
        {!file ? (
          <>
            <div className="bg-blue-100 p-3 rounded-full mb-2">
              <Upload className="h-6 w-6 text-blue-500" />
            </div>
            <p className="text-blue-500 font-medium">Click to Upload</p>
          </>
        ) : (
          <>
            <div className="bg-blue-100 p-3 rounded-full mb-2">
              <Upload className="h-6 w-6 text-blue-500" />
            </div>
            <p className="text-blue-700 font-medium">{file.name}</p>
            <p className="text-sm text-gray-500">
              {(file.size / 1024).toFixed(2)} KB
            </p>
          </>
        )}
        
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          accept=".pdf,.jpg,.jpeg,.png"
        />
      </div>
    </div>
  );
};

export default UploadDocument;