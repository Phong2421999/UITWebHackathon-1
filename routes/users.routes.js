const express = require('express');

const usersController = require('../controllers/users.controller');

const router = express.Router();

router.get('/login', usersController.login);

router.get('/register', usersController.register);

router.get('/exam', usersController.exam);

router.get('/logout', usersController.exam);

router.post('/login', usersController.postLogin);


module.exports = router;