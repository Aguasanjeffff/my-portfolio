import './App.css';
import Home from './pages/Home.js';
import About from './pages/About.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Project from './pages/Project.js';
import Contact from './pages/Contact.js';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/Home" element = {<Home/>} />
        <Route path="/About" element ={<About/>} />
        <Route path="/Project" element = {<Project/>} />
        <Route path="/Contact" element ={<Contact/>} />
      </Routes>
    </Router>
  )

}

export default App;
