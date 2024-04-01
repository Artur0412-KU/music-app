const Pool = require('pg').Pool;
require('dotenv').config();

const pool = new Pool({
    user: process.env.DATABSE_USER,
    password: process.env.DATABSE_PASSWORD,
    host: process.env.DATABSE_HOST,
    port: process.env.DATABSE_PORT,
    database: process.env.DATABSE_NAME,
});

module.exports = pool;