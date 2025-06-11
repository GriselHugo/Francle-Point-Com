import React from "react";
import ClueBox from "./ClueBox";

function CluesRow({ city, challenge, clues }) {
  return (
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
  );
}

export default CluesRow;
