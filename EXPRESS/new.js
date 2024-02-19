const express = require("express");
const zod = require("zod");
const app = express();

const schema2 = zod.array(zod.number())

//
//
//
// {
//    email: string => email
//    password: at least 8 characters
//    country: "IN" or "US"
//    age: zod.number().min(18)

const schema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8),
    country: zod.literal("IN").or(zod.literal("US"))
})

app.use(express.json())

app.post('/health-checkup', function (req,res) { 
    //kidneys = [1,2]
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys)
    if (!response.success){
        res.status(411).json({
            msg: "Input is Invalid!!!"
        })
    } 
    res.send({
        response
    })
    if (!kidneys){
        res.json({
            msg: "Wrong Inputs!!!"
        })
        return
    }
    const kidneyLength = kidneys.length;
    
    res.send("Your Kidney length is " + kidneyLength);
})

// global catches
// let error = 0;
// app.use(function (err, req, res, next) {
//     errorCount++;
//     res.json({
//         msg: "Sorry there seems to something off with your input!!!"
//     })
// })

app.listen(3000);