const express = require('express');
const app  = express();
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://haqueinsham:Deadlydevil@cluster0.dmne0nl.mongodb.net/");
app.use(express.json());
const User  = mongoose.model('Users',{name:String, email: String, password: String});
app.post('/signin',async (req,res)=>{
    const name = req.body.name;
    const username = req.body.username;
    const password = req.body.password;
    const userexists = await User.findOne({email : username});//this is an async function call 
    if(userexists){
        return res.status(400).json({
            "msg":"User already exists"
        })
    }
    const user = new User({ 
        name : name,
        email : username,
        password : password
    });    
    user.save();
    return res.status(200).json({
        "msg":"User created successfully"
    });
})
app.listen(3000,()=>{
    console.log("port running on "+3000);
})