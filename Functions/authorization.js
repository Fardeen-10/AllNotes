const bcrypt = require('bcrypt');
const User = require('../models/users')


const authorization = async (username, password) => {
    const user = await User.findOne({ username });
    if (user) {
        const hash = await bcrypt.compare(password, user.password)
        if (hash) {
            return true
        }
        else { return false }

    } else {
        return false;
    }

}

module.exports = authorization;