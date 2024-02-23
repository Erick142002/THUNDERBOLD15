import React from 'react';
import './favteam.css';

const FavTeam = () => {
  return (
    <div className="favteam-container">
      <div className="favteam-item">
        <img src="path/to/la-liga-image.png" alt="La Liga" />
        <p>La Liga</p>
      </div>
      <div className="favteam-item">
        <img src="path/to/premier-league-image.png" alt="Premier League" />
        <p>Premier League</p>
      </div>
      <div className="favteam-item">
        <img src="path/to/bundesliga-image.png" alt="Bundesliga" />
        <p>Bundesliga</p>
      </div>
      <div className="favteam-item">
        <img src="path/to/serie-a-image.png" alt="Serie A" />
        <p>Serie A</p>
      </div>
      <div className="favteam-item">
        <img src="path/to/league1-image.png" alt="Ligue 1" />
        <p>Ligue 1</p>
      </div>
    </div>
  );
};

export default FavTeam;