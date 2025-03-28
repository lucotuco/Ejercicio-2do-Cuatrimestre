
import React from 'react';
import { Nav } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import GoalInput from './Componente/GoalInput';
import Instrucciones from './Componente/Instrucciones';
import { ThemeProvider } from './Context/ThemeContext';

const NavBar = () => (
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/Instrucciones">Instrucciones</Link></li>
    </ul>
  </nav>
);

const App = () => (
  <ThemeProvider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<GoalInput />} />
        <Route path="/Instrucciones" element={<Instrucciones />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
