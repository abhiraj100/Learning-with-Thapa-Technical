const add = (a, b) => {
    return a + b;
};

const sub = (a, b) => {
    return a - b;
};

const mult = (a, b) => {
    return a * b;
};

const div = (a, b) => {
    return a / b;
};

const mod = (a, b) => {
    return a % b;
};

const name = "abhiraj";

// If we export only one variable, method then we can do like that
// module.exports = add;

// If we export multiple variable, method then we can do like that
module.exports.add = add;
module.exports.sub = sub;
module.exports.mult = mult;
module.exports.div = div;
module.exports.mod = mod;

// if we want to export all variable and method all together then we can do like that -> object destructuring
module.exports = { add, sub, mult, div, mod, name };








// const name = "abhiraj";
// module.exports = name;




