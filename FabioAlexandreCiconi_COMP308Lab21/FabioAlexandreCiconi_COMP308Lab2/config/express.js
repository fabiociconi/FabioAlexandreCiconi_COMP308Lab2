// load dependencies
const config = require('./config');//pasta configue
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');

module.exports = function () {
    //create a new Express Instance
    const app = express();
    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));
    } else if (process.env.NODE_ENV === 'production') {
        app.use(compress());
    }
    //use boy-parser and method override middleware functions
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(methodOverride());
    //handle the use of PUT or DELETE methods
    //override with POST having ?_method=DELETE or
    // ?_method=PUT
    app.use(methodOverride('_method'));
    //configure session middleware
    app.use(session({
        saveUninitialized: true, resave: true,
        secret: config.sessionSecret
    }));
    //set app;ocation view engine and Virws folder
    app.set('views', './app/views');
    app.set('view engine', 'ejs');
    app.engine('html', require('ejs').renderFile);
    //load index routing file
    //load all routing files
    require('../app/routes/index.server.routes.js')(app);

    //config static files serving
    app.use(express.static('./public'));
    return app;
};