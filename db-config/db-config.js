var Sequelize = require('sequelize');
var sequelize = new Sequelize('instajoe-db','root','root',{
    host: 'localhost',
    port:3306,
    dialect: 'mysql'
});

sequelize.authenticate().then(function(err){
    if (err){
        console.log('There is an error in connection : ' + err);
    }
    else{
        console.log('Connection has been established successfully');
    }
});

module.exports = {sequelize:sequelize,Sequelize:Sequelize};
