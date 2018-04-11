
// Load the 'User' Mongoose model
const User = require('mongoose').model('User');

//Show Page to login//
exports.render = function (req, res) {
    res.render('signin', {
        title: 'SIGN IN PAGE',
        error: false,
        error_msg: ''
    });
};

exports.find = async (req, res) => {

    const user = await User.findOne({
        username: req.body.username,
        password: req.body.password
    }).exec();

    // if has problem
    //dont find req.body.username or req.body.password
    if (!user) {
        res.render('signin', {
            title: 'SIGN IN PAGE',
            error: true,
            error_msg: "Inexistent user"
        });
        return;
    }

    // Save on session
    var session = req.session;
    session.username = user.username;
    session._id = user._id;
    session.firstName = user.firstName;
    session.lastName = user.lastName;
    session.email = user.email;
    
    //console.log("User name = " + session.username);
    res.redirect('/customerfeedback');
    return;

};