// const name = "abhiraj";
// console.log(name);

const fs = require('fs');

// Creating a new file
// fs.writeFileSync('01_core_module/read.txt', "welcome to nodejs ");

// fs.writeFileSync('01_core_module/read.txt', "abhiraj ..., welcome to nodejs");  // it overrides the previous data delete the last one data


// fs.appendFileSync("01_core_module/read.txt", " how are you I am fine Thank You :)");  // to append the data

// read data inside the file
// fs.readFileSync("01_core_module/read.txt");

const buf_data = fs.readFileSync("01_core_module/read.txt");

console.log(buf_data);

// Node.js includes an additional data type called Buffer
// (not available in browser's JavaScript).
// Buffer is mainly used to store binary data,
// while reading from a file or receiving packets over the network.

console.log("----x----x----x----");

/* <Buffer 61 62 68 69 72 61 6a 20 2e 2e 2e 2c 20 77 65 6c 63 6f 6d 65 20 74 6f 20 6e 6f 64 65 6a 73 0d 0a 0d 0a 0d 0a 20 68 6f 77 20 61 72 65 
20 79 6f 75 20 49 ... 21 more bytes> */

org_data = buf_data.toString();

console.log(org_data);


console.log("----x----x----x----");


// to rename the file  -> function renameSync(oldPath: fs.PathLike, newPath: fs.PathLike)

fs.renameSync("01_core_module/read.txt", "01_core_module/readWrite.txt")










