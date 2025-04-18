import './brandassetsupload.css';
import React, { useRef } from 'react';
import { FaImage } from 'react-icons/fa';

export default function BrandAssetsUpload({ onUpload, tokenFile, file }) {

    const inputRef = useRef(null);

    const handleClick = () => {
        inputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) onUpload?.(file);
    };

    console.log(file);

    return (
        <>
            <div className="container-brand-assets"
                style={tokenFile ? { borderColor: 'var(--blue)' } : {}}
            >
                {
                    tokenFile ?
                        <h3>Brand Assets - {file.name}</h3> :
                        <h3>Brand Assets </h3>
                }
                <div className="brand-assets-upload">
                    <div>
                        <FaImage className="brand-assets-icon"
                            style={tokenFile ? { backgroundColor: 'var(--blue)' } : {}}
                        />
                        <button className="brand-assets-button" onClick={handleClick}
                            style={tokenFile ? { backgroundColor: 'var(--blue)' } : {}}
                        >
                            Upload assets
                        </button>
                    </div>
                    <input
                        type="file"
                        accept=".jpg,.jpeg,.png,.svg"
                        ref={inputRef}
                        style={{ display: 'none' }}
                        onChange={handleFileChange}
                    />
                </div>
            </div>
        </>
    );
}