// // 2nd Way
// // Reading from a Stream
// // Create a readable stream
// // Handle stream events --> data, end, and error

// let fs = require("fs");
// const http = require("http");

// const server = http.createServer();

// server.on("request", (req, res) => {
//     // var fs = require("fs");              // node-fs
//     fs.readFile("input.txt", "utf-8",  (err, data) => {
//   //      if (err) return console.error(err);
//   //      console.log(data.toString());
//         if (err) return console.log(err);
//         res.end(data.toString());
//     });
// });

// server.listen(8000, "127.0.0.1");





// const fs = require("fs");
// const http = require("http");

// const server = http.createServer();

// server.on("request", (req, res) => {
//     // fs.readFile("input.txt",  (err, data) => {
//     //     if (err) return console.log(err);
//     //     res.end(data.toString());
//     // });

//     // 2nd Way
//     // Reading from a Stream
//     // Create a readable stream
//     // Handle stream events --> data, end, and error

//     const rstream = fs.createReadStream("input.txt");

//     rstream.on("data", (chunkdata) => {
//         res.write(chunkdata);
//     });
//     rstream.on("end", () => {
//         res.end();
//     });
//     rstream.on("error", (err) => {
//         console.log(err);
//         res.end("file not found");
//     });
// });

// server.listen(8000, "127.0.0.1");



const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
    // 2nd Way
    // Reading from a Stream
    // Create a readable stream
    // Handle stream events --> data, end, and error

    const rstream = fs.createReadStream("input.txt");

    rstream.on("data", (chunkdata) => {
        res.write(chunkdata);
    });
    rstream.on("end", () => {
        res.end();
    });
    rstream.on("error", (err) => {
        res.end("File not found");
    });
});

server.listen(8000, "127.0.0.1");
