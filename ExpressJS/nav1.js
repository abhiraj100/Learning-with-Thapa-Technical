// www.thapa.com - welcome to my home page
// www.thapa.com/about - welcome to my about page
// www.thapa.com/contact - welcome to my contact page
// www.thapa.com/temp - welcome to my temp page

const express = require("express");
const app = express();
const port = 8000;


app.get("/", (req, res) => {
    // res.send("Welcome to my home page");
    // res.send("<h1>Welcome to my home page</h1>");
    // res.send("<h1>Welcome to my again home page</h1>");

    // for get the multiple html element response in the form of html response
    res.write("<h1>Welcome to my home page</h1>");
    res.write("<h1>Welcome to my again home page</h1>");
    res.send();  // for closing the connection once the response is completed.
});

app.get("/about", (req, res) => {
    // res.send("Welcome to my about page");
    res.status(200).send("Welcome to my about page");  // we are getting same thing 
});

app.get("/contact", (req, res) => {
    res.send("Welcome to my contact page");
});

// app.get("/temp", (req, res) => {
//     // res.send("Welcome to my temp page");

//     // JSON Data
//     // res.send({
//     //     id: 1,
//     //     name: "Abhiraj",
//     // });

// It automatically converts in JSON.
//     res.send([
//         {
//         id: 1,
//         name: "Abhiraj",
//         },
//         {
//         id: 2,
//         name: "Yaduvanshi",
//         },
//         {
//         id: 3,
//         name: "Radhe Radhe",
//         },
//     ]);
// });


app.get("/temp", (req, res) => {
    res.json([
        {
        id: 1,
        name: "Abhiraj",
        },
        {
        id: 2,
        name: "Yaduvanshi",
        },
        {
        id: 3,
        name: "Radhe Radhe",
        },
    ]);
});

// (res.send) The methods are identical when an object or array is passed, but res.json() will also convert non-objects, such as null and undefined, which are not valid JSON.

// app.listen(8000, () => {
//     console.log("listening the port at 8000");
// });
app.listen(port, () => {
    console.log(`listening to the port no. ${port}`);
});


// In Express.js, res.send() and res.json() are used to send responses to the client, but they differ slightly in functionality and intended use.

// 1. res.send()
// Purpose: Sends a response of any data type (string, object, buffer, etc.).
// Usage: Generic method for sending data.
// Behavior: Automatically detects the content type based on the data being sent.
// Example:
// javascript
// Copy code
// app.get("/send", (req, res) => {
//   res.send("Hello World!");   // Sends a string
// });
// app.get("/send-object", (req, res) => {
//   res.send({ message: "Hello World!" });  // Sends a JSON object
// });
// 2. res.json()
// Purpose: Sends a JSON-formatted response.
// Usage: Specifically for sending JSON data.
// Behavior: Automatically sets the Content-Type header to application/json.
// Example:
// javascript
// Copy code
// app.get("/json", (req, res) => {
//   res.json({ message: "Hello World!", success: true });
// });
// Key Differences:
// Feature	res.send()	res.json()
// Data Type Support	Any data type (string, HTML, object, etc.)	JSON objects only
// Content-Type Header	Auto-detected	Explicitly application/json
// Best Use Case	General-purpose responses	JSON API responses
// When to Use:
// Use res.send() when sending plain text, HTML, or non-JSON responses.
// Use res.json() when sending structured API responses or data in JSON format.
// By following these guidelines, you can ensure your Express.js API responses are properly formatted and understood by clients. 🚀






