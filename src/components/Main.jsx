import React from "react";
import AboutUsDescription from '../components/AboutUsDescription.jsx';
import AboutUsPatientsTrustUs from '../components/AboutUsPatientsTrustUs.jsx';
import AboutUsConsultation from '../components/AboutUsConsultation.jsx';
import ServicesPage from "./ServicesPage.jsx";
import SpecialistsPage from "./SpecialistsPage.jsx";

const Main = () => {
    return (
        <main className='main'>
            <SpecialistsPage/>
{/*             <ServicesPage/>
            <AboutUsDescription/>
            <AboutUsPatientsTrustUs/>
            <AboutUsConsultation/> */}
        </main>
    )
}

export default Main;