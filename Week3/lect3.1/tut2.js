const express = require('express');
const app = express();
const port = 3000;

function usermiddleware(req, res, next) {
    let username = req.headers.username;
    let pass = req.headers.pass;

    if (username !== 'insham' || pass !== '*****') {
        res.status(403).json({
            error: 'You are not allowed here!'
        });
    } else {
        next();
    }
}

function kidneymiddleware(req, res, next) {
    let kidneys = req.query.kidneys;

    if (kidneys > 2 || kidneys < 0) {
        res.status(411).json({
            error: "Invalid number of kidney"
        });
    } else {
        next();
    }
}

app.get('/', usermiddleware, kidneymiddleware, (req, res) => {
    let username = req.headers.username;
    let kidneys = req.query.kidneys;

    res.json({
        name: username,
        kidneys
    });
});

app.listen(port, () => {
    console.log("port running at " + port);
});
