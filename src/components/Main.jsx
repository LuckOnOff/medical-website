import React from "react";
import AboutUsPage from "./AboutUsPage.jsx";
import ServicesPage from "./ServicesPage.jsx";
import SpecialistsPage from "./SpecialistsPage.jsx";
import PatientsPage from "./PatientsPage.jsx";

const Main = ({ currentPage, onOpenModal }) => {
    const renderPage = () => {
        switch (currentPage) {
            case 'about':
                return <AboutUsPage openModal={onOpenModal}/>;
            case 'services':
                return <ServicesPage openModal={onOpenModal}/>;
            case 'specialists':
                return <SpecialistsPage/>;
            case 'patients':
                return <PatientsPage/>;
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