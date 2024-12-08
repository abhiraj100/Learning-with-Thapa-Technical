const path = require("path");  // built-in module
const express = require("express");
const app = express();

// relative (../ ../) , absolute (__dirname or __filename)
// console.log(__dirname);

// console.log(path.join(__dirname, "../public"));

const staticPath = path.join(__dirname, "../public")

// built-in middleware
// express.static(root, [options])
app.use(express.static(staticPath));

app.get("/", (req, res) => {
    res.send("Hello World! from the Abhiraj");
});

app.get("/about", (req, res) => {
    res.send("Hello World! from the About page");
});

app.listen(8000, () => {
    console.log("listening the port at 8000");
});



