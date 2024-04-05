import { useState } from 'react';
import './css/App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Main from './components/Main.jsx';


function App() {
  const [currentPage, setCurrentPage] = useState('about');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <section className='container'>
        <Header onPageChange={handlePageChange}/>
        <Main currentPage={currentPage}/>
        <Footer/>
    </section>
  );
}

export default App;