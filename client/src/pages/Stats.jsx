import React from "react";

import { useDailyChallengeStats } from "../utils/useLocalStorageStats";
import Button from "../components/Button";

import "../styles/stats.css";

function Stats() {
  const [stats, setStats] = useDailyChallengeStats();
  const { gamesPlayed, averageHintsUsed, bestStreak, currentStreak } = stats;

  return (
    <div className="stats">
      <h1>Statistiques</h1>
      <div className="stats-container">
        <h2>Voici vos statistiques de jeu pour les défis du jour :</h2>

        <ul className="stats-grid">
          <li>- Parties jouées : {gamesPlayed}</li>
          <li>- Nombre d'indices moyen : {averageHintsUsed}</li>
          <li>- Plus grande série : {bestStreak}</li>
          <li>- Série actuelle : {currentStreak.length > 0 ? currentStreak.length : "Aucune"}</li>
        </ul>

        <div className="button-container">
          <Button
            onClick={() =>
              setStats({
                gamesPlayed: 0,
                averageHintsUsed: 0,
                bestStreak: 0,
                currentStreak: [],
                lastPlayedDate: null,
              })
            }
            label="Réinitialiser les statistiques"
            className="delete"
          />
        </div>
      </div>
    </div>
  );
}

export default Stats;
