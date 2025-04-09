import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import HowWorks from "../../components/HowWorks/HowWorks";
import Performance from "../../components/Performance/Performance";
import SubHeader from "../../components/SubHeader/SubHeader";
import Testimony from "../../components/Testimony/Testimony";

import './home.css';

export default function Home() {
    return (
        <div className="home-container">
            <SubHeader />
            <Header />
            <HowWorks />
            <Performance />
            <Testimony />
            <Footer />
        </div>
    );
}