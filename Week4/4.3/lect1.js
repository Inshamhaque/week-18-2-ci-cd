//Databases -> To store data at the backend in the server 
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://haqueinsham:Deadlydevil@cluster0.dmne0nl.mongodb.net/");
const Courseschema = new mongoose.Schema({
    Title : String,
    Id : Number
})
const Userschema = new mongoose.Schema({
    name: String,
    password : String,
    courses : [{
        refs : Courseschema
    }]
})
const course = mongoose.model('Course',Courseschema);
const user = mongoose.model('User',Userschema);
course.updateOne({Id:1},{Title:"Introduction to Cryptography"});

