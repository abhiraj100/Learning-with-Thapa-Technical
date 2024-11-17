const fs = require("fs");

// fs.writeFile('read.txt', "today is awesome day :)", 
// (err) => {
//     console.log("files is created");
//     console.log(err);  // null means there is no error
// });


// We pass them a function as an argument - a callback - that gets called when that task 
// completes. The callback has an argument that tells you whether the operation 
// completed successfully.
// Now we need to say what to do when fs.writeFile has completed ( even if it's nothing ),
// and start checking for errors.


// fs.appendFile("read.txt", "plz like and share and subscribe my channel", (err) => {
//     console.log("task completed");
// });


// fs.readFile("read.txt", (err, data) => {
//     console.log(data);
// });

{/* <Buffer 74 6f 64 61 79 20 69 73 20 61 77 65 73 6f 6d 65 20 64 61 79 20 3a 29 70 6c 7a 20 6c 69 6b 65 20 61 6e 64 20 73 68 61 72 65 20 61 6e 64 20 73 75 62 73 ... 16 more bytes> */}

fs.readFile("read.txt", "UTF-8" ,(err, data) => {
    console.log(data);
});

