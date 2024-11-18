// The path module provides utilities for working with file and directory paths. It can be accessed using:

const path = require('path');

console.log(path.dirname("E:/Thapa Technical/NodeJS/06_Path_Module/path.js"));

// E:/Thapa Technical/NodeJS/06_Path_Module

console.log(path.extname("E:/Thapa Technical/NodeJS/06_Path_Module/path.js"));

// .js

console.log(path.basename("E:/Thapa Technical/NodeJS/06_Path_Module/path.js"));

// path.js

console.log(path.parse("E:/Thapa Technical/NodeJS/06_Path_Module/path.js"));

// {
//     root: 'E:/',
//     dir: 'E:/Thapa Technical/NodeJS/06_Path_Module',
//     base: 'path.js',
//     ext: '.js',
//     name: 'path'
// }

console.log("----x----x----x----");

const myPath = path.parse("E:/Thapa Technical/NodeJS/06_Path_Module/path.js");
console.log(myPath.name);  // here we call the property not function so () it doesn't require.


console.log("----x----x----x----");

console.log(myPath.root);






























