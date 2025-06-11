import React from "react";

import "../styles/searchBar.css";

function SearchBar({ searchTerm, onSearchChange, suggestions, onSuggestionClick }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Rechercher une ville..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      {suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((city, index) => (
            <li key={index} onClick={() => onSuggestionClick(city)}>
              {city.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
