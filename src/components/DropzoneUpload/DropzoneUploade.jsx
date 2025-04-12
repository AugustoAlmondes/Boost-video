import React, { useRef } from 'react';
import './dropzoneupload.css';
import { MdCloudUpload } from "react-icons/md";

export default function DropzoneUpload({ onFileSelected }) {
    const inputRef = useRef(null);

    const handleClick = () => {
        inputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) onFileSelected?.(file);
    };

    const handleDrop = (event) => {
        event.preventDefault(); // impede o comportamento padrão do navegador
        const file = event.dataTransfer.files[0];
        if (file) onFileSelected?.(file);
    };

    const handleDragOver = (event) => {
        event.preventDefault(); // necessário para permitir o drop
    };

    return (
        <>
            <div
                className="dropzone"
                // onClick={handleClick}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
            >
                <MdCloudUpload className="dropzone-icon" size={48} />
                <p className="dropzone-title">Drag and drop your files here</p>
                <p className="dropzone-subtext">Supports: MP4, MOV, JPG, PNG (max 100MB)</p>
                <button className="dropzone-button" onClick={handleClick}>
                    Browse Files
                </button>
                <input
                    type="file"
                    accept=".mp4,.mov,.jpg,.jpeg,.png"
                    ref={inputRef}
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                />
            </div>
        </>
    );
}