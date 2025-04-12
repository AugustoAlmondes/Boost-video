import { useState } from 'react';
import './stepupload.css';
import DropzoneUpload from '../../DropzoneUpload/DropzoneUploade';
import BrandAssetsUpload from '../../BrandAssetsUpload/BrandAssetsUpload';
import ScriptCaptionInput from '../../ScriptCaptionInput/ScriptCaptionInput';

export default function StepUpload() {
    const [caption, setCaption] = useState('');
    return (
        <>
            <h1>
                Upload Your Creative
            </h1>

            <div className="container-inputs-ads-flow">
                <div className="input-area-ads-flw">
                    <DropzoneUpload onFileSelected={(file) => console.log(file)} />

                    <BrandAssetsUpload onUpload={(file) => console.log(file)} />

                    <ScriptCaptionInput
                        value={caption}
                        onChange={(e) => setCaption(e.target.value)}
                    />
                </div>
            </div>
        </>
    );
}