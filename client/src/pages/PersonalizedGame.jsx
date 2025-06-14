import React, { useState } from "react";

import "../styles/personalizeGame.css";

import Game from "../components/Game";
import Button from "../components/Button";

import apiService from "../services/api";

import { regions } from "../data/regions";
import { departments } from "../data/departments";

import { colorWandOutline, reloadOutline } from "ionicons/icons";

function PersonalizeGame() {

  const [region, setRegion] = useState('');
  const [department, setDepartment] = useState('');
  const [population, setPopulation] = useState('');
  const [personalizedChallenge, setPersonalizedChallenge] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [resetGame, setResetGame] = useState(false);
  const [found, setFound] = useState(false);

  const handleWin = () => {
    // setDisabledSearchBar(true);
    setFound(true);
    // setPersonalizedChallenge(null);
  }

  const filteredDepartments = region
    ? departments.filter(dep => dep.codeRegion === region)
    : departments;

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    setPersonalizedChallenge(null);

    try {
      const result = await apiService.getPersonalizedChallenge({
        region_code: region || null,
        department_code: department || null,
        population: population || null,
      });
      setPersonalizedChallenge(result);
    } catch (err) {
      setError('Erreur lors de la récupération du challenge personnalisé.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="personalize-game">
      <h1>Partie personnalisée</h1>
      <p>Choisissez vos préférences pour personnaliser votre expérience de jeu.</p>
      {/* Add your personalization options here */}

        {!personalizedChallenge && (
        <div className="personalize-game-options-container">
          <h2>Choisissez une région (facultatif)</h2>
          <select value={region} onChange={(e) => {
            setRegion(e.target.value);
            setDepartment(''); // reset department if region changes
          }}>
            <option value="">-- Toutes les régions --</option>
            {regions.map(r => (
              <option key={r.code} value={r.code}>{r.nom}</option>
            ))}
          </select>

          <h2>Choisissez un département</h2>
          <select value={department} onChange={(e) => setDepartment(e.target.value)}>
            <option value="">-- Sélectionner un département --</option>
            {filteredDepartments.map(dep => (
              <option key={dep.code} value={dep.code}>{dep.code}- {dep.nom}</option>
            ))}
          </select>

          <h2>Population max (optionnel)</h2>
          <input
            type="number"
            placeholder="Ex: 100000"
            value={population}
            onChange={(e) => setPopulation(e.target.value)}
          />

          <br /><br />

          <div className="button-container">
            <Button
              label={loading ? 'Chargement...' : 'Obtenir une ville personnalisée'}
              className="submit"
              icon={colorWandOutline}
              onClick={handleSubmit}
              disabled={loading}
            />
          </div>

          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
        )}
        {personalizedChallenge && (
          <Game key={resetGame} challenge={personalizedChallenge} onWin={handleWin} disabledSearchBar={found} />
        )}
        
        {personalizedChallenge && found && (
          <Button
            label="Rejouer"
            className="reload"
            icon={reloadOutline}
            onClick={() => {
              setResetGame(!resetGame);
              setPersonalizedChallenge(null);
              setFound(false);
              // setDisabledSearchBar(false);
            }}
          />
        )}
        {found && (
          <div className="victory-message">
            🎉 Bravo ! Vous avez trouvé la ville personnalisée !
          </div>
        )}

      {/* Add any additional components or information here */}

    </div>
  );
}

export default PersonalizeGame;
