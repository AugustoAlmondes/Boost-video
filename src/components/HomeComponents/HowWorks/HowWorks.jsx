import './howworks.css';
import { useEffect, useState } from 'react';
import { motion as MOTION } from 'framer-motion';
import { Stepper, Step, StepLabel, StepContent, Box } from '@mui/material';

import HowWorksImage from '/img/boost2.jpg';
import UploadImageWork from '/howworks/upload.png';
import PredictionImageWork from '/howworks/prediction.png';
import AnalysisImageWork from '/howworks/analysis.png';

const steps = [
    {
        label: 'Upload Creative',
        image: UploadImageWork,
        color: '#B9E184',
        description: "Send your video optimized directly to platforms such as Google and TikTok easily. After analysis and adjustments, publish with just a few clicks and reach your audience much more accurately.",
    },
    {
        label: 'Performance and Insights',
        image: PredictionImageWork,
        color: '#F65655',
        description: "Have access to detailed performance forecasts before you even publish your video. Our AI anticipates the results based on previous campaign data and standards.",
    },
    {
        label: 'Creative Edits',
        image: AnalysisImageWork,
        color: '#648DCB',
        description: "Receive an instant and intelligent analysis of your creative piece. Our AI evaluates visual elements, messages, and impact to reveal what works.",
    },
    {
        label: 'Distribution',
        image: UploadImageWork,
        color: '#6A5ACD',
        description: "Automatically distribute content based on the most relevant target audience and campaign objectives.",
    },
    {
        label: 'Optimization',
        image: PredictionImageWork,
        color: '#FFA500',
        description: "Continuously improve your video with real-time feedback and AI-driven optimization strategies.",
    },
];

export default function HowWorks() {
    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveStep(prev => (prev < steps.length - 1 ? prev + 1 : 0));
        }, 7000);
        return () => clearInterval(timer);
    }, []);

    const handleStepClick = (index) => {
        setActiveStep(index);
    };

    return (
        <section className="how-works-section">
            <h1>How Boost Works</h1>
            <div className="how-works-wrapper-v2">
                <MOTION.div
                    className="how-works-image"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <img src={HowWorksImage} alt="How Klile Works" />
                </MOTION.div>

                <Box className="how-works-stepper">
                    <Stepper activeStep={activeStep} orientation="vertical">
                        {steps.map((step, index) => (
                            <Step key={step.label}>
                                <StepLabel
                                    onClick={() => handleStepClick(index)}
                                    className={`step-label ${index === activeStep ? 'active-label' : ''}`}
                                >
                                    <h3>{step.label}</h3>
                                </StepLabel>
                                <StepContent>
                                    <MOTION.div
                                        className="how-works-step-content"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <div
                                            className="step-image-box">
                                            <img src={step.image} alt={step.label} />
                                        </div>
                                        <p>{step.description}</p>
                                    </MOTION.div>
                                </StepContent>
                            </Step>
                        ))}
                    </Stepper>
                </Box>
            </div>
        </section>
    );
}
