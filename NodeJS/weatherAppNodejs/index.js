require('dotenv').config(); // Load environment variables from a .env file
const http = require("http");
const fs = require("fs");
const requests = require("requests");

// Read the home.html file synchronously
const homeFile = fs.readFileSync("home.html", "utf-8");

// Function to replace placeholders with actual API data
const replacePlaceholders = (template, data) => {
  let output = template.replace("{%tempval%}", data.main.temp);
  output = output.replace("{%tempmin%}", data.main.temp_min);
  output = output.replace("{%tempmax%}", data.main.temp_max);
  output = output.replace("{%location%}", data.name);
  output = output.replace("{%country%}", data.sys.country);
  output = output.replace("{%tempstatus%}", data.weather[0].main);
  return output;
};

// Create the server
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    const weatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=Bhopal,IN&units=metric&appid=${process.env.APPID}`;
    
    requests(weatherAPI)
      .on("data", (chunk) => {
        try {
          const weatherData = JSON.parse(chunk);
          const finalHTML = replacePlaceholders(homeFile, weatherData);
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(finalHTML);
        } catch (error) {
          console.error("Error processing weather data:", error);
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("Internal Server Error");
        }
      })
      .on("end", (err) => {
        if (err) {
          console.error("Error fetching data:", err);
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("Error fetching weather data");
        }
      });
  } else {
    // Handle 404 errors
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404: Page Not Found");
  }
});

// Start the server
server.listen(8000, "127.0.0.1", () => {
  console.log("Server running at http://127.0.0.1:8000/");
});




// // require('dotenv').config();
// const http = require("http");
// const fs = require("fs");
// var requests = require("requests");

// // d9b8cd2f07a135964b06752e8db0bff0
// // https://api.openweathermap.org/data/2.5/weather?q=Pune,IN&appid=d9b8cd2f07a135964b06752e8db0bff0
// const homeFile = fs.readFileSync("home.html", "utf-8");

// const replaceVal = (tempVal, orgVal) => {
//   let temperature = tempVal.replace("{%tempval%}", orgVal.main.temp);
//   temperature = temperature.replace("{%tempmin%}", orgVal.main.temp_min);
//   temperature = temperature.replace("{%tempmax%}", orgVal.main.temp_max);
//   temperature = temperature.replace("{%location%}", orgVal.name);
//   temperature = temperature.replace("{%country%}", orgVal.sys.country);
//   temperature = temperature.replace("{%tempstatus%}", orgVal.weather[0].main);

//   return temperature;
// };

// const server = http.createServer((req, res) => {
//   if (req.url == "/") {
//     requests(
//       // `http://api.openweathermap.org/data/2.5/weather?q=Pune&units=metric&appid=${process.env.APPID}`
//       // `https://api.openweathermap.org/data/2.5/weather?q=Bhopal,IN&appid=${process.env.APPID}`
//       `https://api.openweathermap.org/data/2.5/weather?q=Bhopal,IN&appid=d9b8cd2f07a135964b06752e8db0bff0`
//     )
//       .on("data", (chunk) => {
//         const objData = JSON.parse(chunk);
//         const arrData = [objData];
//         // console.log(arrData[0].main.temp);
//         const realTimeData = arrData
//           .map((val) => replaceVal(homeFile, val))
//           .join("");   // here convert the array data to the string data
//         res.write(realTimeData);
//         // console.log(val.main);
//         // console.log(realTimeData);
//       })
//       .on("end", (err) => {
//         if (err) return console.log("connection closed due to errors", err);
//         res.end();
//       });
//   } else {
//     res.end("File not found");
//   }
// });

// server.listen(8000, "127.0.0.1");