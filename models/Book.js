const mongoose = require('mongoose');

// Schema
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: String,
    description: String,
    authors: [String],
    imageLink: String,
    selfLink: String
});

// Model
const Book = mongoose.model('Book', BookSchema);

module.exports = Book;