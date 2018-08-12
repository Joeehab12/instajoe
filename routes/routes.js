module.exports = function(app){


    //list our controllers
    var loginController = require('../controllers/loginController');
    var registerController = require('../controllers/registerController')
    //list our middlewares
    var loginMiddleware = require('../middlewares/loginMiddleware');
    //list our routes

    // app.use(function(req,res,next){
    //     if ('OPTIONS' == req.method) {
    //         res.header('Access-Control-Allow-Origin', '*');
    //         res.send(200);
    //     }
    //     else {
    //         res.header('Access-Control-Allow-Origin', '*');
    //         next();
    //     }
    // });
    app.post('/login',loginController.login);
    app.post('/register',registerController.register);
    app.use(loginMiddleware.middle);
    // app.use(function(req, res, next) {
    //     res.setHeader('Access-Control-Allow-Origin', '*')
    //     next();
    // });
    app.use(function(req,res){
        res.status(404).json({status:"failed",message: "The requested route is not found."});
    });

}
