const http = require("http");

const server = http.createServer((req, res) => {
    // console.log(req.url);
    if(req.url =="/"){
        res.end('Hello from the Home sides');
    } else if(req.url  == "/about"){
        res.end('Hello from the AboutUS sides');
    } else if(req.url  == "/contact"){
        res.write("Hello from the ContactUS sides");
        res.end();
    } else {
        res.writeHead(404, {"Content-type" : "text/html"} );
        // res.end("404 error page. Page does not exist");  // status(200) -> that means page is perfect
        res.end("<h1> 404 error page. Page does not exist </h1>");
    }
    // res.end('Hello from the other sides abhiraj');
});

server.listen(8000, "127.0.0.1", () => {
    console.log('listening to the port no 8000');
});