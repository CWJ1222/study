const obj = { 1: "1입니다.", false: "거짓" };
console.log(Object.keys(obj));
console.log(obj["1"]);
console.log(obj["false"]);

const a = Symbol();
const b = Symbol();
console.log(a === b);
console.log(a == b);

const id = Symbol("id");
const id2 = Symbol("id");
console.log(id === id2);

const idd = Symbol("idd");
const user = {
  name: "Mike",
  age: 30,
  [idd]: "myid",
};
console.log(user);
console.log(user[idd]);
console.log("------------------------------------------------------");
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
console.log("------------------------------------------------------");
const id1 = Symbol.for("id");
const id3 = Symbol.for("id");
console.log(id1 === id3);
console.log(Object.getOwnPropertySymbols(user));
console.log(Reflect.ownKeys(user));

const showName = Symbol("show name");
user[showName] = function () {
  console.log(this.name);
};
user[showName]();

for (let key in user) {
  console.log(`His ${key} is ${user[key]}.`);
}
