import './brandassetsupload.css';
import React, { useRef } from 'react';
import { FaImage } from 'react-icons/fa';

export default function BrandAssetsUpload({ onUpload }) {

    const inputRef = useRef(null);

    const handleClick = () => {
        inputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) onUpload?.(file);
    };

    return (
        <>
            <div className="container-brand-assets">
                <h3>Brand Assets</h3>
                <div className="brand-assets-upload">
                    <div>
                        <FaImage className="brand-assets-icon" />
                        <button className="brand-assets-button" onClick={handleClick}>
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