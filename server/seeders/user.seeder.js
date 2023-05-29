const params = require('../config/params.json')

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [
            {
                Username: "bhesaniya rutesh",
                Email: 'bhesaniyaruutesh@gmail.com',
                Password: "123456",
                Phone: "8849300935",
            },
            {
                Username: "bhesaniya mitesh",
                Email: 'dudhatramitesh@gmail.com',
                Password: "456321",
                Phone: "7069996333",
            }
        ])
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users', null, {})
    }

}