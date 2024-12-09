const path = require("path");
const express = require("express");
const app = express();
const hbs = require("hbs");
const requests = require("requests");
const port = 8000;

// built-in middleware

// console.log(__dirname);
// console.log(path.join(__dirname, "../public2"));

// const staticPath = path.join(__dirname, "../public2");
// const templatePath = path.join(__dirname, "../templates/views")
// const partialsPath = path.join(__dirname, "../templates/partials")

// to set the view engine 
app.set("view engine", "hbs");

// app.use(express.static(staticPath));

// follow top to bottom rule

// template engine route
app.get("/", (req, res) => {
    res.render("index");   // index.hbs
});

// for sending the dynamic content  // dynamic data {{channelName}}  in the list item
app.get("/", (req, res) => {
    res.render("index", {                // index.hbs
        channelName: "abhiraj yadav",
    });   
});
 
// app.get(route, callback)
app.get("/", (req, res) => {
    res.send("Hello from the express server");
});

app.listen(port, () => {
    console.log(`listening to the port no. ${port}`)
});