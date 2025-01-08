import express from "express";
import {PORT} from "./env.js";
import path from "path";

const app = express();

const staticPath = path.join(import.meta.dirname, "public2");

app.use(express.static(staticPath));

// app.use(express.urlencoded());   // middleware
app.use(express.urlencoded({ extended : true }));   // it allows for more complex structures like nested objects, while the default parser cannot handle.   -> { user: { name: 'ABHIRAJ YADAV', message: 'z' } }

// app.get("/contact", (req, res) => {
//     console.log(req.query);
//     res.redirect("/");
//     // res.send("Ok");
// });

app.post("/contact", (req, res) => {
    console.log(req.body);
    res.redirect("/");
    // res.send("Ok");
});

app.listen(PORT, () => {
    console.log("Server starting on port 3000");
});