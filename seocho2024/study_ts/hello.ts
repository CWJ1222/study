const myName = "Choi";
let s: string | number = "abc";
s = 123;
console.log("Hello, World");
console.log(`Hello, ${myName}!`);

let x: null | undefined;
let y: any; //any는 타입스크립트에서 제외하는거라 사용하면 안좋음
y = 123;
y = "abc";

function add(a: number, b: number) {
  return a + b;
}
console.log(add(1, 2));

let rocker;
rocker = "Alice";
console.log(rocker.toUpperCase());

rocker = 123.45;
console.log(rocker.toPrecision(1));

const str: string = "abc";
const user: { id: number; name: string } = { id: 1, name: "Hong" };
// user.addr = "Seoul";
type Emp = { id: number; name: string; dept: string | number };
//안에 넣어주면 복잡하니까 밖에 미리 정의해줌
const emp: Emp = {
  id: 1,
  name: "Kim",
  dept: "Sales",
};
emp.dept = 12;

const Y = "y"; //y타입
let Z: "x" | "y" | "z" = "x"; //스트링타입
Z = "y";
Z = Y;
let N: 1 | 2 | 3 = 3;
N = 2;
