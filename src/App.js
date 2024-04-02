import './css/App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Main from './components/Main.jsx';


function App() {
  return (
    <section className='container'>
        <Header/>
        <Main/>
        <Footer/>
    </section>
  );
}

export default App;