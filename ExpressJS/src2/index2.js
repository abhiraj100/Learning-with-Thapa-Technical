const path = require("path");
const express = require("express");
const app = express();
const hbs = require("hbs");
const requests = require("requests");
const port = 8000;

// built-in middleware

// console.log(__dirname);
console.log(path.join(__dirname, "../public2"));

const staticPath = path.join(__dirname, "../public2");
const templatePath = path.join(__dirname, "../templates/views")
const partialsPath = path.join(__dirname, "../templates/partials")

// to set the view engine 
app.set("view engine", "hbs");
app.set("views", "templatePath");
hbs.registerPartials(partialsPath)

app.use(express.static(staticPath));

// follow top to bottom rule

// template engine route
app.get("/", (req, res) => {
    res.render("index");   // index.hbs
});

// for sending the dynamic content  // dynamic data {{channelName}}  in the list item
app.get("/", (req, res) => {
    res.render("index", {                // index.hbs
        channelName: "abhiraj yadav",
    });   
});

// app.get("/about", (req, res) => {
//     res.render("about");
// });


app.get("/about", (req, res) => {
    requests(
        `http://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&units=metric&appid=${process.env.APPID}`
      )
        .on("data", (chunk) => {
          const objdata = JSON.parse(chunk);
          const arrData = [objdata];
          console.log(`city name is ${arrData[0].name} and the temp is ${arrData[0].main.temp}`);
        //   const realTimeData = arrData
        //     .map((val) => replaceVal(homeFile, val))
        //     .join("");
          res.write(arrData[0].name);
          // console.log(val.main);
          // console.log(realTimeData);
        })
        .on("end", (err) => {
          if (err) return console.log("connection closed due to errors", err);
          res.end();
        });
});

app.get("/about/*", (req, res) => {
    res.render("404", {
        errorcomment: "Oops this about us page couldn't be found",
    });
});

app.get("*", (req, res) => {
    res.render("404", {
        errorcomment: "Oops page couldn't be found",
    });
});
 
// app.get(route, callback)
app.get("/", (req, res) => {
    res.send("Hello from the express server");
});

app.listen(port, () => {
    console.log(`listening to the port no. ${port}`)
});