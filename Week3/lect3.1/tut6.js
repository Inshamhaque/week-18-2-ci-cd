//Input validation using ZOD
const express = require('express');
const zod = require('zod');
const app = express();
const port = 3000;
const schema = zod.array(zod.number());
app.use(express.json());
//Main function that handles the request and response
app.post('/',(req,res)=>{
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);
    if(!response.success){
        return res.status(400).send("Error in the given value");
    }
    else{
        res.send(response);
    }
});
app.listen(port,()=>{
    console.log("port listening at "+port);
});