const express = require('express');
const router = express.Router();

/* Get daily challenge of today */
router.get('/get-today-challenge', (req, res) => {
  const db = require('../database-config');

  const query = `SELECT * FROM daily_challenge WHERE date = CURDATE()`;
  db.query(query, (error, results) => {
    if (error) {
      console.error('Database query error:', error);
      res.status(500).send('Error getting daily challenge');
      return;
    }

    if (results.length === 0) {
      res.status(404).send('No daily challenge found for today');
      return;
    }

    res.status(200).send(results[0]);
  });
});

/* Add a new daily challenge */
router.post('/add-today-challenge', (req, res) => {
  const db = require('../database-config');
  const { city_code } = req.body;
  const query = `INSERT INTO daily_challenge (city_code, date, created_at, updated_at) VALUES (?, CURDATE(), NOW(), NOW())`;

  db.query(query, [city_code], (error, results) => {
    if (error) {
      console.error('Database query error:', error);
      res.status(500).send('Error adding daily challenge');
      return;
    }

    res.status(200).send('Daily challenge added successfully');
  });
});

/* Delete daily challenge */
router.delete('/delete-daily-challenge', (req, res) => {
  const db = require('../database-config');

  const query = `DELETE FROM daily_challenge WHERE date = CURDATE()`;
  db.query(query, (error, results) => {
    if (error) {
      console.error('Database query error:', error);
      res.status(500).send('Error deleting daily challenge');
      return;
    }

    res.status(200).send('Daily challenge deleted successfully');
  });
});

module.exports = router;
