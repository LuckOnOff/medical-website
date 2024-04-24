import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Main from './components/Main.jsx';
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
        <Routes> 
          <Route path="/medical-website/*" element={<Main currentPage={currentPage} onPageChange={handlePageChange} />} /> 
        </Routes> 
        <Footer/> 
      </section> 
    </BrowserRouter> 
  );
}

export default App;