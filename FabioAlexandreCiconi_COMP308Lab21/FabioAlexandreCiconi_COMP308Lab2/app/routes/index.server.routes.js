module.exports = function (app) {


    //Controlers
    var index = require('../controllers/index.server.controller');
    var signin = require('../controllers/signin.controller');
    var cf = require('../controllers/customerfeedback.controller');
    var admin = require('../controllers/admin.controller');

    //admin//
    app.get('/admin',admin.render);//RENDER PAGE
    app.post('/admin',admin.findUserFeed);//FIND FEED BY EMAIL

    app.get('/', index.render);//render page
    app.post('/', index.register);//register new user

    app.get('/signin', signin.render);//render page
    app.post('/signin', signin.find);//check user to login

    app.get('/customerfeedback', cf.render);//render page
    app.post('/customerfeedback', cf.feedbackPost);//save feedback

};