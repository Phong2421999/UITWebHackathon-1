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

module.exports.postLogin = async(req, res) => {
    let inputUsername = req.body.loginUsername;
    let inputPassword = req.body.loginPassword;
    let error = [];
    if (inputUsername === "" || inputUsername === null) {
        error.push('Please input your username');
    }
    if (inputPassword === "" || inputPassword === null) {
        error.push('Please input your password');
    }
    if (error.length > 0) {
        res.render('homepage/users/login.ejs', {
            error: error,
            username: inputUsername
        });
        console.log(typeof inputUsername);
    } else {
        let user = await usersModel.find({ username: inputUsername });
        if (user.length <= 0) {
            error.push('Username not found');
            res.render('homepage/users/login.ejs', {
                error: error,
                username: inputUsername
            });

        } else if (user[0].password !== inputPassword) {
            error.push('Wrong password');
            res.render('homepage/users/login.ejs', {
                error: error,
                username: inputUsername
            });
        } else {
            res.cookie('userId', user[0]._id, { signed: true });
            res.redirect('/');
        }
    }
}

module.exports.postRegister = async(req, res) => {
    let inputUsername = req.body.registerUsername;
    let inputPassword = req.body.registerPassword;
    let inputFullname = req.body.registerFullname;
    let error = [];
    if (inputFullname === "" || inputFullname === null) {
        error.push('Please input your name');
    }
    if (inputUsername === "" || inputUsername === null) {
        error.push('Please input your username');
    }
    if (inputPassword === "" || inputPassword === null) {
        error.push('Please input your password');
    } else if (inputPassword.length < 8) {
        error.push('Password must have more than 8 charactor');
    }
    console.log(error.length);
    if (error.length > 0) {
        for (item of error) {}
        res.render('homepage/users/register.ejs', {
            error: error,
            inputData: {
                fullname: inputFullname,
                username: inputUsername,
                password: inputPassword
            }
        });
    } else {
        let checkedUser = await usersModel.find({ username: inputUsername });
        if (checkedUser.length > 0) {
            error.push('Username has been registered');
            res.render('homepage/users/register.ejs', {
                error: error,
                inputData: {
                    fullname: inputFullname,
                    username: inputUsername,
                    password: inputPassword
                }
            });
        } else {
            let userRegister = new usersModel({
                fullname: inputFullname,
                username: inputUsername,
                password: inputPassword
            });
            res.redirect('/users/login');
        }
    }

}