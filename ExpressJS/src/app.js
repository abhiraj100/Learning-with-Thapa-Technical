const express = require("express");
const app = express();

// app.get(route, callback)   // create routing
app.get("/", (req, res) => {
    // res.send("Hello World! from the Express")
    res.send("Hello World! from the Abhiraj");
});

app.get("/about", (req, res) => {
    res.send("Hello World! from the About page");
});

app.listen(8000, () => {
    console.log("listening the port at 8000");
});





// www.thapatechnical.com

// The callback function has 2 parameters, request(req) and response(res) object,
// The request object(req) represents the HTTP request and has properties for the
// request query String, parameters, body, HTTP headers, etc.HTTP

// Similarly, the response object represents the HTTP response that the Express app 
// sends when it receives an HTTP request.




// API 
// get - read
// post - to create a new data
// put - update
// delete - delete


