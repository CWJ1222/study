// let a = 1, b = 2;
let a = 1;
let b = 2;

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

let c = (a++, b++);
// ==> a = a + 1; let c = b; b = b + 1;

// let c = (a++, ++b);
// ==> a + a + 1; b = b + 1; let c = b;

// const c = ((a = a + 1), (b = b + 1));
console.log("c =", c, a, b);

let d = (a--, b + a);
console.log("d =", d, a, b);

d = void (c = a + b);
console.log(a, b, c, d); // ?

console.log("-------------------");
const first = "Uncle";
const last = "Bob";
if (first) {
  console.log(first);
}
console.log(last);

let fullName = first ? first + " " : "";
//         'Uncle ' + 'Bob'
//            ''    + 'Bob'
fullName = fullName + last;
console.log("fullName =", fullName);

console.log(`${first}${first ? " " : ""}${last}`);

console.log("-------------------");
const bi = 0b101;
const oct = 0o101;
const hex = 0x101;
console.log(bi, oct, hex);
console.log(parseInt("101", 36));
console.log(parseFloat("10.100"));
console.log(Number("10.100"));

console.log(-Infinity);
console.log(isNaN(Infinity));
console.log(Number.MAX_VALUE);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER);
console.log("----------------------");
console.log(9007199254740991 === 9007199254740991);
console.log(9007199254740991 === 9007199254740992); // false
console.log(9007199254740993 === 9007199254740992);
console.log(9007199254740993n === 9007199254740992n);

console.log(Number.isInteger(0.1));

const num = 123.456;
console.log(num.toFixed(2));
console.log(num, Math.trunc(Number(num.toFixed(2)) + 9));

const three = 0.1 + 0.2;
console.log(three);
console.log(0.1 + 0.7);
console.log(0.3 + 0.2);
const ep = Math.abs(three - 0.3) < Number.EPSILON;
console.log("🚀  ep:", ep, Number.EPSILON);
console.log(Math.trunc((0.1 + 0.2) * 10) / 10);
console.log(2.5 % 1);
console.log(2.4 % 1);

console.log("===========================");
if (three === 0.3) {
  console.log("OK");
} else {
  console.log("exists garbage!");
}

const x = 2;
// x가 1이면 one, 2면 two, 3이면 three, 그 외 etc

// 1. if 문
if (x === 1) {
  console.log("one");
} else if (x === 2) {
  console.log("two");
} else if (x === 3) {
  console.log("three");
} else {
  console.log("etc");
}

let outStr = "etc";
if (x === 1) {
  outStr = "one";
} else if (x === 2) {
  outStr = "two";
} else if (x === 3) {
  outStr = "three";
}
console.log(outStr);

// 2. switch 문
switch (x) {
  case 1:
    console.log("one");
    break;
  case 2:
    console.log("two");
    break;
  case 3:
    console.log("three");
    break;
  default:
    console.log("etc");
}

// 3. 3항 연산자
outStr = x === 1 ? "one" : x === 2 ? "two" : x === 3 ? "three" : "etc";
console.log("🚀  outStr:", outStr);

let t = 5;
while (t > 0) {
  console.log("🚀 ~ i:", t);
  t = t - 1;
}
console.log("---------");
t = 5;
while (t-- > 0) {
  console.log("🚀 ~ i:", t);
}
//while(i-- > 0)  console.log("🚀 ~ i:", i) 블록 안에 한줄인경우
console.log("---------");

t = 5;
do {
  console.log("🚀 ~ i:", t);
} while (t-- > 1);

//1부터 100까지 더해서 출력하기
console.log("---------");

t = 0;
let s = 0;
while (t < 100) {
  t = t + 1;
  s = s + t;
}
console.log("🚀 ~ s:", s);

console.log("---------");

for (let j = 1; j < 6; j++) {
  console.log("🚀 ~ j:", j);
}

console.log("---------");

for (let j = 6; j > 0; j--) {
  console.log("🚀 ~ j:", j);
}
//같은 변수 j라도 블록 안에서만 유효함
console.log("---------------=-=-=-=-=-=-=-=-=-=-=----");
s;
for (let K = 1, s = 0; K < 101; K++) {
  //s = s + K
  s += K;
}
console.log("🚀 ~ s:", s);
console.log("---------------=-=-=-=-=-=-=-=-=-=-=----");

const arr = [10, 20, 30, 40, 50];
for (let i = 0; i < arr?.length; i++) {
  console.log(`🚀 ~ arr[${i}]:`, arr[i]);
}
console.log("---------------=-=-=-=-=-=-=-=-=-=-=----");
for (const t of arr) {
  console.log("t:", t);
}
console.log("---------------=-=-=-=-=-=-=-=-=-=-=----");

const user = { id: 1, name: "Hong" };
for (const p in user) {
  console.log("p:", p, user[p]);
}

const dt = new Date();
console.log("🚀 ~ dt:", dt, dt.getFullYear());
console.log("🚀 ~ dt:", dt, dt.getMonth());
console.log("🚀 ~ dt:", dt, dt.getDay());
console.log("🚀 ~ dt:", dt, dt.getDate());
