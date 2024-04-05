import React, { useState } from "react";
import AboutUsPage from "./AboutUsPage.jsx";
import ServicesPage from "./ServicesPage.jsx";
import SpecialistsPage from "./SpecialistsPage.jsx";

const Main = ({ currentPage }) => {
    const renderPage = () => {
        switch (currentPage) {
            case 'about':
                return <AboutUsPage />;
            case 'services':
                return <ServicesPage />;
            case 'specialists':
                return <SpecialistsPage />;
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