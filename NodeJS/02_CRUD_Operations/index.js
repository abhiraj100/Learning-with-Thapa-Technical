const fs = require('fs');

// fs.mkdirSync("abhiraj");

fs.writeFileSync("abhiraj/bio.txt", "my name is abhiraj yaduvanshi");

fs.appendFileSync('abhiraj/bio.txt', " plz subscribe to my channel :)");

// const data = fs.readFileSync('abhiraj/bio.txt');
// console.log(data);

// If no encoding is specified, then the raw buffer is returned.
{/* <Buffer 6d 79 20 6e 61 6d 65 20 69 73 20 61 62 68 69 72 61 6a 20 79 61 64 75 76 61 6e 73 68 69 20 20 70 6c 7a 20 73 75 62 73 63 72 69 62 65 20 74 6f 20 6d 79 ... 11 more bytes> */}

// const data = fs.readFileSync('abhiraj/bio.txt').toString();
// console.log(data);

const data = fs.readFileSync('abhiraj/bio.txt', "utf8");  // utf8 -> a character encoding capable of encoding all possible characters (called code points) in Unicode.  -> it use one to four code units to encode Unicode.

console.log(data);


fs.renameSync("abhiraj/bio.txt", "abhiraj/myBio.txt");

// fs.unlinkSync("abhiraj/myBio.txt");  // delete the file

// fs.rmdirSync("abhiraj");


