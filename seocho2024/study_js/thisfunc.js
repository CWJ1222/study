const obj = {
name: 'ObjName',
bark() { // good!(호출한 객체)
console.log('bark=', this.name);
},
bark2: () => // bad!! (this=전역/module)
console.log('bark2=', this.name),
};
obj.bark();
obj.bark2();

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    console.log("안녕하세요, " + this.name + "입니다. 저는 " + this.age + "살입니다.");
}

var person1 = new Person('홍길동', 25);
var person2 = new Person('가나가', 24);
person1.greet();
person2.greet();

console.log('-------------------------------');

const Dog = function(name) {
this.name = name;
  this.bark = function () {
    console.log('bark=', new.target, this.name);
  }
  this.bark2 = () => console.log('bark2=', new.target, this.name, name);
}
const dog = new Dog('Doggy');
const lucy = new Dog('Lucy');
dog.bark(); // ?
lucy.bark2(); // ?
console.log('type=', typeof dog); // ?
console.log('type=', typeof lucy); // ?

console.log(this, new.target, this instanceof Dog); //
// console.log('-------------------------------');

// const weeks = ['일', '월', '화', '수', '목', '금', '토'];
// let widx = -1;
// const getNextWeek = () => {
// widx += 1; // side-effect!
// if (widx >= weeks.length) widx = 0;
//     return `${weeks[widx]}요일`;
// };
// let cnt = 0;
// const intl = setInterval(() => {
// // widx += 2; // side-effect!
// console.log('call', cnt, getNextWeek());
// if ((cnt += 1) === 8) clearInterval(intl);
// }, 1000);

const weeks = ['일', '월', '화', '수', '목', '금', '토'];
const getNextWeek = (() => {
  let widx = 0;
  return () => {
    // if (widx >= weeks.length) widx = 0;
    return `${weeks[widx++ % 7]}요일`;
  };
  })();
let cnt = 0;
const intl =setInterval(() => {
//widx += 2;
console.log('call', cnt, getNextWeek());
if ((cnt += 1) === 10) clearInterval(intl);
}, 200);

// const weeks = ['일', '월', '화', '수', '목', '금', '토'];
// const getNextWeek = (() => {
//   let widx = 0;
//   return () => {
//     const result = `${weeks[widx]}요일`;
//     widx = (widx + 1) % weeks.length;
//     return result;
//   };
// })();
// let cnt = 0;
// const intl = setInterval(() => {
// console.log('call', cnt, getNextWeek());
// if ((cnt += 1) === 8) clearInterval(intl);
// }, 500);