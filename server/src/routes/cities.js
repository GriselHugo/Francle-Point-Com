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

/* Get city by ID */
router.get('/get-city/:id', (req, res) => {
  const db = require('../database-config');
  const cityId = req.params.id;

  const query = 'SELECT * FROM cities WHERE id = ?';

  db.query(query, [cityId], (error, results) => {
    if (error) {
      console.error('Database query error:', error);
      res.status(500).send('Error getting city');
      return;
    }

    if (results.length === 0) {
      res.status(404).send('City not found');
      return;
    }

    res.status(200).send(results[0]);
  });
});

/* Get city by commune_code */
router.get('/get-city-by-commune-code/:commune_code', (req, res) => {
  const db = require('../database-config');
  const communeCode = req.params.commune_code;

  const query = 'SELECT * FROM cities WHERE commune_code = ?';

  db.query(query, [communeCode], (error, results) => {
    if (error) {
      console.error('Database query error:', error);
      res.status(500).send('Error getting city');
      return;
    }

    if (results.length === 0) {
      res.status(404).send('City not found');
      return;
    }

    res.status(200).send(results[0]);
  });
});

/* Delete city by ID */
router.delete('/delete-city/:id', (req, res) => {
  const db = require('../database-config');
  const cityId = req.params.id;

  const query = 'DELETE FROM cities WHERE id = ?';

  db.query(query, [cityId], (error, results) => {
    if (error) {
      console.error('Database query error:', error);
      res.status(500).send('Error removing city');
      return;
    }

    if (results.affectedRows === 0) {
      res.status(404).send('City not found');
      return;
    }

    res.status(200).send('City deleted successfully');
  });
});

module.exports = router;
