const sequelize = require('../config/db')
const {DataTypes} = require('sequelize')


// Definir o modelo USUARIO

const Usuario = sequelize.define('Usuario', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role_id: {
        type: DataTypes.STRING,
        allowNull: false
    },
    endereco: {
        type: DataTypes.STRING,
        allowNull: true
    },
    cidade: {
        type: DataTypes.STRING,
        allowNull: true
    },
    estado: {
        type: DataTypes.STRING,
        allowNull: true
    },
}, {
    timestamps: true
})

module.exports = Usuario