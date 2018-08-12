module.exports.register = function(req,res,next){
    var sequelizeInstance = require('../db-config/db-config.js');
    var sequelize = sequelizeInstance.sequelize;
    var Sequelize = sequelizeInstance.Sequelize;
    var user = require('../models/user')(sequelize,Sequelize);
    var newUser = user.build(
        {
            username: req.body.username,
            password: req.body.password,
            fullName: req.body.fullName,
            email: req.body.email,
            profilePic: "localhost"
        }
    );

    newUser.save().then(function(){
            res.status(200).json({status: "success", message: "user registered successfully."});
    })
    .catch(function(err){
        res.status(200).json({status: "failed",message: "cannot register user."});
    });
}
