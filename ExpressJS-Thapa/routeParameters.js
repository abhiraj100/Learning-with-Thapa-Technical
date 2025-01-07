import express from "express";
import {PORT} from "./env.js";
import path from "path";

const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Hello World! </h1>");    
});

app.get("/profile/:username", (req, res) => {
    // res.send(`Welcome to the Profile Page`);    
    res.send(`<h1>Welcome to the Profile Page, Here is ${req.params.username} </h1>`);    
    console.log(req.params);
    console.log(req.params.username);
});

// multiple parameters 
// we use slug -> because it represent unique identifier.
app.get("/profile/:username/article/:slug", (req, res) => {
    const formatedSlug = req.params.slug.replace(/-/g, " ");
    res.send(`<h1>Article is ${formatedSlug} and author is ${req.params.username} </h1>`);    
    console.log(req.params);
    console.log(req.params.username);
    console.log(req.params.slug);
});


app.listen(PORT, () => {
    console.log("Server starting on port 3000");
});