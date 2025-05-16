const mysql = require('mysql2/promise');
require('dotenv').config();

const {
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
  DB_PORT
} = process.env;

const MAX_RETRIES = 60;
const DELAY_MS = 1000;

async function waitForDB() {
  let retries = 0;

  while (retries < MAX_RETRIES) {
    try {
      const connection = await mysql.createConnection({
        host: DB_HOST,
        user: DB_USER,
        password: DB_PASSWORD,
        database: DB_NAME,
        port: DB_PORT
      });

      await connection.ping();
      console.log('✅ Database is available!');
      await connection.end();
      return;
    } catch (err) {
      retries++;
      console.log(`⏳ Waiting for database... (${retries}/${MAX_RETRIES})`);
      await new Promise(res => setTimeout(res, DELAY_MS));
    }
  }

  console.error('❌ Database not available after multiple attempts. Exiting.');
  process.exit(1);
}

waitForDB();
