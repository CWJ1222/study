// 다음과 같은 push, pop, shift, unshift 를 순수 함수로 작성하시오.
// (단, 입력값은 다음 예시로 한정함)
const assert = require("assert");
const arr = [1, 2, 3, 4];
const push = (arr, ...args) => [...arr, ...args];
assert.deepStrictEqual(push(arr, 5, 6), [1, 2, 3, 4, 5, 6]);

const pop = (arr, n) => arr.slice(-n);
console.log(pop(arr, 1));
assert.deepStrictEqual(pop(arr, 1), [4]);
assert.deepStrictEqual(pop(arr, 2), [3, 4]); // 2개 팝!

const unshift = (arr, ...args) => [...args, ...arr];
assert.deepStrictEqual(unshift(arr, 0), [0, 1, 2, 3, 4]);
assert.deepStrictEqual(unshift(arr, 7, 8), [7, 8, 1, 2, 3, 4]);

const shift = (arr, n) => arr.slice(n);
assert.deepStrictEqual(shift(arr, 1), [2, 3, 4]);
assert.deepStrictEqual(shift(arr, 2), [3, 4]);
