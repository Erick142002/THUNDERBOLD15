import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login'; // Importa el componente Login
import FavTeam from './FavTeam'; // Importa el componente FavTeam
import HomeLaLiga from './HomeLaLiga';
import HomeBundesliga from './HomeBundesliga'; 
import HomeLeague1 from './HomeLeague1';
import HomePremierLeague from './HomePremierLeague';
import HomeSerieA from './HomeSerieA';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} /> {/* Ruta para la página de inicio de sesión */}
        <Route path="/favteam" element={<FavTeam />} /> {/* Ruta para la selección de equipo favorito */}
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/homeLaLiga" element={<HomeLaLiga />} />
        <Route path="/homeBundesliga" element={<HomeBundesliga />} />
        <Route path="/homeLeague1" element={<HomeLeague1 />} />
        <Route path="/homePremierLeague" element={<HomePremierLeague />} />
        <Route path="/homeSerieA" element={<HomeSerieA />} />
      </Routes>
    </Router>
  );
}

export default App;


