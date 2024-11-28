const chalk = require("esm")("chalk");

// console.log(chalk.blue("Hello World!"));
// console.log(chalk.blue.italic("Hello World!"));
// console.log(chalk.blue.underline("Hello World!"));

const result1 = chalk.blue.underline.inverse("Hello World!");
console.log(result1);

// console.log(chalk.green.underline.inverse("success"));
// console.log(chalk.red.underline.inverse("false"));