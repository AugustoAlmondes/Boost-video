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
            <div className={tokenFile ? "container-brand-assets active" : "container-brand-assets"}
            >
                {
                    tokenFile ?
                        <h3 className='subtitle-box'>Brand Assets - {file.name}</h3> :
                        <h3 className='subtitle-box'>Brand Assets </h3>
                }
                <div className="brand-assets-upload gray-background">
                    <div>
                        <FaImage className={tokenFile ? "brand-assets-icon active" : "brand-assets-icon"}
                            // style={tokenFile ? { backgroundColor: 'var(--blue)' } : {}}
                        />
                        <button className={tokenFile ? "brand-assets-button active" : "brand-assets-button"} onClick={handleClick}
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