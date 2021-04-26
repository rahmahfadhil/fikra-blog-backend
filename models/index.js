const {Sequelize}= require('sequelize');
const User = require('./user.model');

const sequelize=new Sequelize('fikra_blog','root',"1960afha",{
    host: 'localhost',
    dialect:'mysql'
})
const userModel=User(sequelize,Sequelize);
exports.sequelize=sequelize;
exports.userModel=userModel;