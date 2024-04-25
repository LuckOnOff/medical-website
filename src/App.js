import { HashRouter, Routes, Route } from 'react-router-dom';
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

  return (
    <HashRouter> 
      <section className='container'> 
        <Header/>
        <main className='main'>
        <Routes>
            <Route path="/" element={<AboutUsPage/>} />
            <Route path="/services" element={<ServicesPage/>} />
            <Route path="/specialists" element={<SpecialistsPage/>} />
            <Route path="/patients" element={<PatientsPage/>} />
            <Route path="/login" element={<LogInPage/>} />
            <Route path="/registration" element={<RegistrationPage/>} />
        </Routes> 
        </main>
        <Footer/> 
      </section> 
    </HashRouter> 
  );
}

export default App;