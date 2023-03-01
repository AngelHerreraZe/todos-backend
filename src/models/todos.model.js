const { DataTypes } = require('sequelize');
const db = require("../utils/database");

const Todos = db.define("users", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING(35),
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING(60),
        allowNull: false,
    },
    isComplete: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    }
});

module.exports = Todos;