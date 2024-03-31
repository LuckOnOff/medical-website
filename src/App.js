import './css/App.css';
import Header from './components/Header.jsx';
import MainDescription from './components/MainDescription.jsx';
import MainPatientsTrustUs from './components/MainPatientsTrustUs.jsx';
import MainConsultation from './components/MainConsultation.jsx';


function App() {
  return (
    <section className='container'>
        <Header/>
        <main className='main'>
          <MainDescription/>
          <MainPatientsTrustUs/>
          <MainConsultation/>
        </main>
    </section>
  );
}

export default App;