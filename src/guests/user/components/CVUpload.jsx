import { useState } from "react";

function CVUpload() {
  const [file, setFile] = useState(null);

  const handleDrop = (e) => {
    e.preventDefault();
    setFile(e.dataTransfer.files[0]);
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      className="border-2 border-dashed p-6 text-center rounded-lg"
    >
      {file ? (
        <p>Uploaded: {file.name}</p>
      ) : (
        <p>Drag and drop your CV here, or click to select a file.</p>
      )}
    </div>
  );
}

export default CVUpload;