// www.thapa.com - welcome to my home page
// www.thapa.com/about - welcome to my about page
// www.thapa.com/contact - welcome to my contact page
// www.thapa.com/temp - welcome to my temp page

const express = require("express");
const app = express();
const port = 8000;

// app.get(route, callback)
app.get("/", (req, res) => {
    // res.send("Welcome to my home page");
    res.send("<h1>Welcome to my home page</h1>");
    res.send("<h1>Welcome to my again home page</h1>");
});

app.get("/about", (req, res) => {
    // res.send("Welcome to my about page");
    res.status(200).send("Welcome to my about page");  // we are getting same thing   // status(200) that means this page is existing
});

app.get("/contact", (req, res) => {
    res.send("Welcome to my contact page");
});

app.get("/temp", (req, res) => {
    res.send("Welcome to my temp page")
});

// app.listen(8000, () => {
//     console.log("listening the port at 8000");
// });
app.listen(port, () => {
    console.log(`listening to the port no. ${port}`);
});


// What Happens If Both Are Used Separately?
// javascript
// Copy code
// app.get("/about", (req, res) => {
//     res.send("Welcome to my about page");   // Sends a response and ends the cycle
//     res.status(200).send("Another message"); // This line will not execute
// });
// Why?

// Once res.send() is called, the response is already sent, and the request is considered finished.
// Any code after res.send() or res.status().send() won't run, causing potential errors if you try to modify the response again.
// Correct Usage Example:
// javascript
// Copy code
// app.get("/about", (req, res) => {
//     res.status(200).send("Welcome to my about page");  // Correct way
// });
// Key Takeaway:
// Use res.status() to set the status code when needed.
// Chain .send() or .json() to send the response right after setting the status.
// Avoid calling res.send() more than once to prevent errors. 🚀





