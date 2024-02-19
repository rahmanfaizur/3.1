// //creating an http server
// //express
// //node default library => no

// const express = require("express");

// const app = express();

// let sum = (n) => {
//     let ans = 0;
//     for (let i = 1; i<=n; i++){
//         ans+=i;
//     }
//     return ans;
// }
// //req and res are request and response respectively!
// app.get('/', (req, res) => {
//     const n = req.query.n;
//     const ans = sum(n);
//     res.send(`Hi there!, your answer is ${ans}`);
// })

// app.listen(3000, () => {
//     console.log("Listening on port 3000!")
// })



const express = require("express");
const app = express();
var users = [{
    name: "John",
    kidneys: [{
        healthy: true
}, {
    healthy: false
}]
}]

app.use(express.json());

app.get("/", (req,res) => {
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidneys = 0;
    for (let i = 0; i<johnKidneys.length; i++){
        if (johnKidneys[i].healthy) {
            numberOfHealthyKidneys++;
        }
        }
        const numberofUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
        numberOfHealthyKidneys;
        res.json({
            numberOfKidneys,
            numberOfHealthyKidneys,
            numberofUnhealthyKidneys
        })
})
//middlewares
app.post("/", function(req,res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
            healthy: isHealthy
    })
    res.json({
        msg: "Done!"
    })
})

app.put("/", (req,res) => {
    for (let i = 0; i<users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({});
})

app.delete("/", (req,res) => {
    //should return a 411 if no unhealthy kidneys left
    if (atLeastOne()){
        const newKidneys = [];
        for (let i = 0; i<users[0].kidneys.length; i++) {
            if (users[0].kidneys[i].healthy){
                newKidneys.push({
                    healthy: true
                })
            }
        }
        users[0].kidneys = newKidneys;
        res.json({msg: "Deleted!!!  "})    
    }
    else {
        res.status(411).json({
            msg: "NO BAD KIDNEYS FOUND!!!"
        });
    }
})

function atLeastOne(){
    let atLeastOneUnhealthyKidney = false;
    for (let i = 0; i<users[0].kidneys.length; i++) {
        if (!users[0].kidneys[i].healthy){
            atLeastOneUnhealthyKidney = true;
        }
    }
    return atLeastOneUnhealthyKidney
}


app.listen(3000, () => {
    console.log("Listening on port 3000!");
})

// const numbers = [1,2,3,4,5,6,7,8,9,10];
// const evenNumbers = numbers.filter((number) => {
//     return number % 2 === 0;
// })
// console.log(evenNumbers)

const numbers = [1,2,3,4,5,6,7,8,9,10];
const oddNumbers = numbers.filter((number) => {
    return number % 2 !== 0;
})
console.log(oddNumbers);

const newArray = [];

for (let i =0; i<numbers.length; i++){
    newArray.push(numbers[i]*2);
}
console.log(newArray);

const newFn = (num)=>{
    return num *2;
}
const mulnew = numbers.map(newFn);
console.log(mulnew)  //takes input and then applies the function expression to tehb individual numbers and then pushes to the final array.


const bigArray = []
for (let l = 1; l<=100; l++){
    bigArray.push(l);
}
console.log(bigArray);

//make a function expression to be applied
//apply a for loop iterating the array of numbers
//make a callback for the function to be applied
//push that to the final array of numbers. these 2 are to be done in the new function!


let powers = (index) => {
    return index * index
}
let finalArray = []
let basicArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let mapNew = (func) => {
    for (let p = 0; p <basicArray.length; p++){
        let result = func(basicArray[p]);
        finalArray.push(result);
    }
    return finalArray;
}
console.log(mapNew(powers));



