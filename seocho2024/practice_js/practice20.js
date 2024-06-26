// const assert = require("assert");
import assert from "assert";

const arr = [1, 3, 4, 2, 5, 8, 6, 7, 9];

function rangeSum(arr, start, end) {
  return arr.slice(start, end + 1).reduce((a, b) => a + b, 0);
}

assert.deepStrictEqual(rangeSum(arr, 2, 5), 19);
assert.deepStrictEqual(rangeSum(arr, 3, 5), 15);
assert.deepStrictEqual(rangeSum(arr, 1, 4), 14);
assert.deepStrictEqual(rangeSum(arr, 0, 4), 15);
assert.deepStrictEqual(rangeSum(arr, 5, 8), 30);
assert.deepStrictEqual(rangeSum(arr, 6, 8), 22);
assert.deepStrictEqual(rangeSum(arr, 2, 8), 41);
assert.deepStrictEqual(rangeSum(arr, 4, 4), 5);
