const Feedback = require('mongoose').model('Feedback');

exports.render = function (req, res) {
    res.render('customerfeedback',
        {
            title: 'Customer Feedback Page',
            //pegando da session
            username: req.session.username,
            firstName: req.session.firstName,
            lastName: req.session.lastName,
            email: req.session.email,
            error: false
        });
};


exports.feedbackPost = async function (req, res) {
    const result = await new Feedback(req.body);
    result.user_id = req.session._id;
    result.save();
    res.render('thankyou', {
        title: 'THANK YOU!!!!!!',
        //passando para outra pagina
        params: req.body,
        error: false
    });
};