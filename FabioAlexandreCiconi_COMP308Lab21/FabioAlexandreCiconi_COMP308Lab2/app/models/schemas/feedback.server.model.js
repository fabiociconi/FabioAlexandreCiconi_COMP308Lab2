// Load the Mongoose module and Schema object
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('mongoose').model('User');
// Define a new 'FeedbackSchema'
const FeedbackSchema = new Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        // Set an email index
        index: true,
        // Validate the email format
        match: /.+\@.+\..+/
    },
    comment: { type: String, required: true },
    user_id: { 
        type: Schema.Types.ObjectId,
        ref:'User'  
    }

});
mongoose.model('Feedback', FeedbackSchema);