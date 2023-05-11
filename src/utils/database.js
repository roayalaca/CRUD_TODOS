const {Sequelize} = require('sequelize')

const db = new Sequelize({
    host: "dpg-chegq9u7avja5ma87a30-a.oregon-postgres.render.com",
    database: "users_todos",
    port: 5432,
    username: 'roayalaca',
    password: 'SSOOuQJXGhdhYuTD21Hj2A8ByFQ7Kg38',
    dialect: 'postgres',
    dialectOptions: { ssl: { require: true, rejectUnauthorized: false}},
});

module.exports = db;

//postgres://roayalaca:SSOOuQJXGhdhYuTD21Hj2A8ByFQ7Kg38@dpg-chegq9u7avja5ma87a30-a.oregon-postgres.render.com/users_todos