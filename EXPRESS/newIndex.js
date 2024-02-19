const express = require("express");
const app = express();

app.get("/health-checkup", (req,res) => {
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;

if (username != "faizur" || password != "pass") {
    res.status(400).json({"msg": "Something is wrong with the input!"})
    return
}
if (kidneyId != 1 && kidneyId != 2) {
    res.status(400).json({"msg": "Something is wrong with the input!"})
    return
}

res.json({
    msg: "Your Kidney is completely fine!"
})
});

app.listen(3000, () => {
    console.log("Ports On!!!")
})