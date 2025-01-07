import express from "express";
import {PORT} from "./env.js";
import path from "path";

const app = express();
// console.log(__dirname);
// console.log(__filename);

// absolute path
const staticPath = path.join(import.meta.dirname, "public");

app.use(express.static(staticPath));
// app.use("/public", express.static(staticPath));

// app.use(express.static("public"));

app.get("/", (req, res) => {
    // console.log(import.meta.dirname);
    // console.log(import.meta.filename);
    // console.log(import.meta.url);
    // const __filename = new URL(import.meta.url);

    // const __filename = new URL(import.meta.url).pathname;  // for absolute path
    // console.log(__filename)
    // res.send("Hi");

    const homePagePath = path.join(import.meta.dirname, "public", "index.html");
    res.sendFile(homePagePath);
})

app.listen(PORT, () => {
    console.log("Server starting on port 3000");
});