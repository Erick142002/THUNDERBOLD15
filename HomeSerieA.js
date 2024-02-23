// SerieA.js

import React, { useState, useEffect } from 'react';
import './HomeLaLiga.css'; // Importa tu archivo CSS

function SerieA() {
  const [topScorers, setTopScorers] = useState([]);
  const [leagueStandings, setLeagueStandings] = useState([]);
  const [topAssistProviders, setTopAssistProviders] = useState([]);
  const [recentResults, setRecentResults] = useState([]);

  // Encapsulando la llamada a la API en una función
  const fetchData = () => {
    // Obtener datos de los máximos goleadores
    fetch("https://v3.football.api-sports.io/players/topscorers?season=2023&league=135", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "8fb089bd6a52cc4f974c33bfbc015551" // Asegúrate de usar tu propia clave de API
      }
    })
    .then(response => response.json())
    .then(data => {
      setTopScorers(data.response);
    })
    .catch(err => {
      console.error(err);
    });

    // Obtener datos de la tabla de posiciones
    fetch("https://v3.football.api-sports.io/standings?season=2023&league=135", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "8fb089bd6a52cc4f974c33bfbc015551" // Asegúrate de usar tu propia clave de API
      }
    })
    .then(response => response.json())
    .then(data => {
      setLeagueStandings(data.response[0].league.standings[0]);
    })
    .catch(err => {
      console.error(err);
    });

    // Obtener datos de los máximos asistentes
    fetch("https://v3.football.api-sports.io/players/topassists?season=2023&league=135", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "8fb089bd6a52cc4f974c33bfbc015551" // Asegúrate de usar tu propia clave de API
      }
    })
    .then(response => response.json())
    .then(data => {
      setTopAssistProviders(data.response);
    })
    .catch(err => {
      console.error(err);
    });

    // Obtener resultados recientes
    fetch("https://v3.football.api-sports.io/fixtures?season=2023&league=135&status=FT", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "8fb089bd6a52cc4f974c33bfbc015551" // Asegúrate de usar tu propia clave de API
      }
    })
    .then(response => response.json())
    .then(data => {
      setRecentResults(data.response);
    })
    .catch(err => {
      console.error(err);
    });
  };

  useEffect(() => {
    fetchData(); // Llamar a la función dentro de useEffect
  }, []); // El arreglo vacío asegura que el efecto se ejecute solo una vez, al montar el componente

  return (
    <div className="serieA-container">
      <h1>Bienvenido a la página Home de la Serie A</h1>
      
      <div className="standings-container">
        <h2>Tabla de Posiciones</h2>
        <ul className="standings-list">
          {leagueStandings.map((team, index) => (
            <li key={index}>{team.team.name} - Puntos: {team.points}</li>
          ))}
        </ul>
      </div>

      <div className="top-scorers-container">
        <h2>Top Goleadores de la Serie A</h2>
        <ol className="top-scorers-list">
          {topScorers.map((scorer, index) => (
            <li key={index}>{scorer.player.name} - Goles: {scorer.statistics[0].goals.total}</li>
          ))}
        </ol>
      </div>

      <div className="assist-providers-container">
        <h2>Maximos Asistentes</h2>
        <ol className="assist-providers-list">
          {topAssistProviders.map((provider, index) => (
            <li key={index}>{provider.player.name} - Asistencias: {provider.statistics[0].goals.assists}</li>
          ))}
        </ol>
      </div>

      <div className="recent-results-container">
        <h2>Resultados Recientes</h2>
        <ul className="recent-results-list">
          {recentResults.map((result, index) => (
            <li key={index}>{result.teams.home.name} {result.fixture.goals.home} - {result.fixture.goals.away} {result.teams.away.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SerieA;
