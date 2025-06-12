import React from "react";

import { IonIcon } from '@ionic/react';
import { trashOutline, reloadOutline } from 'ionicons/icons';

import "../styles/button.css";

function Button({ onClick, label, className = "", disabled = false }) {
  return (
    <button
      onClick={onClick}
      className={`button ${className}`}
      disabled={disabled}
    >
      <IonIcon icon={className === "delete" ? trashOutline : reloadOutline} />
      {label}
    </button>
  );
}

export default Button;
