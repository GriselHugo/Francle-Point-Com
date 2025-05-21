const express = require('express');
const router = express.Router();

/* Get 20 cities with the highest population */
router.get('/get-cities-highest-population', (req, res) => {
  const db = require('../database-config');

  const query = 'SELECT * FROM cities ORDER BY population DESC LIMIT 20';

  db.query(query, (error, results) => {
    if (error) {
      console.error('Database query error:', error);
      res.status(500).send('Error getting cities');
      return;
    }

    res.status(200).send(results);
  });
});

/* Get random city from 20 cities with the highest population */
router.get('/get-daily-challenge', (req, res) => {
  const db = require('../database-config');

  const query = 'SELECT * FROM (SELECT * FROM cities ORDER BY population DESC LIMIT 20) AS top_20 ORDER BY RAND() LIMIT 1';

  db.query(query, (error, results) => {
    if (error) {
      console.error('Database query error:', error);
      res.status(500).send('Error getting cities');
      return;
    }

    res.status(200).send(results);
  });
});

/* Get personalized city */
router.get('/get-personalized-game', (req, res) => {
  const { region_code, department_code, population } = req.query;
  const db = require('../database-config');

  let query = 'SELECT * FROM (SELECT * FROM cities WHERE 1=1';
  const params = [];

  if (region_code) {
    query += ' AND region_code = ?';
    params.push(region_code);
  }

  if (department_code) {
    query += ' AND department_code = ?';
    params.push(department_code);
  }

  if (population) {
    query += ' ORDER BY population DESC LIMIT ?';
    params.push(parseInt(population));
  }

  query += ') AS filtered_cities ORDER BY RAND() LIMIT 1';
  db.query(query, params, (error, results) => {
    if (error) {
      console.error('Database query error:', error);
      res.status(500).send('Error getting cities');
      return;
    }

    if (results.length === 0) {
      res.status(404).send('No cities found');
      return;
    }

    res.status(200).send(results);
  });
});

module.exports = router;