const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 4000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.send("Welcome to the ExpressJS In one Shot");
});

app.get("/about", function (req, res) {
  res.send("Welcome to the About us page");
});

app.get("/contact", function (req, res) {
  res.send("Welcome to the Contact us page");
});

app.get("/calculator", function (req, res) {
  // console.log(__dirname);
  res.sendFile(__dirname + "/index.html");
});

app.post("/calculator", function (req, res) {
  // res.send("Thankyou for your lovely post.");
  console.log(req.body);

  let n1 = Number(req.body.v1);
  let n2 = Number(req.body.v2);
  const sum = n1 + n2;

  res.send(`The sum of ${n1} and ${n2} is ${sum}`);
});

app.get("/bmi", function (req, res) {
  res.sendFile(__dirname + "/bmi.html");
});

app.post("/bmi", function (req, res) {
  console.log(req.body);
  try {
    let w1 = Number(req.body.weight);
    let h1 = Number(req.body.height);
    let bmi = w1 / (h1 * h1);

    res.send(`The bmi is : ${bmi}`);
  } catch (err) {
    console.log(err.statusCode)
    console.log(err.message)
  }
});

app.listen(PORT, function (req, res) {
  console.log(`Server is running at PORT : ${PORT}`);
});

// get send the small amount of data through header (or within the header)
// post send the large amount of data which directly send to the body
