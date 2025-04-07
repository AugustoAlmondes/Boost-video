import './style.css';

export default function Work({ imageLink, title, color, description }) {
    return (
        <>
            <div className="container-work">
                <div className="image-work">
                    <img src={imageLink} alt="Work Image" />
                </div>

                <div className="text-area-work">
                    <h1 style={{
                        color: color
                    }}>{title}</h1>
                    <p>{description}</p>
                </div>
            </div>
        </>
    );
}