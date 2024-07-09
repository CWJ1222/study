let arr = [1, 5, 4, 2, 3];
arr.sort();
console.log(arr);

let arr2 = ['a', 'b', 'c', 'e', 'a'];
arr2.sort();
console.log(arr2);

let arr3 = [35, 13, 25, 1, 7, 99];
arr3.sort((a, b) => {
  return a - b;
});
console.log(arr3);

let arr4 = [1, 2, 3, 4, 5];
// let result = 0;
// arr.forEach(num => {result += num;})
const result = arr.reduce((prev, cur) => {
  return prev + cur;
}, 0);
console.log(result);

let userList = [
  { name: 'Mike', age: 30 },
  { name: 'Tom', age: 10 },
  { name: 'Jane', age: 27 },
  { name: 'Sue', age: 26 },
  { name: 'Marry', age: 42 },
  { name: 'Steve', age: 60 },
];
let result2 = userList.reduce((prev, cur) => {
  if (cur.age > 19) {
    prev.push(cur.name);
  }
  return prev;
}, []);
console.log(result2);
