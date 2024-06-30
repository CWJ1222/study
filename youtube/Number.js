let num = 10;
console.log(num.toString());
console.log(num.toString(2));
let num2 = 255;
console.log(num2.toString(16));

console.log(Math.PI);

let num3 = 5.1;
let num4 = 5.7;
console.log(Math.ceil(num3));
console.log(Math.ceil(num4));

let num5 = 30.44525445;
console.log(Math.round(num5 * 100) / 100);
console.log(num5.toFixed(2));
console.log(num5.toFixed(0));
console.log(num5.toFixed(10));
console.log(Math.round(num5 * 100) / 100 + num5.toFixed(2));

let x = Number("x");

console.log(x == NaN);
console.log(x === NaN);
console.log(NaN === NaN);

console.log(isNaN(x));
console.log(isNaN(3));

let margin = "10px3p44p";
A = parseInt(margin);
console.log("🚀 ~ A:", A);

let redColor = "f3";
B = parseInt(redColor, 16);
console.log("🚀 ~ B:", B);
