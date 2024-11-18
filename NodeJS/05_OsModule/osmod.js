// OS Module :- The OS module provides operating system-related utility methods and properties. It can be accessed using : const os = require('os')

const os = require('os');

console.log(os.arch());
console.log(os.freemem());  // Returns the amount of free system memory in bytes as an integer.
console.log(os.hostname());
console.log(os.platform());
// console.log(os.tmpdir);
console.log(os.tmpdir());
console.log(os.type());

const freeMemory = os.freemem();
// console.log(freeMemory);
console.log(`${freeMemory / 1024 / 1024 / 1024  }`);  // convert bytes into GB



const totalMemory = os.totalmem();
console.log(`${totalMemory / 1024 / 1024 / 1024  }`);  // convert bytes into GB












