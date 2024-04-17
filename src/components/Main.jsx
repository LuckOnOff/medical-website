import React from "react";
import AboutUsPage from "./AboutUsPage.jsx";
import ServicesPage from "./ServicesPage.jsx";
import SpecialistsPage from "./SpecialistsPage.jsx";
import PatientsPage from "./PatientsPage.jsx";
import LogInPage from "./LogInPage.jsx";

const Main = ({ currentPage}) => {
    const renderPage = () => {
        switch (currentPage) {
            case 'about':
                return <AboutUsPage/>;
            case 'services':
                return <ServicesPage/>;
            case 'specialists':
                return <SpecialistsPage/>;
            case 'patients':
                return <PatientsPage/>;
            case 'logIn':
                return <LogInPage/>;
            default:
                return <AboutUsPage />;
        }
    }

    return (
        <main className='main'>
            {renderPage()}
        </main>
    )
}

export default Main;