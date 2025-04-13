//index.js
const port = 4000;
const app = require('./app-config');
const { checkAndFillCitiesDB } = require('./database-utils');

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
