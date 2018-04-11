const Feedback = require('mongoose').model('Feedback');
const User = require('mongoose').model('User');

exports.render = function (req, res) {
    let session = req.session;
    res.render('admin', {
        title: 'Welcome to admin Page',
        error: false,
        session: session,
        error_msg: ''
    });
};

exports.findUserFeed = async function(req,res){
    let session  = req.session;
   
    const user = await User.findOne({
        email: req.body.email
    }).exec();

   if(user){
    const feed = await  Feedback.find({
           // user_id = user._id
        })
        feed.session.feedbacks = feedbacks; 
        feed.exec();
    }
    // if has problem
    //dont find req.body.username or req.body.password
    if (!user) {
        res.render('admin', {
            title: 'Welcome to admin Page',
            error: true,
            error_msg: "Inexistent user"
        });
        return;
    }

}