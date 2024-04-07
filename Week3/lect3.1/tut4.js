//average time server takes to handle the requests f 
const express = require('express');
const port = 3000;
const app = express();
app.listen(port,()=>{
    console.log("port running at "+port);
});
app.get('/',(req,res,next)=>{

})