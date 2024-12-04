// API is the acronym for Application Programming Interface, which is a software
// intermediary that allows two application to talk to each other. Each time you use
// an app like Facebook send an instant Message, or check the weather on your
// isMobilePhone, you're using an API.

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const data = fs.readFileSync(`${__dirname}/14_UserApi/userapi.json`, "utf-8"); // it loads first time only
  const objData = JSON.parse(data);

  // console.log(req.url);
  if (req.url == "/") {
    res.end("Hello from the Home sides");
  } else if (req.url == "/about") {
    res.end("Hello from the AboutUS sides");
  } else if (req.url == "/userapi") {
    // fs.readFile(`${__dirname}/14_UserApi/userapi.json`, "utf-8", (err, data) => {
    //  console.log(data);
    // res.end(data);
    //     // const objData = JSON.parse(data);
    // res.end(objData[0].id);
    // res.end(data);
    // res.end(objData[0].id);
    // });
    // }
    // res.end('Hello from the userAPI sides');
    // res.end(data);   // it gives error

    res.writeHead(200, { "content-type": "application/json" });
    res.end(objData[0].id);
  } else if (req.url == "/contact") {
    res.write("Hello from the ContactUS sides");
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    // res.end("404 error page. Page does not exist");
    res.end("<h1> 404 error page. Page does not exist </h1>");
  }
  // res.end('Hello from the other sides abhiraj');
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening to the port no 8000");
});

// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//     if(req.url === "/"){
//         res.end('Hello from the Home side');
//     } else if(req.url === "/about"){
//         res.end('Hello from the About Us side');
//     } else if(req.url === "/userapi"){
//         fs.readFile(`${__dirname}/userapi.json`, "utf-8", (err, data) => {
//             if (err) {
//                 console.error(err);
//                 res.writeHead(500, {"Content-Type": "text/plain"});
//                 res.end("Internal Server Error");
//             } else {
//                 console.log(data);
//                 res.end('Hello from the userAPI side');
//             }
//         });
//     } else if(req.url === "/contact"){
//         res.write("Hello from the Contact Us side");
//         res.end();
//     } else {
//         res.writeHead(404, {"Content-type" : "text/html"} );
//         res.end("<h1>404 Error Page. Page does not exist</h1>");
//     }
// });
