// 피보나치 수열을 memoization하여 출력하는 함수를 작성해 보세요.
// 수열의 규칙은 f(n) = f(n - 2) + f(n - 1) (단, n <= 1 일 때 f(n) = n)
// 즉, 0 ~ 9까지의 값은 각각 [0, 1, 1, 2, 3, 5, 8, 13, 21, 34] 이다.
// fibonacci(5); // 5
// fibonacci(7); // 13

let memo = [0, 1];
function fibonacci(n) {
  if (memo[n] !== undefined) return memo[n];
  return (memo[n] = fibonacci(n - 2) + fibonacci(n - 1));
}
console.log("fibonacci: ", fibonacci(9));

// memoizedFibonacci를 CallStack이 풀 나지 않도록하는
// neverFullCallStack 함수를 만들어 보시오.
// const neverFullFibonacci = neverFullV2(memoizedFibonacci);
// console.log('ret>>', neverFullFibonacci(4));
// console.log('ret>>', neverFullFibonacci(8));
// console.log('ret>>', neverFullFibonacci(100));
// console.log('ret>>', neverFullFibonacci(50000));

function neverFullV2(func) {
  let cache = {};
  return function (n) {
    if (n in cache) {
      return cache[n];
    } else {
      let result = func(n);
      cache[n] = result;
      return result;
    }
  };
}
const neverFullFibonacci = neverFullV2(fibonacci);
console.log("ret>>", neverFullFibonacci(100));
