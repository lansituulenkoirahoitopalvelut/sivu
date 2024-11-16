import './App.css';
import logo from './images/logo.png';
import Menu from './components/Menu';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div><img src={logo} alt='Logo' height={300} width={500} /></div>
      <BrowserRouter>
        <Menu />
      </BrowserRouter>
      <div id='footer'><Footer /></div>
    </div>
  );
}

export default App;
