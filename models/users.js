const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    scratchPad: {
        type: String
    },
    notes: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Notes'
        }
    ]
});

const Users = mongoose.model('Users', userSchema);

module.exports = Users;