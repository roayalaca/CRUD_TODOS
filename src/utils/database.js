const {Sequelize} = require('sequelize')
require('dotenv').config();

const db = new Sequelize({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    dialect: 'postgres',
    dialectOptions: { ssl: { require: true, rejectUnauthorized: false}},
});

module.exports = db;

//postgres://roayalaca:SSOOuQJXGhdhYuTD21Hj2A8ByFQ7Kg38@dpg-chegq9u7avja5ma87a30-a.oregon-postgres.render.com/users_todos