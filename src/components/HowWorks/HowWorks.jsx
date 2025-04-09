import './style.css';
import { motion as MOTION } from 'framer-motion';

import HowWorksImage from '/howworks/works.png';
import UploadImageWork from '/howworks/upload.png';
import PredictionImageWork from '/howworks/prediction.png';
import AnalysisImageWork from '/howworks/analysis.png';
import Work from '../Works/Work';

const workItems = [
    {
        image: UploadImageWork,
        title: "Upload Creative",
        color: "#B9E184",
        description:
            "Send your ads optimized directly to platforms such as Google and TikTok easily. After analysis and adjustments, publish with just a few clicks and reach your audience much more accurately.",
    },
    {
        image: PredictionImageWork,
        title: "Performance Prediction",
        color: "#F65655",
        description:
            "Have access to detailed performance forecasts before you even publish your ads. Our AI anticipates the results based on previous campaign data and standards, helping you make more strategic and assertive decisions.",
    },
    {
        image: AnalysisImageWork,
        title: "AI Analysis",
        color: "#648DCB",
        description:
            "Receive an instant and intelligent analysis of your creative piece. Our AI evaluates visual elements, messages, and impact to reveal what works — and what can be improved — in your campaigns.",
    },
];

export default function HowWorks() {
    return (
        <MOTION.section
            className="how-works-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="how-works-wrapper">
                <MOTION.div
                    className="how-works-image"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    <img src={HowWorksImage} alt="Illustration showing how it works" />
                </MOTION.div>

                <MOTION.div
                    className="how-works-content"
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                >
                    <div className="work-items">
                        {workItems.map((item, index) => (
                            <MOTION.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                                viewport={{ once: true }}
                            >
                                <Work
                                    imageLink={item.image}
                                    title={item.title}
                                    color={item.color}
                                    description={item.description}
                                />
                            </MOTION.div>
                        ))}
                    </div>
                </MOTION.div>
            </div>
        </MOTION.section>
    );
}
