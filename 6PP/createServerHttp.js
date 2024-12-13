const http = require("http");
const fs = require("fs");


const PORT = 4000;
const hostname = "localhost";
const home = fs.readFileSync("./index.html", "utf-8");

// 1 to 65535

// these two are in-built modules 
console.log(__dirname)
console.log(__filename)

const server = http.createServer((req, res) => {

    console.log(req.url);

    if(req.url === "/"){
        // res.end("<h2>Home Page</h2>")
        return res.end(home )
    }
    if(req.url === "/about"){
        return res.end("<h1>About Page</h1>")
    }
    if(req.url === "/service"){
        return res.end("<h1>Service Page</h1>")
    }
    if(req.url === "/contact"){
        return res.end("<h1>Contact Page</h1>")
    } 
    else {
        return res.end("<h1>404 : Error Page Not Found </h1>")
    }
});


server.listen(PORT, hostname, () => {
    console.log(`Server is listening on http://${hostname}:${PORT}`);
})