import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Link, Route, Routes}from 'react-router-dom'
import Contact from './pages/Contact';

import Welcome from './components/Welcome';
import Aboutme from './pages/Aboutme';
import Perfile from './pages/Perfile';
import Footer from './pages/Footer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
    <Router>
    <div>

      <ul>
        <li>
          <Link to ="/Home">  Home</Link>
        </li>

        <li>
          <Link to = "/Contact"> Contacto </Link>
        </li>

        <li>
          <Link to ="/Aboutme">  Aboutme</Link>
        </li>

        <li>
          <Link to ="/Perfile"> Perfil</Link>
        </li>

        <li>
          <Link to ="Footer"> Footer</Link>
        </li>

      </ul>
    </div>

    <Routes>
      <Route path='/Contact' element={<Contact/>} />
      <Route path='/Aboutme' element = {<Aboutme/>}/>
      <Route path='/Perfile/:name' element ={<Perfile/>}/>
      <Route path='/Footer/:name' element = {<Footer/>}/>

    </Routes>

    </Router>



      </header>
    </div>
  );
}

export default App;
