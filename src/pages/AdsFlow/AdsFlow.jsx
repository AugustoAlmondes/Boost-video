import AnimatedBackground from '../../components/AnimatedBackground/AnimatedBackground';
import ProgressBar from '../../components/ProgressBarCreate/ProgressBarCreate';
import { useState } from 'react';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import InsightsIcon from '@mui/icons-material/Insights';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import DescriptionIcon from '@mui/icons-material/Description';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';
import StepUpload from '../../components/StepsAdsFlow/StepUpload/StepUpload';
import CampaignContext from '../../components/StepsAdsFlow/CampaignContext/CampaignContext';
import Footer from '../../components/Footer/Footer';
import './adsflow.css';
import CreativeAnalysis from '../../components/StepsAdsFlow/CreativeAnalysis/CreativeAnalysis';
import NewCA from '../../components/StepsAdsFlow/NewCA/NewCA';


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
            return <CampaignContext />;
        case 2:
            // return <CreativeAnalysis />;
            return <NewCA/>;
        case 3:
            return <div>Suggestions</div>;
        case 4:
            return <div>Report</div>;
        default:
            return <div>Unknown step</div>;
    }
}

function upScreenTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


export default function AdsFlow() {
    const [currentStep, setCurrentStep] = useState(0);
    const [direction, setDirection] = useState(1); // 1 para Next e 0 para Back
    return (
        <>
            <div className="container-ads-flow">
                <div className='ads-flow-box'>
                    <div className="container-progress-bar">
                        <ProgressBar listSteps={steps} currentStep={currentStep} listIcons={stepIcons} direction={direction} />
                    </div>

                    <div className="container-step">
                        {getStepContent(currentStep)}
                    </div>

                    <div className="buttons-next-back">
                        <button className="back-button" style={currentStep === 0 ? { opacity: 0, pointerEvents: 'none' } : {}}
                            onClick={() => {
                                setCurrentStep((prevStep) => prevStep - 1)
                                setDirection(0)
                                upScreenTop()
                            }}
                        > <FaLongArrowAltLeft size={20} /> Back</button>

                        <button className="next-button"
                            onClick={() => {
                                setCurrentStep((prevStep) => prevStep + 1)
                                setDirection(1)
                                upScreenTop()
                            }}
                        >Continue to Context  <FaLongArrowAltRight size={20} />
                        </button>
                    </div>
                </div>
            </div>
            {/* <AnimatedBackground /> */}
            <Footer />
        </>
    );
}