const assert = require("assert");
const arr = [1, 2, 3, true];
const ret1 = arr.map((item) => String(item));
assert.deepStrictEqual(ret1, ["1", "2", "3", "true"]);

const classNames = (...args) => args.filter(Boolean).join(" ");
const ret2 = classNames("", "a b c", "d", "", "e");
assert.strictEqual(ret2, "a b c d e");
//???
