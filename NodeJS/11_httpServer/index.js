// The http.createServer() method includes request and response parameters which 
// is supplied by Node.js.

// The request object can be used to get information about the current HTTP request
// e.g., url, request header, and data.

// The response object can be used to send a response for a current HTTP request.

// If the response from the HTTP server is supposed to be displayed as HTML, 
// you should include an HTTP header with the correct content type:


const http = require("http");

const server = http.createServer((req, res) => {
    res.end('Hello from the other sides - Abhiraj');
});

server.listen(8000, "127.0.0.1", () => {
    console.log('listening to the port no. 8000');
});
