const mongoose = require('mongoose');

const SchemaNotes = mongoose.Schema({
    title: String,
    content: String
}, {
    timestamps: true
});

const Note = mongoose.model('Note', SchemaNotes);
module.exports = Note;