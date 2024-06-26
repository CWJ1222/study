const assert = require("assert");
const arr = [1, 2, 3, 4];
function deleteArray(arr, index) {
  return arr.slice(0, index);
}
assert.deepStrictEqual(deleteArray(arr, 2), [1, 2]);
console.log("🚀 ~ arr:", arr);

function deleteArray1(arr, ...indices) {
  return arr.filter((_, index) => !indices.includes(index));
}
assert.deepStrictEqual(deleteArray1(arr, 1, 2), [1, 4]);
console.log(deleteArray1(arr, 1, 2));

const Hong = { id: 1, name: "Hong" };
const Kim = { id: 2, name: "Kim" };
const Lee = { id: 3, name: "Lee" };
const users = [Hong, Kim, Lee];

function deleteObjectArray(arr, id) {
  return arr.filter((obj) => obj.id !== id);
}
assert.deepStrictEqual(deleteObjectArray(users, 2), [Hong, Lee]);

function deleteObjectArray1(arr, key, value) {
  return arr.filter((obj) => obj[key] !== value);
}
assert.deepStrictEqual(deleteObjectArray1(users, 2, 1), [Hong, Lee]);
assert.deepStrictEqual(deleteObjectArray1(users, "id", 2), [Hong, Lee]);
