import AnimatedBackground from '../../components/AnimatedBackground/AnimatedBackground';
import './adsflow.css';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import { useState } from 'react';
import UploadFileIcon from '@mui/icons-material/UploadFile';        // Para "Upload"
import TextFieldsIcon from '@mui/icons-material/TextFields';         // Para "Context"
import InsightsIcon from '@mui/icons-material/Insights';             // Para "Analysis"
import LightbulbIcon from '@mui/icons-material/Lightbulb';           // Para "Suggestions"
import DescriptionIcon from '@mui/icons-material/Description';       // Para "Report"

const steps = [
    'Upload',
    'Context',
    'Analysis',
    'Suggestions',
    'Report'
]

const stepIcons = {
    1: <UploadFileIcon />,
    2: <TextFieldsIcon />,
    3: <InsightsIcon />,
    4: <LightbulbIcon />,
    5: <DescriptionIcon />
};


export default function AdsFlow() {
    const [currentStep, setCurrentStep] = useState(0);
    return (
        <>
            <div className="container-ads-flow">
                <div className='ads-flow-box'>
                    <div className="container-progress-bar">
                        <ProgressBar listSteps={steps} currentStep={currentStep} listIcons={stepIcons} />
                    </div>

                    <div className="container-content-ads-flow">
                        teste
                    </div>
                    <button
                        onClick={() => {
                            setCurrentStep(currentStep + 1);
                            console.log(currentStep);
                        }}
                    >Click</button>
                    <button
                        onClick={() => {
                            setCurrentStep(0);
                        }}
                    >Reset</button>
                </div>
                <AnimatedBackground />
            </div>
        </>
    );
}