process.env.NODE_ENV = process.env.NODE_ENV || "development";

//load exprress modeule
const configureMongoose = require('./config/mongoose');
const configureExpress = require('./config/express');

const db = configureMongoose();
//create a new Express app instance
const app = configureExpress();

//use the Express app instance to listen to the port 3000 

app.listen(3000);

console.log('Server running at http://localhost:3000');

///use the modele.exports property to expose our Express application instance for external usage
module.exports = app;