import React from "react";
import { IonIcon } from "@ionic/react";
import { chevronUpOutline, chevronDownOutline } from "ionicons/icons";

function ClueBox({ label, selectedValue, challengeValue }) {
  const comparison =
    typeof selectedValue === "string"
      ? selectedValue.localeCompare(challengeValue)
      : parseFloat(selectedValue) - parseFloat(challengeValue);

  let clueClass = "clue";
  if (comparison === 0) clueClass += " correct";

  const showChevron = !["Département", "Région"].includes(label);

  return (
    <div className={clueClass}>
      <div className="chevron-up">
        {showChevron && comparison < 0 && <IonIcon icon={chevronUpOutline} />}
      </div>
      <div className="clue-text">
        <div className="value">{selectedValue}</div>
      </div>
      <div className="chevron-down">
        {showChevron && comparison > 0 && <IonIcon icon={chevronDownOutline} />}
      </div>
    </div>
  );
}

export default ClueBox;
