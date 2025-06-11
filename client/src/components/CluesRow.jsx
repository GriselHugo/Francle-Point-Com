import React from "react";
import ClueBox from "./ClueBox";

function CluesRow({ city, challenge, clues, isFirstRow = false }) {
  return (
    <>
    {isFirstRow && (
      <div className="clues-labels-row">
        {clues.map((clue, index) => (
          <div key={index} className="clue-label">
            {clue.label} :
          </div>
        ))}
      </div>
    )}

    <div className="clue-city-name">
      {city.name} ({city.commune_code}) :
    </div>

    <div className="clues-row">
      {clues.map((clue, index) => (
        <ClueBox
          key={index}
          label={clue.label}
          selectedValue={clue.value(city)}
          challengeValue={clue.value(challenge)}
        />
      ))}
    </div>
    </>
  );
}

export default CluesRow;
