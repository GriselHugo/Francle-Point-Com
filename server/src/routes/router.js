const express = require('express');
const router = express.Router();

const citiesRoutes = require('./cities');
const manageCitiesDbRoutes = require('./manage-cities-db');
const gamerulesRoutes = require('./gamerules');
const dailyChallengeRoutes = require('./daily_challenge');

router.use('/', citiesRoutes);
router.use('/', manageCitiesDbRoutes);
router.use('/', gamerulesRoutes);
router.use('/', dailyChallengeRoutes);

router.get('/', (req, res) => {
  res.send('Server is up and running !');
});

module.exports = router;
