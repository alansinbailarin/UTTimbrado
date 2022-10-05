import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Inicio from "./pages/Inicio.jsx";
import Alumnos from "./pages/Alumnos.jsx";
import AlumnoSearch from "./pages/AlumnoSearch";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/alumnos" element={<Alumnos />} />
          <Route path="/alumnoSearch/:matricula" element={<AlumnoSearch />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
