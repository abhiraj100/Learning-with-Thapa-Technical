const path = require("path");
const express = require("express");
const app = express();
const port = 8000;

// built-in middleware

// console.log(__dirname);
console.log(path.join(__dirname, "../public3"));

const staticPath = path.join(__dirname, "../public3");

app.use(express.static(staticPath));


// app.get(route, callback)
app.get("/", (req, res) => {
    res.send("Hello from the express server");
});

app.listen(port, () => {
    console.log(`listening to the port no. ${port}`)
});