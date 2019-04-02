const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    fullname: String,
    username: String,
    password: String
});

const usersModel = mongoose.model('usersModel', usersSchema, 'users');

module.exports = usersModel;