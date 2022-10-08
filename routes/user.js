const express = require('express');
const router = express.Router();
const User = require('../models/users')
const userController = require('../controller/userController')

router.get('/', (req, res) => {
    res.redirect('/login');
});

router.route('/register')
    .get(userController.renderRegisterForm)
    .post(userController.sumbitUser);



router.route('/login')
    .get(userController.renderLoginPage)
    .post(userController.login);


router.get('/logout', userController.logout);


module.exports = router;