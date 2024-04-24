import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import AboutUsPage from "./components/AboutUsPage.jsx";
import ServicesPage from "./components/ServicesPage.jsx";
import SpecialistsPage from "./components/SpecialistsPage.jsx";
import PatientsPage from "./components/PatientsPage.jsx";
import LogInPage from "./components/LogInPage.jsx";
import RegistrationPage from "./components/RegistrationPage.jsx";
import './css/App.css';


function App() {
  const [currentPage, setCurrentPage] = useState('about');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <BrowserRouter> 
      <section className='container'> 
        <Header onPageChange={handlePageChange} />
        <main className='main'>
        <Routes>
            <Route path="/medical-website/about" element={<AboutUsPage/>} />
            <Route path="/medical-website/services" element={<ServicesPage/>} />
            <Route path="/medical-website/specialists" element={<SpecialistsPage/>} />
            <Route path="/medical-website/patients" element={<PatientsPage/>} />
            <Route path="/medical-website/login" element={<LogInPage/>} />
            <Route path="/medical-website/registration" element={<RegistrationPage/>} />
        </Routes> 
        </main>
        <Footer/> 
      </section> 
    </BrowserRouter> 
  );
}

export default App;