import React, { useState } from "react";

import "../styles/dailyChallenge.css";

import Game from "../components/Game";

function DailyChallenge({ challenge }) {
  const [winner, setWinner] = useState(null);

  const handleWin = (winningCity) => {
    setWinner(winningCity);
  };

  return (
    <div className="daily-challenge">
      <h1>Devine la ville de France !</h1>
      <Game challenge={challenge} onWin={handleWin} />

      {winner && (
        <div className="victory-message">
          🎉 Bravo ! Tu as deviné la ville : <strong>{winner.name}</strong> !
        </div>
      )}
      {/* <p>This is where the daily challenge will be displayed.</p> */}
      {/* Add your daily challenge content here */}
      {/* {challenge ? (
        <div className="challenge-details">
          <h2>Today's Challenge:</h2>
          <p>City Code: {challenge.commune_code}</p>
          <p>Date: {challenge.date}</p>
          <p>Created At: {challenge.created_at}</p>
          <p>Updated At: {challenge.updated_at}</p>
        </div>
      ) : (
        <p>Loading today's challenge...</p>
      )} */}
    </div>
  );
}

export default DailyChallenge;
