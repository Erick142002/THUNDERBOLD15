import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Login from './Login';
import FavTeam from './FavTeam';
import HomeLaLiga from './HomeLaLiga';
import HomeBundesliga from './HomeBundesliga';
import HomeLeague1 from './HomeLeague1';
import HomePremierLeague from './HomePremierLeague';
import HomeSerieA from './HomeSerieA';

function App() {
  const navigate = useNavigate(); // Obtener la función navigate

  // Redirigir a la página de inicio de sesión
  React.useEffect(() => {
    navigate('/login');
  }, [navigate]);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/favteam" element={<FavTeam />} />
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
