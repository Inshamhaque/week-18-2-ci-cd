//Understanding the necessity of middlewares
const express  = require('express');
const app = express();
const port=3000;
app.get('/',(req,res)=>{
    let username = req.headers.username;
    let pass = req.headers.pass;
    let kidneys = req.query.kidneys;
    if(username!='insham'||pass!='*****'){
        res.status(403).json({
            error:'You are not allowed here!'
        })
    }
    if(kidneys>2||kidneys<0){
        res.status(411).json({
            error:"Invalid number of kidney"
        })
    }
    res.json({
        name: username,
        kidneys
    });
})
app.listen(port,()=>{console.log("port running at "+port);});