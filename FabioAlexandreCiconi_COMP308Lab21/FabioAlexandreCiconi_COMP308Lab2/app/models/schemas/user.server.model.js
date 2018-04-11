// Load the Mongoose module and Schema object
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define a new 'UserSchema'
const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        // Set an email index
        index: true,
        // Validate the email format
        match: /.+\@.+\..+/
    },
    username: {
        type: String,
        // Trim the 'username' field
        trim: true,
        // Set a unique 'username' index
        unique: true,
        // Validate 'username' value existance
        required: true
    },
    password: { type: String, required: true }
});


// Create the 'User' model out of the 'UserSchema'
mongoose.model('User', UserSchema);