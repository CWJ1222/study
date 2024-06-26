// 다음을 수행하시오.
// // ex1) [2,3]을 추출
// // ex2) [3]부터 모두 다 추출
// // ex3) [2,3,4] 제거하기
// // ex4) 복원하기
// // ex5) [3] 부터 끝까지 제거하기
// // ex6) 복원하기
// // ex7) [1,2, 'X', 'Y', 'Z', 4, 5] 만들기
// // ex8) 위 7번 문제를 splice를 사용하지 말고
// 작성하시오.
const arr2 = [1, 2, 3, 4, 5];
const extracted = arr2.slice(1, 3);
console.log("🚀 ~ extracted:", extracted);
console.log("🚀 ~ arr2:", arr2);
const extractedAll = arr2.slice(2);
console.log("🚀 ~ extractedAll:", extractedAll);
// const removed = [...arr2].splice(1, 3);
const removed = arr2.splice(1, 3);
console.log("🚀 ~ removed:", removed);
console.log("🚀 ~ arr2:", arr2);
arr2.splice(1, 0, ...removed);
console.log("🚀 ~ arr2:", arr2);
const removedToEnd = arr2.splice(2);
console.log("🚀 ~ removedToEnd:", removedToEnd);
console.log("🚀 ~ arr2:", arr2);
arr2.splice(2, 0, ...removedToEnd);
console.log("🚀 ~ arr2:", arr2);
arr2.splice(2, 0, "X", "Y", "Z");
console.log("🚀 ~ arr2:", arr2);
const arr3 = [1, 2, ...["X", "Y", "Z"], 4, 5];
console.log("🚀 ~ arr3:", arr3);
