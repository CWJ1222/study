// let arr = [1,2,3,4,5];
// arr1 = arr.splice(1,2);
// console.log(arr1);
// arr2 = arr.splice(1,1,200,300);
// console.log(arr);
// arr3 = arr.splice(1,0,3,4);
// console.log(arr);
// arr4 = arr.concat([7,8,9]);
// console.log(arr);
// console.log(arr4);

// let arr = ["Mike", "Tom", "Jane"];
// arr.forEach((name, index)=>{console.log(name);});
// arr.forEach((name,index)=>{console.log(`${index+1}. ${name}`)});

// let arr = [1,2,3,4,5];
// const result = arr.find((item)=>{return item%2 === 0;});
// console.log(result);

// let userList = [{name: "Mike", age: 30}, {name: "Jane", age: 27}, {name: "Tom", age: 10}];
// const result = userList.find((user) => {if(user.age<19){return true;}return false;});
// console.log(result);

// let arr = [1,2,3,4,5];
// const result = arr.filter((item)=>{return item%2 === 0;});
// console.log(result);

let userList = [
  { name: 'Mike', age: 30 },
  { name: 'Jane', age: 27 },
  { name: 'Tom', age: 10 },
];
let newUserList = userList.map((user, index) => {
  return Object.assign({}, user, { id: index + 1, isAdult: user.age > 19 });
});
console.log(newUserList);
