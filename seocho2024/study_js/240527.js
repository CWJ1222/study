var a = parseInt(11, 2);
console.log("🚀 ~ parseInt:", a);

var b = parseInt("abc");
console.log("🚀 ~ parseInt:", b);

var x = 5;
console.log(typeof x, typeof !!x);

var c = parseInt(111, 8);
console.log("🚀 ~ parseInt:", c);
console.log("---------------------------------");

const d1 = Date();
console.log("🚀 ~ d1:", d1);
const d2 = new Date();
console.log("🚀 ~ d2:", d2);
dd1 = typeof d1;
console.log("🚀 ~ dd1:", dd1);
dd2 = typeof d2;
console.log("🚀 ~ dd2:", dd2);
console.log(d2.valueOf());

console.log("---------------------------------");

console.log("sss" + 2, "sss" + { id: 1 });
s = { id: 1 } + 2;
r = x + "30";
q = x * "30";
console.log(s, typeof s, r, typeof r, q, typeof q);
console.log("---------------------------------");

t = 100;
t.toString();
let u = "hong";
u.age = 30;
console.log(u.age);
u = 7;
console.log(u, !t);
console.log("---------------------------------");

a = 1;
b = ((a.b = 5), console.log("xx>>", a.b));
console.log(a, b);
a = 1;
console.log("xx>>", a.b, a.toString() === "1");
console.log(a);

console.log("---------------------------------");
n = 1 + 5;
var s = "a";
ss = s + "bc";
console.log("🚀 ~ ss:", ss);

console.log("---------------------------------");
var x = 5;
console.log(x > 1 ? "Plural" : "Singular");
var a = 1,
  b = 2;
var c = (a++, b++);
var d = (a--, b + a);
console.log(a, b, c, d);
d = void (c = a + b);
console.log(a, b, c, d);

console.log("---------------------------------");

a = null;
var b = (boolean = a === null);
const A = a ?? {};
console.log(a, b, A);
var a = [],
  b = "",
  c = "false",
  d = "0";
console.log(a ? "T" : "F", !!b, !!c, !!d);
console.log("---------------------------------");

(T = true), (F = false), (x = 1);
console.log(T || x++, T && ++x, x);
console.log(T && x++, F && x++, x);

var first = "Di",
  last = "Bob";
console.log(`${first}${last}`);
console.log(`${first}${first ? " " : ""}${last}`);
console.log(`${first}${first && " "}${last}`);
console.log("---------------------------------");

false == null;
