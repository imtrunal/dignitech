const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    'Sequelize',
    'root',
    '',
    {
        dialect:'mysql',
        host:'localhost'
    }
)

module.exports = sequelize