var express = require('express');
var app = express();

app.listen(3001);

//Implement first microservice at end point blank /
app.get("/", (req, res) => {
    res.send("Welcome to AnubhavTrainings.com");
});

console.log("Your Microservice is running @ http://localhost:3001");