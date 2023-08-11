const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


const uri = "mongodb+srv://cherry703:12345@cluster0.n2drmzh.mongodb.net/BookList"

mongoose.connect(uri);
mongoose.set()

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const bookRouter = require('./routes/books');
app.use('/book', bookRouter);

app.listen(port, () => console.log(`Server running on ${port}`));