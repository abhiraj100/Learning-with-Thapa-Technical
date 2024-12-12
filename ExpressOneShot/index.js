const express = require("express");
const app = express();

const PORT = 4000;  

app.get("/", function(req, res) {
    res.send("Welcome to the ExpressJS In one Shot");
});

app.get("/about", function(req, res) {
    res.send("Welcome to the About us page");
});

app.get("/contact", function(req, res) {
    res.send("Welcome to the Contact us page");
});


app.listen(PORT, function(req, res) {
    console.log(`Server is running at PORT : ${PORT}`)
})