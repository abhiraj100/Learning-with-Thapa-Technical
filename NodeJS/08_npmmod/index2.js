const chalk = require("chalk");
const validator = require('validator');

// console.log(chalk.green.underline.inverse("success"));

// const result = validator.isEmail("abhiraj@abhiraj.com");
const result = validator.isEmail("abhiraj@abhiraj.com");
// const result = validator.isEmail("abhiraj@abhirajco.m");
console.log(result);

console.log(result ? chalk.green.inverse(result) : chalk.red.inverse(result));