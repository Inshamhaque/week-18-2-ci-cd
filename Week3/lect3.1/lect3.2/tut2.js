//Assignment to create a website with two endpoints such that first is to post the users and sec
//ond is to get the user with correct credent
const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const jwtpassword = "123456";
app.use(express.json());
const users = [
    {
        username : "haqueinsham@gmail.com",
        password : 123,
        name : "Insham haque"
    },
    {
        username : "sfahmed.04@gmail.com",
        password: 12345,
        name: "sf ahmed"
    },
    {
        username : "fearhaque786@gmail.com",
        password: 123456,
        name : "fear haque"
    }
];
function userexists(username,password){
    //to check whther the user exists or not
    let userexists = false;
    for(let i=0;i<users.length;i++){
        if(users[i].username==username&&users[i].password==password){
            userexists = true;
        }
    }
    return userexists;
}
app.post('/signin',(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    if(!userexists(username,password)){
        return res.status(403).json({
            msg: "sorry, user does not exists"
        });
    }
    var token = jwt.sign({username:username}, jwtpassword);
    return res.json({
        token
    });
})
app.get('/users',(req,res)=>{
    const token = req.headers.token;
    const decoded = jwt.verify(token,jwtpassword);
    const username = decoded.username;
    return res.json({//returns only those which match the username so mentioned
        username: users.filter((value)=>{
            if(value.username==username){
                return false;
            }
            else{
                return true;
            }
        })
    });
})
app.listen(3000,()=>{
    console.log("server is running on port 3000");
});