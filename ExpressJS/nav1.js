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
