const { Sequelize, DataTypes } = require('sequelize')

const db = new Sequelize({
    host: 'localhost',
    username: 'postgres',
    password: 'servin01',
    database: 'tasks',
    port: '4000',
    dialect: 'postgres',
    logging: false,
})

module.exports = { db, DataTypes}