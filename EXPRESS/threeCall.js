const express = require("express");
const app = express();

app.get("/here", function (req, res, next) {
    console.log("Call 1")
     next(); 
    }, function (req, res) {
        console.log("Call 2")
    })

app.listen(3000)