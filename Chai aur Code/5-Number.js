const score = 500

const balance = new Number(2000)

console.log(score);// 500
console.log(balance); // [Number: 2000]

str = '-033'
const n = Number(str)
console.log(n); // -33

// toFixed()
const cost = 1000.31323
console.log(cost.toFixed(2)); // 1000.31
console.log(cost.toFixed(3)); // 1000.313

const pri = 323
console.log(pri.toFixed(1)); // 323.0
console.log(pri.toFixed());   // 323


// toPrecision
const ss = 212.2331
console.log(ss.toPrecision(2)); //2.1e+2
console.log(ss.toPrecision(3)); //212
console.log(ss.toPrecision(4)); //212.2

//toLocalString
const val = 1000031200
console.log(val.toLocaleString()); // By U.S. Standards
console.log(val.toLocaleString('en-IN')); //By Indian Standards


//+++++++++++++++++++++++++++++++ Math +++++++++++++++++++++++++++++++++++++++


console.log(Math);
console.log(Math.abs(-212));
console.log(Math.round(-212.33));
console.log(Math.floor(4.7));
console.log(Math.ceil(4.7));
console.log(Math.max(10,3,4,5,6));
console.log(Math.min(10,3,4,5,6));

min = 20
max = 70

console.log(Math.round(Math.random() * (max - min) + min));