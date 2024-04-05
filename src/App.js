import { useState } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Main from './components/Main.jsx';
import ModalWindow from './components/ModalWindow.jsx';
import './css/App.css';


function App() {
  const [currentPage, setCurrentPage] = useState('about');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className='container'>
        <Header onPageChange={handlePageChange} onOpenModal={openModal}/>
        <Main currentPage={currentPage} onOpenModal={openModal}/>
        <Footer/>
        {isModalOpen && <ModalWindow closeModal={closeModal}/>}
    </section>
  );
}

export default App;