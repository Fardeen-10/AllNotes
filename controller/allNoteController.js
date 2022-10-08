const User = require('../models/users')
const isLogin = require('../middleware/loginAuthorization')
const Notes = require('../models/note')

module.exports.allNote = async (req, res) => {
    const user = await User.findOne({ _id: req.session.user_id }).populate('notes');
    res.render('main/all-note', { user })
}


module.exports.renderNoteForm = async (req, res) => {
    const user = await User.findOne({ _id: req.session.user_id });
    res.render('main/add-note', { user })
}

module.exports.addNote = async (req, res) => {
    const { title, description } = req.body;
    const dateObj = new Date().toString().split(' ');
    const date = dateObj[2];
    const month = dateObj[1];
    const year = dateObj[3];
    const user = await User.findById(req.session.user_id);
    const note = new Notes({ title: title, description: description, date: date, month: month, year: year });
    user.notes.unshift(note);
    await user.save();
    note.owner.push(user);
    await note.save();
    res.redirect('/all-note/notes');
}



module.exports.scratchPad = async (req, res) => {
    const { scratchPad } = req.body;
    const main = scratchPad.trim();
    const user = await User.findByIdAndUpdate(req.session.user_id, { scratchPad: main });;
    res.redirect('/all-note');
}

module.exports.renderNoteaPage = async (req, res) => {
    const user = await User.findOne({ _id: req.session.user_id }).populate('notes');
    res.render('main/notes', { user })
}



module.exports.renderEditForm = async (req, res) => {
    const user = await User.findOne({ _id: req.session.user_id });
    const note = await Notes.findById({ _id: req.params.id })
    res.render('main/edit', { user, note })

}



module.exports.updateNote = async (req, res) => {
    const { title, description } = req.body;
    const note = await Notes.findByIdAndUpdate(
        { _id: req.params.id }, { title: title, description: description }
    );
    res.redirect('/all-note/notes');

}


module.exports.deleteNote = async (req, res) => {
    const noteId = req.params.id;
    const ownerId = req.session.user_id;
    await User.findByIdAndUpdate({ _id: ownerId }, { $pull: { notes: noteId } });
    await Notes.findByIdAndDelete({ _id: noteId });
    res.redirect('/all-note/notes');
}





