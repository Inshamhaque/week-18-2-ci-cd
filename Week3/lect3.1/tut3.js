//Number of req hitting the server using a middleware 
//here comes the use of app.use() which by defaults implements the middleware in each of thr request handler
const express = require('express');
const app = express();
let nor = 0;
function requests(req,res,next){
    nor++;
    console.log(nor);
    next();
}
app.use(requests);//beyond this the middleware shall be called by default in each route handler
app.get('/',(req,res,next)=>{
    //do nothing
});
app.listen(3000,()=>{console.log("port listenting at 3000");});