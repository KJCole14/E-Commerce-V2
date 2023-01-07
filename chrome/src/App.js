import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Shop from './pages/Shop'
//import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Header/>
      <Home />
      <Shop />
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
