const db = require('../utils/database')

const { DataTypes } = require('sequelize');

const ToDos = db.define('todos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    title:{
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    
    description:{
        type: DataTypes.STRING(200),
        allowNull: false,
    },

    completed:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
    }
}, {
    timestamps: false
    }
);

module.exports = ToDos;