import express from "express";
import {PORT} from "./env.js";
import path from "path";

const app = express();

// In newer versions of Node.js (14.8+), you can use top-Level await without needing to wrap it in an async function.

const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
const data = await response.json();
console.log(data);  

// In ES module __dirname, __filename are not available (it is available in CommonJS)

// console.log(__dirname);  //  __dirname is not defined in ES module scope
// console.log(__filename); //  __dirname is not defined in ES module scope

console.log(import.meta.dirname);
console.log(import.meta.filename);


// for older version (before 20.11.0);

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);
console.log("For older version :- ", __dirname, __filename);


const staticPath = path.join(import.meta.dirname, "public");
app.use(express.static(staticPath));

app.get("/", (req, res) => {

    const homePagePath = path.join(import.meta.dirname, "public", "index.html");
    res.sendFile(homePagePath);
})

app.listen(PORT, () => {
    console.log("Server starting on port 3000");
});