//---------------------------------  1.변수 let const var  --------------------------------

// let age = 30;
// function showAge() {
//   console.log(age);
// }
// showAge();

let age = 30;
function showAge() {
  console.log(age);
  let age = 20;
}
showAge();
