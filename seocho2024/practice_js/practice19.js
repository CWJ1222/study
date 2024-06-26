const arr = [1, 2, 3, 4, 5];
A = arr.map((a) => a ** 2);
B = arr.map((a) => Math.sqrt(a));
C = arr.map((a) => a ** 3);

console.log("🚀 ~ A:", A);
console.log("🚀 ~ B:", B);
console.log("🚀 ~ C:", C);

const square = (n) => n ** 2;
const sqrt = (n) => Math.sqrt(n);
const cube = (n) => n ** 3;

const operations = [square, sqrt, cube];
const result = operations.reduce((acc, operation) => acc.map(operation), arr);
console.log(result);

const customOrderOperations = (order, arr) => {
  const operations = {
    square: (n) => n ** 2,
    sqrt: (n) => Math.sqrt(n),
    cube: (n) => n ** 3,
  };
  return order.reduce((acc, operation) => acc.map(operations[operation]), arr);
};

D = customOrderOperations(["square"], arr);
E = customOrderOperations(["square", "sqrt"], arr);
F = customOrderOperations(["cube", "square", "sqrt"], arr);
console.log("🚀 ~ D:", D);
console.log("🚀 ~ E:", E);
console.log("🚀 ~ F:", F);
