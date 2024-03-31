import './css/App.css';
import Header from './components/Header.jsx';
import MainDescription from './components/MainDescription.jsx';


function App() {
  return (
    <section className='container'>
        <Header/>
        <main className='main'>
          <MainDescription/>
        </main>
    </section>
  );
}

export default App;