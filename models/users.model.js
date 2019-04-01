const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    username: String,
    password: String
});

const usersModel = mongoose.model('usersModel', usersSchema, 'users');