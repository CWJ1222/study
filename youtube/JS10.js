function showName(name) {
  console.log(arguments.length);
  console.log(arguments[0]);
  console.log(arguments[1]);
}
showName('Mike', 'Tom');

function showName1(...names) {
  console.log(names);
}
showName1();
showName1('Mike');
showName1('Mike', 'Tom');

// function add(...numbers) {
//   let result = 0;
//   numbers.forEach((num) => (result += num));
//   console.log(result);
// }
function add(...numbers) {
  let result = numbers.reduce((prev, cur) => prev + cur, 0);
  console.log(result);
}

add(1, 2, 3);
add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

function User(name, age, ...skills) {
  this.name = name;
  this.age = age;
  this.skills = skills;
}
const user1 = new User('Mike', 30, 'html', 'css');
const user2 = new User('Tom', 20, 'JS', 'React');
const user3 = new User('Jane', 10, 'English');
console.log('🚀 ~ user1:', user1);
console.log('🚀 ~ user2:', user2);
console.log('🚀 ~ user3:', user3);

let arr = [1, 2, 3];
let arr2 = [...arr];
let user4 = { name: 'mike', age: 30 };
let user5 = { ...user4 };
user5.name = 'tom';
console.log(user4.name);
console.log(user5.name);

let arr5 = [1, 2, 3];
let arr6 = [4, 5, 6];
// arr6.forEach((num) => {
//   arr5.unshift(num);
// });

// arr6.reverse().forEach((num) => {
//   arr5.unshift(num);
// });

arr5 = [...arr6, ...arr5];

console.log(arr5);

let user6 = { name: 'Mike' };
let info = { age: 30 };
let fe = ['JS', 'React'];
let lang = ['Korean', 'English'];

user7 = {
  ...user6,
  ...info,
  skills: [...fe, ...lang],
};
console.log('🚀 ~ user7:', user7);
