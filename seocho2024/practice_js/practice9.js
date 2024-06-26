// 1 ~ n까지의 원소로 이루어진 배열을 만드는 함수를 재귀함수로
// 작성하시오.
// (단, array 메소드 사용하지 말고, destructuring을 사용하시오)
// *makeArray(10);*
// *⇒ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]*
// *makeReverseArray(5);*
// *⇒ [5, 4, 3, 2, 1]*

function makeArray(n, arr = []) {
  if (n === 0) return arr;
  return makeArray(n - 1, [n, ...arr]);
}

function makeReverseArray(n, arr = []) {
  if (n === 0) return arr;
  return makeReverseArray(n - 1, [...arr, n]);
}

A = makeArray(19);
console.log("🚀 ~ A:", A);
R = makeReverseArray(5);
console.log("🚀 ~ R:", R);
