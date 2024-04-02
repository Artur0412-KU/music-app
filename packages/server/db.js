const Pool = require('pg').Pool;
require('dotenv').config();

const pool = new Pool({
    user: process.env.DATABSE_USER,
    password: process.env.DATABSE_PASSWORD,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    database: process.env.DATABASE_NAME,
});

module.exports = pool;