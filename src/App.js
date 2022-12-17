import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';


function App() {
return <Router> <nav>
  <Link to="/" className='Link'>Home</Link>
  <Link to="/about" className='Link'>About</Link>
  <Link to="/contact" className='Link'>Contact</Link>
</nav>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/contact" element={<Contact/>}/>
</Routes>
</Router>

}

export default App;
