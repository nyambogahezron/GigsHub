import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const ImagesUpload = () => {
   const [uploadedFiles, setUploadedFiles] = useState([]);
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    setUploadedFiles(acceptedFiles)

  }, []);
  const dropzoneStyles = {
  border: '2px dashed #ccc',
  borderRadius: '4px',
  padding: '20px',
  textAlign: 'center',
  cursor: 'pointer'
};

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
     <div>
      <h1>Image Uploader</h1>
      <div {...getRootProps()} style={dropzoneStyles}>
        <input {...getInputProps()} />
        {
          isDragActive ?
            <p>Drop the files here...</p> :
            <p>Drag 'n' drop some files here, or click to select files</p>
        }
      </div>
      <h2>Uploaded Images:</h2>
      <div>
        {uploadedFiles.map((file, index) => (
          <img key={index} src={file} alt={`Uploaded ${index}`} style={{ maxWidth: '200px', margin: '5px' }} />
        ))}
      </div>
    </div>
  );
};

export default ImagesUpload;
