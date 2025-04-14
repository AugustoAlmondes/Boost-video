import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import HowWorks from "../../components/HomeComponents/HowWorks/HowWorks";
import Performance from "../../components/HomeComponents/Performance/Performance";
import SubHeader from "../../components/HomeComponents/SubHeader/SubHeader";
import Testimony from "../../components/HomeComponents/Testimony/Testimony";
import UseCasesSection from "../../components/HomeComponents/UseCasesSection/UseCasesSection";

import './home.css';

export default function Home() {
    return (
        <div className="home-container">
            <SubHeader />
            <HowWorks />
            <Performance />
            <UseCasesSection />
            <Testimony />
            <Footer />
        </div>
    );
}