const express = require('express');
const router = express.Router();

const notes = require('../controllers/notes_controller');

// Create a new note
router.post('/', notes.create);

// Reterive all notes
router.get('/', notes.findAll);

// Retrieve a single note with note id
router.get('/:noteId', notes.findOne);

// Update a Note with NoteId
router.put('/:noteId', notes.update);

// Delete a note with note id
router.delete('/:noteId', notes.delete);




module.exports = router;