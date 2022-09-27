import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Inicio.jsx';
import Inicio from './pages/Inicio.jsx';
import Alumnos from './pages/Alumnos.jsx';
import Grupo from './pages/Grupo.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/alumnos" element={<Alumnos />} />
          <Route path="/grupo" element={<Grupo />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;