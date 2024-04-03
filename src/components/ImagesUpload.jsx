import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const ImagesUpload = ({setImage}) => {
   const [uploadedFiles, setUploadedFiles] = useState([]);
  const onDrop = useCallback((acceptedFiles) => {
    setImage(acceptedFiles);
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
      <h1 className='text-md font-semibold pb-2'>Image Uploader</h1>
      <div {...getRootProps()} style={dropzoneStyles}>
        <input {...getInputProps()} />
        {
          isDragActive ?
            <p className='text-md font-semibold pb-2'>Drop the files here...</p> :
            <p className='text-md font-semibold'>Click to select files</p>
        }
      </div>
     </div>
  );
};

export default ImagesUpload;
