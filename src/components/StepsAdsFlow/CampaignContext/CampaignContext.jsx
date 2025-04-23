import { FaBullhorn, FaFacebook, FaInstagram, FaShoppingCart, FaTiktok, FaTwitter, FaUserPlus, FaYoutube } from 'react-icons/fa';
import { FaMeta } from "react-icons/fa6";
import './campaigncontext.css';
import GenderSelect from '../../GenderSelect/GenderSelect';
import { useState } from 'react';
import '../../../index.css'
// import { useState } from 'react';


export default function CampaignContext() {
    const [selectedObjective, setSelectedObjective] = useState("");
    const [selectedPlatform, setSelectedPlatform] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [location, setLocation] = useState("");
    const [industry, setIndustry] = useState("");
    const [valueProposition, setValueProposition] = useState("");

    return (
        <>
            <h1>Campaign Context</h1>

            <div className="container-inputs-ads-flow">
                <div className="input-area-ads-flw">

                    <div className={selectedObjective ? "container-campaign-objective active" : "container-campaign-objective"}>
                        <h3 className="subtitle-box">Campaign Objective</h3>
                        <ul>
                            <li
                                className={selectedObjective === "Sales" ? "active" : ""}
                                onClick={() => setSelectedObjective("Sales")}
                            >
                                <FaShoppingCart className="campaign-objective-icon" />
                                <p>Sales</p>
                            </li>
                            <li
                                className={selectedObjective === "Leads" ? "active" : ""}
                                onClick={() => setSelectedObjective("Leads")}
                            >
                                <FaUserPlus className="campaign-objective-icon" />
                                <p>Lead Generation</p>
                            </li>
                            <li
                                className={selectedObjective === "Awareness" ? "active" : ""}
                                onClick={() => setSelectedObjective("Awareness")}
                            >
                                <FaBullhorn className="campaign-objective-icon" />
                                <p>Brand Awareness</p>
                            </li>
                        </ul>
                    </div>

                    <div className={age != '' && gender != '' && location != '' ? "container-target-audience active": "container-target-audience"}
                    >
                        <h3 className="subtitle-box">Target Audience</h3>

                        <div className="area-inputs-target-audience">
                            <div className="age-target-audience">
                                <h4> Age</h4>
                                <input type="number" id="age-range" name="age-range" max="100" min="0" placeholder="Enter age range"
                                    onChange={(e) => {
                                        setAge(e.target.value)
                                    }}
                                />
                            </div>

                            <div className="gender-target-audience">
                                <h4>Gender</h4>
                                <GenderSelect gender={gender} setGender={setGender} />
                            </div>

                            <div className="location-target-audience"
                                onChange={(e) => {
                                    setLocation(e.target.value)
                                }}
                            >
                                <h4>Location</h4>
                                <input type="text" id="location" name="location" placeholder="Enter location" />
                            </div>
                        </div>
                    </div>

                    <div className={selectedPlatform ? "container-campaign-objective active" : "container-campaign-objective"}>
                        <h3 className="subtitle-box">Platform Selection</h3>
                        <ul>
                            <li
                                className={selectedPlatform === "TikTok" ? "active" : ""}
                                onClick={() => setSelectedPlatform("TikTok")}
                            >
                                <FaTiktok className="campaign-objective-icon" />
                                <p>TikTok</p>
                            </li>
                            <li
                                className={selectedPlatform === "Meta" ? "active" : ""}
                                onClick={() => setSelectedPlatform("Meta")}
                            >
                                <FaMeta className="campaign-objective-icon" />
                                <p>Meta</p>
                            </li>
                            <li
                                className={selectedPlatform === "Instagram" ? "active" : ""}
                                onClick={() => setSelectedPlatform("Instagram")}
                            >
                                <FaInstagram className="campaign-objective-icon" />
                                <p>Instagram</p>
                            </li>
                            <li
                                className={selectedPlatform === "Facebook" ? "active" : ""}
                                onClick={() => setSelectedPlatform("Facebook")}
                            >
                                <FaFacebook className="campaign-objective-icon" />
                                <p>Facebook</p>
                            </li>
                            <li
                                className={selectedPlatform === "Twitter" ? "active" : ""}
                                onClick={() => setSelectedPlatform("Twitter")}
                            >
                                < FaTwitter className="campaign-objective-icon" />
                                <p>Twitter</p>
                            </li>
                            <li
                                className={selectedPlatform === "Youtube" ? "active" : ""}
                                onClick={() => setSelectedPlatform("Youtube")}
                            >
                                <FaYoutube className="campaign-objective-icon" />
                                <p>youtube</p>
                            </li>
                        </ul>
                    </div>

                    <div className={industry != '' && valueProposition != '' ? " container-target-audience active" : "container-target-audience" }
                    >
                        <h3 className="subtitle-box">Industry</h3>

                        <div className='gray-background'>
                            <input type="text" className="input-type-industry" placeholder='Enter Industry'
                                onChange={(e) => {
                                    setIndustry(e.target.value)
                                }}
                            />

                            <div className="area-input-value-proposition">
                                <h4>Value Proposition (What do you sell? Why you are unique?)</h4>
                                <textarea name="value-proposition" id="value-proposition"
                                    placeholder='Describe your main product/service benefit (e.g., Best cost value shampoo for curly hair)'
                                    onChange={(e) => {
                                        setValueProposition(e.target.value)
                                    }}
                                ></textarea>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}