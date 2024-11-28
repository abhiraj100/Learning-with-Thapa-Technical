// const oper = require('./operator.js');
// // const name = require('./operator.js');

// console.log(oper);

// console.log(oper.add(5, 5));
// console.log("----x----x----x----");
// console.log(oper.sub(10, 5));



// const {add, sub, name, mult, div, mod  } = require('./operator.js');  // it'll not give error in nodejs we can do like that value will be same
const {add, sub, mult, div, mod, name } = require('./operator.js');

console.log(add(5, 5));
console.log("----x----x----x----");
console.log(sub(10, 5));
console.log("----x----x----x----");
console.log(mult(10, 5));
console.log("----x----x----x----");
console.log(div(10, 5));
console.log("----x----x----x----");
console.log(mod(10, 5));
console.log("----x----x----x----");
console.log(name);





















// The parameters are the aliases for the values that will be passed to the function.
// The arguments are the actual values. 

// When we call the function and pass the argument then it is called as funtion's arguments.
// When we define the function then it is called as function's parameters