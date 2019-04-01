const usersModel = require('../models/users.model');

module.exports.login = (req, res) => {
    res.render('homepage/users/login.ejs');
}

module.exports.register = (req, res) => {
    res.render('homepage/users/register.ejs');
}

module.exports.exam = (req, res) => {
    res.render('homepage/users/exam.ejs');
}

module.exports.postLogin = (req, res) => {
    let username = req.body.loginUsername;
    let password = req.body.loginPassword;
    let user = usersModel.find({ username: username });
    if (!user) {
        console.log('User not found');
        res.redirect('/users/login');
        return;
    }

    if (user[0].password !== password) {
        console.log('Wrong password');
        res.redirect('/users/login');
        return;
    }
    res.redirect('/');
}