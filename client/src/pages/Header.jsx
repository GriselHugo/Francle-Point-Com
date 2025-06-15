import React from "react";
import { useTheme } from "../utils/theme";

import "../styles/header.css";

import { IonIcon } from '@ionic/react';
import { sunnyOutline, moonOutline, helpCircleOutline, earthOutline, colorWandOutline, statsChartOutline } from 'ionicons/icons';

function Header({ page, onNavigate }) {
  const { theme, toggleTheme } = useTheme();

  const isActive = (p) => (page === p ? "active" : "");

  return (
    <header className={`header ${theme}`}>
      <h1 className="title">FRANCLE-POINT-COM</h1>

      <nav className="nav">
      <button
        className={isActive("help")}
        onClick={() => onNavigate("help")}
        data-label="Tutoriel"
      >
        <IonIcon icon={helpCircleOutline} />
      </button>

      <button
        className={isActive("dailyChallenge")}
        onClick={() => onNavigate("dailyChallenge")}
        data-label="Défi du jour"
      >
        <IonIcon icon={earthOutline} />
      </button>

      <button
        className={isActive("personalizedGame")}
        onClick={() => onNavigate("personalizedGame")}
        data-label="Partie personalisée"
      >
        <IonIcon icon={colorWandOutline} />
      </button>

      <button
        className={isActive("stats")}
        onClick={() => onNavigate("stats")}
        data-label="Statistiques"
      >
        <IonIcon icon={statsChartOutline} />
      </button>
      </nav>

      <button className="themeToggle" onClick={toggleTheme}>
        <IonIcon icon={theme === "light" ? moonOutline : sunnyOutline} />
      </button>
    </header>
  );
}

export default Header;
