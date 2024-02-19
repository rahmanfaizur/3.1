const express = require("express")
const app = express();
app.use(express.json())

const zod = require("zod");

function newOne(obj) {
    const schema = zod.object({
      email: zod.string().email(),
      password: zod.string().min(8),
      country: zod.literal("IN").or(zod.literal("US")),
    });
    const response = schema.safeParse(obj);
    console.log(response);
}

app.post("/login", function(req,res) {
    const response = newOne(req.body)
    if (!response.success){
        res.json({
            msg: "Error Caught!!!"
        })
        return;
    }
})