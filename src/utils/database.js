const { Sequelize } = require("sequelize");
const db = new Sequelize({
    database: "todos",
    port: 5432,
    host: "localhost",
    username: "postgres",
    password: "eminem09ful",
    dialect: "postgres"
});

module.exports = db;