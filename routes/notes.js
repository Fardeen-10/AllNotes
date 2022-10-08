const express = require('express');
const router = express.Router();
const User = require('../models/users')
const isLogin = require('../middleware/loginAuthorization')
const Notes = require('../models/note')
const allNoteController = require('../controller/allNoteController')



router.route('/')
    .get(isLogin, allNoteController.allNote)


router.route('/add-note')
    .get(isLogin, allNoteController.renderNoteForm)
    .post(isLogin, allNoteController.addNote)


router.route('/scratchPad')
    .post(isLogin, allNoteController.scratchPad)


router.route('/notes')
    .get(isLogin, allNoteController.renderNoteaPage);


router.route('/notes/:id/delete')
    .delete(isLogin, allNoteController.deleteNote)


router.route('/notes/:id/edit')
    .get(isLogin, allNoteController.renderEditForm)
    .put(isLogin, allNoteController.updateNote)










module.exports = router;