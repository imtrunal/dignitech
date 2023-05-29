const { QueryInterface, Sequelize } = require("sequelize");

module.exports = {
    up:(queryInterface,Sequelize)=>{
        return queryInterface.createTable('Auth',{
            id:{
                type:Sequelize.INTEGER,
                primarykey:true,
                autoIncrement:true,
                allownull:false
            },
            Username:{
                type:Sequelize.STRING(30)
            },
            Email:{
                type:Sequelize.STRING(50)
            },
            Password:{
                type:Sequelize.STRING(20)
            },
            Phone  :{
                type:Sequelize.STRING(10)
            },
        })
    },
    down:(queryInterface,Sequelize)=>{
        return queryInterface.dropTable('Auth')
    }
}