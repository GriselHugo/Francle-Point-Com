const express = require('express');
const router = express.Router();

const citiesRoutes = require('./cities');
const manageCitiesDbRoutes = require('./manage-cities-db');
const gamerulesRoutes = require('./gamerules');

router.use('/', citiesRoutes);
router.use('/', manageCitiesDbRoutes);
router.use('/', gamerulesRoutes);

router.get('/', (req, res) => {
  res.send('Server is up and running !');
});

module.exports = router;
