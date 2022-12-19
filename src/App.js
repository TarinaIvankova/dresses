import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import Dress from './Dress';
import Wedding from './Wedding';
import Contact from './Contact';


function App() {
return <Router> <nav>
  <Link to="/" className='Link'>Dress</Link>
  <Link to="/wedding" className='Link'>Wedding</Link>
  <Link to="/contact" className='Link'>Contact</Link>
</nav>
<Routes>
  <Route path="/" element={<Dress/>}/>
  <Route path="/wedding" element={<Wedding/>}/>
  <Route path="/contact" element={<Contact/>}/>
</Routes>
</Router>

}

export default App;
