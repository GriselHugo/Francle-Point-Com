const db = require('../../database-config');

/* Get today's daily challenge */
async function getTodayChallenge() {
  return new Promise((resolve, reject) => {
    const query = `SELECT * FROM daily_challenge WHERE date = CURDATE()`;

    db.query(query, (error, results) => {
      if (error) return reject(error);
      resolve(results);
    });
  });
}

/* * Add a new daily challenge
 * @param {string} cityCode - The code of the city for the daily challenge
 */
async function addTodayChallenge(cityCode) {
  return new Promise((resolve, reject) => {
    const query = `INSERT INTO daily_challenge (city_code, date, created_at, updated_at) VALUES (?, CURDATE(), NOW(), NOW())`;

    db.query(query, [cityCode], (error, results) => {
      if (error) return reject(error);
      resolve(results);
    });
  });
}

/* Get citie by city code */
async function getCityByCode(cityCode) {
  return new Promise((resolve, reject) => {
    const query = `SELECT * FROM cities WHERE commune_code = ?`;

    db.query(query, [cityCode], (error, results) => {
      if (error) return reject(error);
      resolve(results);
    });
  });
}

module.exports = { getTodayChallenge, addTodayChallenge, getCityByCode };
