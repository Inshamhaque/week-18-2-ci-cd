const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect("mongodb+srv://haqueinsham:Deadlydevil@cluster0.dmne0nl.mongodb.net/todo");

// Define a schema
const todoschema = new mongoose.Schema({
    title: String,
    description: String
});

// Create a model
const todo = mongoose.model('Todo', todoschema);

module.exports = {
    todo
};