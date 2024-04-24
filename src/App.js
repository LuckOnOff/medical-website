import { useState } from 'react';
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
    <section className='container'>
        <Header onPageChange={handlePageChange}/>
        <Main currentPage={currentPage} onPageChange={handlePageChange}/>
        <Footer/>
    </section>
  );
}

export default App;