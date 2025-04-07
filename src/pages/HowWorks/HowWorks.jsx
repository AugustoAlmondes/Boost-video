import './style.css';
import HowWorksImage from '/howworks/works.png'
import UploadImageWork from '/howworks/upload.png'
import PredictionImageWork from '/howworks/prediction.png'
import AnalysisImageWork from '/howworks/analysis.png'
import Work from '../../components/Works/Work';

const workItems = [
    {
        image: UploadImageWork,
        title: "Upload Criative",
        color: "#B9E184",
        description: "Send your ads optimized directly to platforms such as goal and tiktok easily. After analysis and adjustments, publish with just a few clicks and reach your audience much more accurately."
    },
    {
        image: PredictionImageWork,
        title: "Performance Prediction",
        color: "#F65655",
        description: "Have access to detailed performance forecasts before you even publish your ads. Our Ia anticipates the results based on previous campaign data and standards, helping you make more strategic and assertive decisions."
    },
    {
        image: AnalysisImageWork,
        title: "AI Analysis",
        color: "#648DCB",
        description: "Receive an instant and intelligent analysis of your creative piece. Our Ia evaluates visual elements, messages and impact to reveal what works - and what can be improved - in your campaigns."
    }
];

export default function HowWorks() {
    return (
        <>
            <div className="container-how-works">
                <div className="image-how-works">
                    <img src={HowWorksImage} alt="How Works Image" />
                </div>

                <div className="text-area-works">
                    {workItems.map((item, index) => (
                        <Work
                            key={index}
                            imageLink={item.image}
                            title={item.title}
                            color={item.color}
                            description={item.description}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}