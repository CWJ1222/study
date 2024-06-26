function hello() {
  return "Hello, Wolrld!";
}
console.log(hello());

function printFnReturnValue(fn) {
  console.log(fn.name, fn());
}
const ret = printFnReturnValue(hello);
console.log(ret);

let numbers = [1, 2, 3, 4, 5, 10];
let sum = numbers.reduce((accu, currentValue) => accu * currentValue, 1);
console.log("🚀 ~ sum:", sum);

let arr1 = ["apple", "banana"];
let arr2 = ["cherry", "date"];
let newArr = arr1.concat(arr2);
console.log("🚀 ~ newArr:", newArr);
console.log("==========================================");
let str = newArr.join(",");
console.log("🚀 ~ str:", str);
console.log("==========================================");
let iterator = newArr.values();
for (let value of iterator) {
  console.log(value);
}
console.log("==========================================");
let includesCherry = newArr.includes("apple");
console.log(includesCherry);
console.log("==========================================");
let sliceArr = newArr.slice(1, 3);
console.log("🚀 ~ sliceArr:", sliceArr);

let arra = [1, [2, [3, [4]]]];
let flatArr = arra.flat(Infinity);
console.log("🚀 ~ flatArr:", flatArr);
console.log("==========================================");
let newLength = newArr.push("monkey");
console.log("🚀 ~ newArr:", newArr);
console.log("🚀 ~ newLength:", newLength);
console.log("==========================================");
let removedElement = newArr.pop();
console.log("🚀 ~ newArr:", newArr);
console.log("🚀 ~ removedElement:", removedElement);
console.log("==========================================");
let Shift = newArr.shift();
console.log("🚀 ~ newArr:", newArr);
console.log("🚀 ~ Shift:", Shift);
console.log("==========================================");
let Unshift = newArr.unshift("bag");
console.log("🚀 ~ newArr:", newArr);
console.log("🚀 ~ Unshift:", Unshift);
console.log("==========================================");
// let Split = newArr.split(", ");
// console.log("🚀 ~ Split:", Split);
// console.log("🚀 ~ newArr:", newArr); split은 문자열에만 가능, 배열에는 불가

// index 0 1 2 3 4
const arr = [1, 2, 3, 4, 5, 6, 7, 3];
a1 = arr.indexOf(3); //
console.log("🚀 ~ a1:", a1);
a2 = arr.indexOf(5); //
console.log("🚀 ~ a2:", a2);
a3 = arr.indexOf(1, 4); // b인덱스 이후(포함)로 a수치가 나오는 인덱스를 찾아서 소환
console.log("🚀 ~ a3:", a3);
a4 = arr.lastIndexOf(3); //
console.log("🚀 ~ a4:", a4);
a5 = arr.lastIndexOf(3, 8); //
console.log("🚀 ~ a5:", a5);

a6 = arr.includes(1); //
console.log("🚀 ~ a6:", a6);
a7 = arr.includes(5); //
console.log("🚀 ~ a7:", a7);
a8 = arr.includes(4, 1); //
console.log("🚀 ~ a8:", a8);
a9 = arr.includes(10, 0); //
console.log("🚀 ~ a9:", a9);

console.log("==========================================");
console.log("==========================================");
let arrayf = ["apple", "banana", "grape", "peach", "watermelon"];
arrayf.forEach((fruit) => console.log(fruit));
