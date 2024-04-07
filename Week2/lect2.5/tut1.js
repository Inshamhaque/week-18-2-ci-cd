//The basic understanding of how and why to create an HTTP server 
//In order to expose our code to the world just a doctor treats patient by using medicine skill using clinics etc
//We require to send HTTP request all over the world so, that others can see it. We can send entire codebases but
//that wont be subtle and secure way of exposing our work to the world
//So, lets start with basic example 
const express = require('express');
const port = 3000;
//logic to add upto a number n
function calculateSum(n){
    let ans  = 0;
    for(let i=0;i<n;i++){
        ans+=i;
    }
    return ans;
}
const app = express();
//request-> to receive and response-> to send 
app.get('/',(req,res)=>{//this is pne functionality of the Doctor
    const n = req.query.n;//we are getting value from url
    const ans = calculateSum(n);
    res.send("the ans is: " + ans);//we send a string as an output it might confuse it with status code 
});
app.listen(port);
//this is just like a address of the doctor i.e port here 
//My machine -> Hospital 
//Different server act as doctors at different address as in ports 