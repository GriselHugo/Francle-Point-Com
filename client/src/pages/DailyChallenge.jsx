import React, { useState } from "react";

import "../styles/dailyChallenge.css";

import Game from "../components/Game";
import Button from "../components/Button";

import { reloadOutline } from "ionicons/icons";

import { useDailyChallengeStats } from "../utils/useLocalStorageStats";

function DailyChallenge({ challenge }) {
  const today = new Date().toISOString().split("T")[0]; // "2025-06-12"

  const [winner, setWinner] = useState(null);
  const [stats, setStats] = useDailyChallengeStats();

  const [alreadyFound, setAlreadyFound] = useState(stats.lastPlayedDate === today);
  const [resetGame, setResetGame] = useState(false);

  const updateStats = (hintsUsed) => {
    const today = new Date().toISOString().split("T")[0]; // "2025-06-12"
    const newGamesPlayed = stats.gamesPlayed + 1;
    const newAverage = ((stats.averageHintsUsed * stats.gamesPlayed) + hintsUsed) / newGamesPlayed;

    let newCurrentStreak = [...stats.currentStreak];
    let newBestStreak = stats.bestStreak;

    if (stats.lastPlayedDate) {
      const yesterday = new Date(stats.lastPlayedDate);
      yesterday.setDate(yesterday.getDate() + 1);

      if (today === yesterday.toISOString().split("T")[0]) {
        newCurrentStreak.push(today);
      } else if (today !== stats.lastPlayedDate) {
        newCurrentStreak = [today]; // reset streak
      }
    } else {
      newCurrentStreak = [today];
    }

    if (newCurrentStreak.length > newBestStreak) {
      newBestStreak = newCurrentStreak.length;
    }

    setStats({
      gamesPlayed: newGamesPlayed,
      averageHintsUsed: Number(newAverage.toFixed(2)),
      bestStreak: newBestStreak,
      currentStreak: newCurrentStreak,
      lastPlayedDate: today,
    });
  };

  const handleWin = (winningCity, hintsUsed) => {
    setWinner(winningCity);
    updateStats(hintsUsed);
  };

  return (
    <div className="daily-challenge">
      <h1>Devine la ville de France !</h1>
      <div className="daily-challenge-description">
        <h2>
          Chaque jour, un défi unique t'attend. Tu dois deviner la ville de France
          du jour en utilisant le moins d'indices possible. Bonne chance !
        </h2>
      </div>
      <Game key={resetGame} challenge={challenge} onWin={handleWin} disabledSearchBar={alreadyFound} alreadyFound={alreadyFound} />

      {winner && (
        <div className="victory-message">
          🎉 Bravo ! Tu as deviné la ville : <strong>{winner.name}</strong> !
        </div>
      )}

      {/* Utilisation à des fins de test */}
      {(alreadyFound || winner) && (
        <Button
          label="Rejouer (Test)"
          className="reload"
          icon={reloadOutline}
          onClick={() => {
            setWinner(null);
            setAlreadyFound(false);
            setResetGame(!resetGame);
          }}
        />
      )}
      {/* Utilisation à des fins de test */}
    </div>
  );
}

export default DailyChallenge;
