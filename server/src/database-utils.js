const db = require('./database-config');

// const geoApiRoute = "https://geo.api.gouv.fr/communes?codeDepartement=06&fields=nom,code,codesPostaux,departement,region,population";
const geoApiRoute = "https://geo.api.gouv.fr/communes?fields=nom,code,codesPostaux,departement,region,population";

const fillCitiesDB = () => {
  const query = 'INSERT INTO cities (name, commune_code, postal_code, population, department_name, department_code, region_name, region_code, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())';

  return fetch(geoApiRoute)
    .then(response => response.json())
    .then(data => {
      const promises = data.map(city => {
        return new Promise((resolve, reject) => {
          db.query(query, [
            city.nom,
            city.code,
            city.codesPostaux[0] || city.code,
            city.population || 0,
            city.departement.nom,
            city.departement.code,
            city.region.nom,
            city.region.code
          ], (error, results) => {
            if (error) {
              return reject(error);
            }
            resolve();
          });
        });
      });
      return Promise.all(promises);
    });
};

const checkAndFillCitiesDB = () => {
  const checkQuery = 'SELECT COUNT(*) as count FROM cities';

  return new Promise((resolve, reject) => {
    db.query(checkQuery, (error, results) => {
      if (error) {
        return reject(error);
      }
      if (results[0].count === 0) {
        return fillCitiesDB().then(resolve).catch(reject);
      }
      resolve();
    });
  });
};

module.exports = { checkAndFillCitiesDB };
