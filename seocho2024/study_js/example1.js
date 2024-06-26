// let a =1, b=2;
let a = 1;
let b = 2;

// const c = (a++, b++);
let c = ((a = a + 1), (b = b + 1));
console.log("c =", c, a, b);

let d = (a--, b + a);
console.log("d=", d, a, b);

d = void (c = a + b);
console.log(a, b, c, d); // ?
console.log("------------");
// let fullName = first ? ' ' : '';

const bi = 0b101;
const oct = 0o101;
const hex = 0x101;
console.log(bi, oct, hex);
console.log(-Infinity);
console.log(isNaN(Infinity));
const num = 123.456;
console.log(num, num.toFixed(2) + 9);
Math.trunc(Number(num.toFixed(2)) + 9);

const three = 0.1 + 0.2;
console.log(three);
console.log(0.1 + 0.2);
console.log(0.1 + 0.7);
console.log(0.3 + 0.2);
const ep = Math.abs();
console.log(Math.trunc((0.1 + 0.2) * 10) / 10);
console.log(2.4 % 1);

console.log("--------");
if (three == 0.3) {
  console.log("OK");
} else {
  console.log("exists garbage");
}

//1이면 one, 2 ~ two, 3 ~ three, 그외는 etc
var x = 5;
if (x == 1) {
  console.log("one");
} else if (x == 2) {
  console.log("two");
} else if (x == 3) {
  console.log("three");
} else {
  console.log("etc");
}

let x = 5;
if (x == 1) {
  console.log("one");
} else if (x == 2) {
  console.log("two");
} else if (x == 3) {
  console.log("three");
} else {
  console.log("etc");
}
