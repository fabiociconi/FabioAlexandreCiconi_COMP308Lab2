// Load the 'User' Mongoose model
const User = require('mongoose').model('User');

//show page
exports.render = function (req, res) {
    res.render('index',
        {
            title: 'Index Page',
            error: false,
            error_msg:''
        });
};

exports.register = async function (req, res) {

    const checkFields = CheckFileds(req.body);

    if (!checkFields.error) {

        const signup = await new User(req.body).save();

        // const session = req.session;
        // session.username = req.body.username;
        // session.firstName = req.body.firstName;
        // session.lastName = req.body.lastName;
        // session.email = req.body.email;

        res.redirect('/signin');

    } else if (checkFields.error) {
        res.render('index', {
            title: 'Index Page',
            error: true,
            error_msg: checkFields.msg
        });
    }


};
CheckFileds = (body) => {
    const result = {
        error: false,
        msg: ''
    };

    if ((!body.username)||(!body.firstName)||(!body.lastName)||(!body.email)||(!body.password)) {
        const sd = body.username;
        //|| (!body.firstName) || (!body.lastName) || (!rebody.password)
        result.error = true;
        result.msg = 'Please insert values for all fields';
        return result;
    }
    if (body.password !== body.confirmPassword) {
        result.error = true;
        result.msg = 'Password does not match';
        return result;
    }
    return result;
}



