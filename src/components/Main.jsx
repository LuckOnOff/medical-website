import React from "react";
import AboutUsPage from "./AboutUsPage.jsx";
import ServicesPage from "./ServicesPage.jsx";
import SpecialistsPage from "./SpecialistsPage.jsx";
import PatientsPage from "./PatientsPage.jsx";
import LogInPage from "./LogInPage.jsx";
import RegistrationPage from "./RegistrationPage.jsx";

const Main = ({ currentPage, onPageChange }) => {
    return (
      <main className="main">
        {currentPage === 'about' && <AboutUsPage />}
        {currentPage === 'services' && <ServicesPage />}
        {currentPage === 'specialists' && <SpecialistsPage />}
        {currentPage === 'patients' && <PatientsPage />}
        {currentPage === 'logIn' && <LogInPage onPageChange={onPageChange}/>}
        {currentPage === 'registration' && <RegistrationPage onPageChange={onPageChange} />}
      </main>
    );
  };
  

export default Main;