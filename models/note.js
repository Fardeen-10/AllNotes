const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const notesSchema = new Schema({

    title: {
        type: String
    },
    description: {
        type: String
    },
    date: {
        type: String
    },
    month: {
        type: String
    },
    year: {
        type: String
    },
    owner: [
        {
            type: Schema.Types.ObjectId,
            ref: 'owner'
        }
    ]
});


const Notes = mongoose.model('Notes', notesSchema);

module.exports = Notes;