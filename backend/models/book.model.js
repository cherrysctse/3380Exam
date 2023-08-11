const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: { type: String, require: true },
    author: { type: String, require: true },
    description: { type: String },
});

const Book = mongoose.model("300364017-SeeChai", bookSchema);

module.exports = Book;