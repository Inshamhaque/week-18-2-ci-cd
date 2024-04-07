const express = require('express');
const app = express();
const port = 3000;
//middleware for request body...
app.use(express.json());
app.post('/', (req, res, next) => {
    const kidneyf  = req.body.kidney;
    const kidneyLength = kidney.length;
    res.send("You have " + kidneyLength + " kidneys");
});
//global catches to catch any error...error handling middleware
app.use((err,req,res,next)=>{
    res.json({
        "msg":"sorry, our server ran into an issue"
    });
    next();
})
app.listen(port, () => {
    console.log("Listening at port " + port);
});
