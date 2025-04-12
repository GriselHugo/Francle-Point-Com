const express = require('express');
const router = express.Router();

/* Get cities */

router.get('/get-cities', (req, res) => {
  const db = require('../database-config');

  const query = 'SELECT * FROM cities';

  db.query(query, (error, results) => {
    if (error) {
      console.error('Database query error:', error);
      res.status(500).send('Error getting cities');
      return;
    }

    res.status(200).send(results);
  });
});

module.exports = router;
