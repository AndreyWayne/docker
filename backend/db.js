const { Pool } = require('pg');

const pool = new Pool({
    host: 'db', //db в докере
    user: 'postgres',
    password: 'ipadib339',
    port: 5432,
    database: 'postgres'
});

module.exports = pool