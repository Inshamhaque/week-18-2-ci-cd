const express = require('express');
const port = 3000;
const cors =  require('cors');
const app = express();
app.use(cors());
app.get('/',(req,res)=>{
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);
    let ans = num1 + num2;
    res.send(ans.toString());
})
app.get('/interest',(req,res)=>{
    let principal = parseFloat(req.query.principal);
    let rate = parseFloat(req.query.rate);
    let time = parseInt(req.query.time);
    let interest = (principal * rate * time) / 100;
    let amount =  principal + interest;
    res.status(200).json({
        interest : interest,
        amount : amount
    });
})
app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})