const express = require("express");
const app = express();
const port = 3000;
//middlewares 
function check(req,res,next){
    let age = req.query.age;
    if(age>=14){
        next();
    }
    else{
        res.status(411).json({
            "msg":"Sorry, You are underage"
        });
    }
}
app.use(check);
app.get('/ride1',(req,res)=>{
    res.json({
        "msg":"You have ride the first ride"
    });
});
app.listen(port,()=>{
    console.log("Running on port"+port);
})