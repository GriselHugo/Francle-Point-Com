import React, { useState } from "react";
import SearchBar from "./SearchBar";
import CluesRow from "./CluesRow";
import apiService from "../services/api";

import "../styles/game.css";

function Game({ challenge, onWin }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [guesses, setGuesses] = useState([]);

  const handleSearchChange = async (term) => {
    setSearchTerm(term);
    if (term.length > 1) {
      try {
        const cities = await apiService.searchCities(term);
        setSuggestions(cities);
      } catch (error) {
        setSuggestions([]);
      }
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (city) => {
    const isWin = clues.every(
      (clue) => clue.compare(clue.value(city), clue.value(challenge)) === 0
    );

    setGuesses((prevGuesses) => [...prevGuesses, city]);

    if (isWin && onWin) {
      onWin(city);
    }

    setSearchTerm("");
    setSuggestions([]);
  };

  const clues = [
    {
      label: "Première lettre",
      value: (city) => city.name[0].toUpperCase(),
      compare: (a, b) => a.localeCompare(b),
    },
    {
      label: "Habitants",
      value: (city) => city.population.toLocaleString("fr-FR"),
      compare: (a, b) => parseInt(a) - parseInt(b),
    },
    {
      label: "Code postal",
      value: (city) => city.postal_code,
      compare: (a, b) => a - b,
    },
    {
      label: "Département",
      value: (city) => city.department_name,
      compare: (a, b) => a.localeCompare(b),
    },
    {
      label: "Région",
      value: (city) => city.region_name,
      compare: (a, b) => a.localeCompare(b),
    },
  ];

  return (
    <div className="game-container">
      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        suggestions={suggestions}
        onSuggestionClick={handleSuggestionClick}
      />

      {[...guesses].reverse().map((guess, index) => (
        <CluesRow
          key={index}
          city={guess}
          challenge={challenge}
          clues={clues}
          isFirstRow={index === 0}
        />
      ))}
    </div>
  );
}

export default Game;
