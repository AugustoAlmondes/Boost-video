import AnimatedBackground from '../../components/AnimatedBackground/AnimatedBackground';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import { useState } from 'react';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import InsightsIcon from '@mui/icons-material/Insights';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import DescriptionIcon from '@mui/icons-material/Description';
import './adsflow.css';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';
import StepUpload from '../../components/StepsAdsFlow/StepUpload/StepUpload';


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

function getStepContent(step) {
    switch (step) {
        case 0:
            return <StepUpload />;
        case 1:
            return <div>Context</div>;
        case 2:
            return <div>Analysis</div>;
        case 3:
            return <div>Suggestions</div>;
        case 4:
            return <div>Report</div>;
        default:
            return <div>Unknown step</div>;
    }
}


export default function AdsFlow() {
    const [currentStep, setCurrentStep] = useState(0);
    return (
        <>
            <div className="container-ads-flow">
                <div className='ads-flow-box'>
                    <div className="container-progress-bar">
                        <ProgressBar listSteps={steps} currentStep={currentStep} listIcons={stepIcons} />
                    </div>

                    <div className="container-step">
                        {getStepContent(currentStep)}
                    </div>

                    <div className="buttons-next-back">
                    <button className="back-button" style={currentStep === 0 ? { opacity: 0, pointerEvents: 'none' } : {}}
                            onClick={() => setCurrentStep((prevStep) => prevStep - 1)}
                        > <FaLongArrowAltLeft size={20} /> Back</button>

                        <button className="next-button"
                            onClick={() => setCurrentStep((prevStep) => prevStep + 1)}
                        >Continue to Context  <FaLongArrowAltRight size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}