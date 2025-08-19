// ************NUmber*********

const number = 400
// console.log(number);

const balance = new Number(123)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 23.543234

// console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
// console.log(hundreds.toLocaleString());

// ************Maths****************

// console.log(Math);
// console.log(Math.abs(-3));
console.log(Math.round(4.8));
console.log(Math.ceil(4.2));
console.log(Math.floor(5.3));
// console.log(Math.max(32,56,6));
// console.log(Math.min(43,87,4));

// console.log((Math.floor(Math.random() * 10) + 1));

let min = 10
let max = 30

console.log(Math.floor(Math.random() * (max - min + 1) + min))