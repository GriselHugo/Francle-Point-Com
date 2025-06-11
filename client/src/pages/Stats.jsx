import React from "react";

function Stats() {
  return (
    <div className="stats">
      <h1>Statistiques</h1>
      <p>Voici vos statistiques de jeu.</p>
      {/* Add your statistics content here */}
      <ul>
        <li>Parties jouées : 10</li>
        <li>Nombre d'indices moyen : 85%</li>
        <li>Plus grande série : 7</li>
        <li>Série actuelle : 3</li>
      </ul>
    </div>
  );
}

export default Stats;
