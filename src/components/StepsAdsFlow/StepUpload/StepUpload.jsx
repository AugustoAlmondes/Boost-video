import { useState } from 'react';
import './stepupload.css';
import DropzoneUpload from '../../DropzoneUpload/DropzoneUploade';
import BrandAssetsUpload from '../../BrandAssetsUpload/BrandAssetsUpload';
import ScriptCaptionInput from '../../ScriptCaptionInput/ScriptCaptionInput';

export default function StepUpload() {
    const [caption, setCaption] = useState('');
    const [tokenFile, setTokenFile] = useState(false);
    const [tokenBrand, setTokenBrand] = useState(false);
    const [file, setFile] = useState(null);
    const [brand, setBrand] = useState(null);
    return (
        <>
            <h1>
                Upload Your Creative
            </h1>

            <div className="container-inputs-ads-flow">
                <div className="input-area-ads-flw">
                    <DropzoneUpload onFileSelected={(file) => {
                        console.log(file);
                        setTokenFile(true)
                        setFile(file)
                    }}
                        tokenFile={tokenFile}
                        file={file}
                    />

                    <BrandAssetsUpload onUpload={(brand) => {
                        console.log(brand);
                        setTokenBrand(true)
                        setBrand(brand)
                    }}
                        tokenFile={tokenBrand}
                        file={brand}
                    />

                    <ScriptCaptionInput
                        value={caption}
                        onChange={(e) => setCaption(e.target.value)}
                    />
                </div>
            </div>
        </>
    );
}