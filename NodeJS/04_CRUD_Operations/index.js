// Challenge Time

// 1: Create a folder named it abhiraj
// 2: Create a file in it named bio.txt and data into it.
// 3: Add more data into the file at the end of the existing data.
// 4: Read the data without getting the buffer data at first.
// file encoding
// 5: Rename the file name to myBio.txt 
// 6: now delete both the file and the folder

// Using Synchronous

// const fs = require("fs");
// fs.writeFileSync("04_CRUD_Operations/read.txt", "Hello World" );
// const data = fs.readFileSync("04_CRUD_Operations/read.txt", "utf-8");
// console.log(data);
// console.log("after the data that is Synchronous")

// Using Asynchronous  -> it takes multiple request and return which one is completed first.

const fs = require("fs");

// fs.mkdir("abhiraj", (err) => {
//     console.log("folder created");
// });

// fs.writeFile("./abhiraj/bio.txt", "my name is abhiraj yadav", (err) => {
//     console.log("Files created");
// });

// fs.appendFile('./abhiraj/bio.txt', "  plz like and share my videos", 
// (err) => {
//     console.log("files data appended");
// });

// fs.readFile("./abhiraj/bio.txt", "utf-8", (err, data) => {
//     console.log(data);
// })


// fs.readFile("04_CRUD_Operations/abhiraj/bio.txt", (err, data) => {
//     console.log(data);
// });


{/* <Buffer 6d 79 20 6e 61 6d 65 20 69 73 20 61 62 68 69 72 61 6a 20 79 61 64 61 76 20 20 70 6c 7a 20 6c 69 6b 65 20 61 6e 64 20 73 68 61 72 65 20 6d 79 20 76 69 ... 4 more bytes> */}


fs.rename("./abhiraj/bio.txt", "./abhiraj/myBio.txt", 
(err) => {
    console.log("rename done");
});


// fs.unlink("./abhiraj/myBio.txt" , (err) => {
//     console.log("files deleted");
// });

// fs.rmdir("./abhiraj", (err) => {
//     console.log("folder deleted");
// });






