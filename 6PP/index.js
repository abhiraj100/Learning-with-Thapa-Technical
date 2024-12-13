// core/build-in module 
const fs = require("fs");

// console.log(fs);  // method or property fs module contains

// readFile is asynchronous function
fs.readFile("./Sample.txt", "utf-8" ,(err, data) => {
    if(err) {
        return err
    } else {
        console.log(data);
    }
});


console.log("I am Abhiraj")


// writeFile

const a = "Where are you going?"

fs.writeFile("./Sample2.txt", a, () => {
    console.log("written")
});










// // File-based module

// const a = {
//     average : (a , b) => {
//         console.log((a + b)/2);
//     }, 
//     percent : (a, b) => {
//         console.log((a/b) * 100);
//     }
// }

// module.exports = a;