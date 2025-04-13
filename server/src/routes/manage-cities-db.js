const express = require('express');
const router = express.Router();

const geoApiRoute = "https://geo.api.gouv.fr/communes?codeDepartement=06&fields=nom,code,codesPostaux,departement,region,population"

/* Fill cities database */
router.post('/fill-cities-db', (req, res) => {
  const db = require('../database-config');

  const query = 'INSERT INTO cities (name, commune_code, postal_code, population, department_name, department_code, region_name, region_code, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())';

  fetch(geoApiRoute)
    .then(response => response.json())
    .then(data => {
      data.forEach(city => {
        db.query(query, [
          city.nom,
          city.code,
          city.codesPostaux[0],
          city.population,
          city.departement.nom,
          city.departement.code,
          city.region.nom,
          city.region.code
        ], (error, results) => {
          if (error) {
            console.error('Database query error:', error);
            res.status(500).send('Error filling cities database');
            return;
          }
        });
    });
    res.status(200).send('Cities database filled successfully');
  })
  .catch(error => {
    console.error('Fetch error:', error);
    res.status(500).send('Error filling cities database');
  });
});

/* Delete all cities */
router.delete('/delete-cities', (req, res) => {
  const db = require('../database-config');

  const query = 'DELETE FROM cities';

  db.query(query, (error, results) => {
    if (error) {
      console.error('Database query error:', error);
      res.status(500).send('Error deleting cities');
      return;
    }

    res.status(200).send('Cities deleted successfully');
  });
});

module.exports = router;
