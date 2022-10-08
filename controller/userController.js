const User = require('../models/users')
const bcrypt = require('bcrypt');
const authorization = require('../Functions/authorization')

module.exports.renderRegisterForm = (req, res) => {
    res.render('user/register');
}

module.exports.sumbitUser = async (req, res) => {
    const { username, password } = req.body;
    const userCheck = await User.findOne({ username });
    if (userCheck) {
        req.flash('usernameError', 'Username already exist! Try different username.');
        return res.redirect('/register');
    }
    const hash = await bcrypt.hash(password, 12);
    const newUser = new User({ username: username, password: hash });
    await newUser.save()
    req.flash('successfullyAccount', 'Successfully Create An Account!')
    res.redirect('/login');
}


module.exports.renderLoginPage = (req, res) => {
    res.render('user/login')
}

module.exports.login = async (req, res) => {
    const { username, password } = req.body;
    const validateUser = await authorization(username, password);
    if (validateUser) {
        const user = await User.findOne({ username });
        req.session.user_id = user._id;
        return res.redirect('/all-note');
    }
    else {
        req.flash('usernameOrPassword', 'Username or Password is incorrect!')
        res.redirect('/login');
    }
}

module.exports.logout = (req, res) => {
    req.session.destroy();
    // req.flash('logout', 'Logout succesfully!');
    res.redirect('/login');
}