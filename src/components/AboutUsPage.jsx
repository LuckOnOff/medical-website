import React from "react";
import AboutUsDescription from '../components/AboutUsDescription.jsx';
import AboutUsPatientsTrustUs from '../components/AboutUsPatientsTrustUs.jsx';
import AboutUsConsultation from '../components/AboutUsConsultation.jsx';
import "../css/AboutUs.css";

const AboutUsPage = ({ openModal }) => {
    return (
        <section className="about-us">
            <AboutUsDescription onOpenModal={openModal}/>
            <AboutUsPatientsTrustUs/>
            <AboutUsConsultation onOpenModal={openModal}/>
        </section>
    )
}

export default AboutUsPage;