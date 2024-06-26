type Member = {
  name: string;
  addr: string;
  discountRate: number;
};
type Guest = {
  name: string;
  age: number;
};
const member: Member = {
  name: "홍길동",
  addr: "용산구",
  discountRate: 0.1,
};
const guest: Guest = {
  name: "김길동",
  age: 28,
};
const who = Math.random() > 0.5 ? member : guest; // who는 멤버나 게스트 다됨
who.name = "마길동";
// const price = 10000 - 10000 * who.discountRate; 한쪽에만 있어서 오류

// if ('discountRate' in who)
//     console.log(who.discountRate);
// 타입내로잉
if ("addr" in who) console.log(who.discountRate);

let xarr: number[] | number = Math.random() > 0.5 ? 1 : [1, 2];
if (Array.isArray(xarr)) console.log(xarr.length);

let gildong = Math.random() > 0.5 && "HongGilDong";

if (gildong) {
  gildong.toUpperCase(); // string
} else {
  gildong; // false | string
}

let a: string | undefined;
// a = undefined;
console.log(a?.length);

const users = [
  { id: 1, name: "Hong" },
  { id: 2, name: "Kim" },
];
console.log(users.find((user) => user.id === 2)?.["id"]);

// function getX(obj: Xuser) {
//   return obj.name;
// }
// console.log("getX", getX(xuser));
// console.log("getX=");
