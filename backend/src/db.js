const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgres://user:pass@localhost:5432/fitnessdb'
});
pool.on('error', err => console.error('PG error', err));
module.exports = pool;