import React from "react";
import AboutUsPage from "./AboutUsPage.jsx";
import ServicesPage from "./ServicesPage.jsx";
import SpecialistsPage from "./SpecialistsPage.jsx";
import PatientsPage from "./PatientsPage.jsx";
import LogInPage from "./LogInPage.jsx";
import RegistrationPage from "./RegistrationPage.jsx";

const Main = ({ currentPage, onPageChange }) => {
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
                return <LogInPage onPageChange = {onPageChange}/>;
            case 'registration':
                return <RegistrationPage onPageChange = {onPageChange}/>
            default:
                return <AboutUsPage/>;
        }
    }

    return (
        <main className='main'>
            {renderPage()}
        </main>
    )
}

export default Main;