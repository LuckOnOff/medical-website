import React from "react";
import AboutUsDescription from '../components/AboutUsDescription.jsx';
import AboutUsPatientsTrustUs from '../components/AboutUsPatientsTrustUs.jsx';
import AboutUsConsultation from '../components/AboutUsConsultation.jsx';
import "../css/AboutUs.css";

const AboutUsPage = () => {
    return (
        <section className="about-us">
            <AboutUsDescription/>
            <AboutUsPatientsTrustUs/>
            <AboutUsConsultation/>
        </section>
    )
}

export default AboutUsPage;