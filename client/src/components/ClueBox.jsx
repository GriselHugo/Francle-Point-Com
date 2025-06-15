import React from "react";
import { IonIcon } from "@ionic/react";
import { addOutline, removeOutline } from "ionicons/icons";

function ClueBox({ label, selectedValue, challengeValue }) {
  const comparison =
    label === "Habitants"
      ? parseInt(selectedValue.replace(/\s/g, "")) - parseInt(challengeValue.replace(/\s/g, ""))
      : selectedValue.localeCompare(challengeValue);

  let clueClass = "clue";
  if (comparison === 0) clueClass += " correct";

  const showChevron = !["Département", "Région"].includes(label);

  return (
    <div className={clueClass}>
      <div className="chevron-up">
        {showChevron && comparison < 0 && <IonIcon icon={addOutline} />}
      </div>
      <div className="clue-text">
        <div className="value">{selectedValue}</div>
      </div>
      <div className="chevron-down">
        {showChevron && comparison > 0 && <IonIcon icon={removeOutline} />}
      </div>
    </div>
  );
}

export default ClueBox;
