import { useState, useEffect } from "react";

const defaultStats = {
  gamesPlayed: 0,
  averageHintsUsed: 0,
  bestStreak: 0,
  currentStreak: [],
  lastPlayedDate: null,
};

export function useDailyChallengeStats() {
  const [stats, setStats] = useState(() => {
    const stored = localStorage.getItem("dailyChallengeStats");
    return stored ? JSON.parse(stored) : defaultStats;
  });

  useEffect(() => {
    localStorage.setItem("dailyChallengeStats", JSON.stringify(stats));
  }, [stats]);

  return [stats, setStats];
}
