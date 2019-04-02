const express = require('express');

const usersController = require('../controllers/users.controller');

const router = express.Router();

router.get('/login', usersController.login);

router.get('/register', usersController.register);

router.get('/exam', usersController.exam);

router.get('/logout', usersController.login);

router.post('/login', usersController.postLogin);

router.post('/register', usersController.postRegister);


module.exports = router;