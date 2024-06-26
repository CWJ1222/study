//array1
var stack = [];
var queue = [];

stack.push(1);
stack.push(2);
stack.push(3);

var stackOutput = stack.pop();
console.log("🚀 ~ stackOutput:", stackOutput);

queue.push(10);
queue.push(20);
queue.push(30);
queue.push(40);
queue.push(50);

//queue.pop();
queue.shift();
queue.unshift();
var queueOutput = queue.shift();
var queueOutput1 = queue.unshift();
console.log("🚀 ~ queueOutput1:", queueOutput1);
console.log("🚀 ~ queueOutput:", queueOutput);

console.log("🚀 ~ stack:", stack);
console.log("🚀 ~ queue:", queue);

const list = ["r3", "r2", "r1"];
const r2index = list.indexOf("r2");
console.log("🚀 ~ r2index:", r2index);

function addArticle(article) {
  list.unshift(article);
}
addArticle("r4");
console.log("🚀 ~ list:", list);
function removeOld() {
  list.pop();
}

const hong = { id: 1, name: "Hong" };
const kim = { id: 2, name: "Kim" };
const park = { id: 3, name: "Park" };
const choi = { id: 4, name: "Choi" };
const users = [choi, kim, park, hong];
const id2user = users.findIndex((v, i) => v.id === 2);
//한줄인 경우 블록생략가능, return 생략가능(화살표 함수에 포함됨),
//i는 사용안하기 때문에 생략가능
console.log("🚀 ~ id2user ~ id2user:", id2user);
const id2usera = users.find((v) => v.id === 2);
console.log("🚀 ~ id2usera:", id2usera);

for (const user of users) {
  console.log(user.id, user.name);
}
//user.forEach((user) => console.log(v.id, v.name));
// 3,2,1,4 가 필요할때?
const userIds = users.map((v) => v.id);
console.log("🚀 ~ userIds:", userIds);

const evenUsers = users.filter((v) => v.id % 2 === 0);
console.log("🚀 ~ evenUsers:", evenUsers);

const isEveryLess5 = users.every((v) => v.id < 5);
console.log("🚀 ~ isEveryLess5:", isEveryLess5);

const hasId3 = users.some((v) => v.id === 3);
console.log("🚀 ~ hasId3:", hasId3);

const second = users[1];
console.log("🚀 ~ second:", second);

const end = users[users.length - 1];
console.log("🚀 ~ end:", end);
const beforeEnd = users[users.length - 2];
console.log("🚀 ~ beforeEnd:", beforeEnd);

const beforeEnd2 = users.at(-1);
console.log("🚀 ~ beforeEnd2:", beforeEnd2);

const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = arr1.concat(arr2);
console.log("🚀 ~ arr3:", arr3);
//arr1 arr2 는 안바뀜
const arr4 = [...arr1, ...arr2]; //spead로 하나씩 꺼내서 사용함
console.log("🚀 ~ arr4:", arr4);

const sortbyIds = users.sort();
