//To do list 
const express = require("express");
const  app = express();
const port = 3010;
let todo = {
    1 : "buy groceries",
    2 : "workout"
}
app.get('/',(req,res)=>{
    res.json(todo);
});
a.put('/',(req,res)=>{
    let task = req.query.task;

})
app.listen(port,()=>{console.log("app running at port "+ port)});