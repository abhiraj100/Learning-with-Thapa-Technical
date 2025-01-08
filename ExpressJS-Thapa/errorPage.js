import express from "express";
import {PORT} from "./env.js";
import path from "path";

const app = express();

app.use(express());

app.get("/", (req, res) => {
    res.send("Hi, Abhiraj here");
});

app.use((req, res) => {
    // return res.status(404).send("ERROR");
    return res.status(404).sendFile(path.join(import.meta.dirname), "views", "404.html");
});

app.listen(PORT, () => {
    console.log("Server starting on port 3000");
});