const express = require('express');
const router = express.Router();

// const loginRoutes = require('./login');
// const homeRoutes = require('./home');
// const todosRoutes = require('./todos');
// const profilRoutes = require('./profil');
const citiesRoutes = require('./cities');

// router.use('/', loginRoutes);
// router.use('/', homeRoutes);
// router.use('/', todosRoutes);
// router.use('/', profilRoutes);
router.use('/', citiesRoutes);

router.get('/', (req, res) => {
  res.send('Server is up and running !');
});

module.exports = router;
