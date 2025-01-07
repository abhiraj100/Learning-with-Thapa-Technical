import express from "express";
import {PORT} from "./env.js";
import path from "path";

const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Hello World! </h1>");    
});

app.get("/product", (req, res) => {
    console.log(req.query);  // [Object: null prototype] {} -> if we don't pass anything after question marks
    res.send(`<h1>User Search for Product :- ${req.query.search} and page no. is ${req.query.limit} </h1>`);
    console.log(req.query.search);
    console.log(req.query.limit);
});


app.listen(PORT, () => {
    console.log("Server starting on port 3000");
});