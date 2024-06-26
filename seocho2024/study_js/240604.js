const arr = [1, 2, 3, 2, 3];
arr.some((a, idx) => a === 1);
arr.some((a) => a === 5);
arr.every((a, idx) => a > 0);
arr.every((a) => a % 2 === 0);

a5 = [1, 5, 4, 11, 7, 13, 15, 14, 8, 9, 25];
b = a5.sort();
console.log("🚀 ~ b:", b);
b1 = a5.sort((a, b) => a - b);
console.log("🚀 ~ b1:", b1);
b2 = a5.sort((a, b) => b - a);
console.log("🚀 ~ b2:", b2);

a6 = ["Kim", "Lee", "Hong"];
b3 = a6.sort();
console.log("🚀 ~ b3:", b3);
b7 = a6.sort((a, b) => b - a);
console.log("🚀 ~ b7:", b7);
b8 = a6.sort((a, b) => b > a);
console.log("🚀 ~ b8:", b8);
b9 = a6.sort((a, b) => (b > a ? 1 : -1));
console.log("🚀 ~ b9:", b9);

class Animal {
  static ID = 1;
  static isDog(ani) {
    return ani.name === "Dog";
  }
}
const dog = new Animal("Dog");
//dog.isDog(dog); // TypeError: dog.isDog is not a function
Animal.isDog(dog); // OK

console.log(dog.ID); // undefined
console.log(dog.constructor.ID); // 1
console.log(Animal.ID); // 1
//cf.Animal.ID = 2; // OK

let visitors = 100000000;
console.log(`방문자 수: ${visitors.toExponential()}`);
