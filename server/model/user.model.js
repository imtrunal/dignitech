const Sequelize = require('sequelize');
const sequelize = require('../database/connecting')

const Auth = sequelize.define('Auth', {
    Username: {
        type: Sequelize.STRING,
        allownull: true
    },
    Email: {
        type: Sequelize.STRING,
        allownull: true
    },
    Password: {
        type: Sequelize.STRING,
        allownull: true
    },
    Phone: {
        type: Sequelize.STRING,
        allownull: true
    }
})

module.exports = Auth