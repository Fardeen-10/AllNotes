

const isLogin = (req, res, next) => {
    if (!req.session.user_id) {
        return res.redirect('/login');
    } else {
        next();
    }
}

module.exports = isLogin;