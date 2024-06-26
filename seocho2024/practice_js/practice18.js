const reduce = (arr, fn, initValue) => {
  let acc = initValue === undefined ? arr[0] : initValue;
  let startIndex = initValue === undefined ? 1 : 0;
  for (let i = startIndex; i < arr.length; i++) {
    acc = fn(acc, arr[i]);
  }
  return acc;
};

A = reduce([1, 2, 3], (a, b) => a + b, 0);
console.log("🚀 ~ A:", A);

B = reduce([1, 2, 3, 4, 5], (a, b) => a + b);
console.log("🚀 ~ B:", B);

C = reduce([1, 2, 3, 4, 5], (a, b) => a * b, 1);
console.log("🚀 ~ C:", C);

D = reduce([2, 2, 2], (a, b) => a * b);
console.log("🚀 ~ D:", D);

E = reduce([3, 3, 3], (a, b) => a * b, 0);
console.log("🚀 ~ E:", E);
