//index.js
const port = 4000;
const app = require('./app-config');
const { checkAndFillCitiesDB } = require('./database-utils');

// Comment this line if you want to use the server without checking the database and use the dump.sql to fill the database instead
checkAndFillCitiesDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  })
  .catch(error => {
    console.error('Error checking/filling cities database:', error);
    process.exit(1); // Exit the process with an error code
  });

// Uncomment the following lines if you want to use the server without checking the database and use the dump.sql to fill the database
// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });
