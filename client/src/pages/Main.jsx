import React, { useState, useEffect } from 'react';
import { useTheme } from '../utils/theme';

import apiService from '../services/api';

import Header from './Header';
import DailyChallenge from './DailyChallenge';
import PersonalizedGame from './PersonalizedGame';
import Stats from './Stats';

function Main() {
  const { theme } = useTheme();
  const [page, setPage] = useState('loading'); // 'loading', 'dailyChallenge', 'personalizedGame', 'stats'

  const [dailyChallenge, setDailyChallenge] = useState(null);

  useEffect(() => {
    const fetchDailyChallenge = async () => {
      try {
        const challenge = await apiService.getDailyChallenge().getTodayChallenge();
        setDailyChallenge(challenge);
        setPage('dailyChallenge');
      } catch (error) {
        console.error('Error fetching daily challenge:', error);
        setTimeout(() => fetchDailyChallenge(), 1000);
      }
    };

    fetchDailyChallenge();
  }, []);

  return (
    <div className={`main-container ${theme}`}>
      <Header page={page} onNavigate={setPage} />

      {page === 'loading' && <h1>Chargement...</h1>}
      {page === 'dailyChallenge' && <DailyChallenge challenge={dailyChallenge} />}
      {page === 'personalizedGame' && <PersonalizedGame />}
      {page === 'stats' && <Stats />}
    </div>
  );
}

export default Main
