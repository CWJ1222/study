//---------------------------------  7. 논리연산자  --------------------------------
// const Name = 'Mike'
// const age = 30;
// if Name === 'Tom' || age > 19)
// {
//     console.log('pass');
// }

// if (Name === 'Mike' && age > 19) { console.log('pass'); }
// else { console.log('go back') };

//나이를 입력받아 성인이 아니면 돌아가
// const Age = prompt("What is your age?");
// const IsAdult = Age > 19; //19보다크면 T
// if (!IsAdult) { console.log('go back') };
// else { console.log('come') };

//남자이고 이름 Mike 또는 성인이면 통과
// const Sex = prompt("성별은? M or F");
// const Name = prompt("이름은?");
// const Age = prompt("나이는?");
// console.log(`Sex=${Sex}, Name=${Name}, Age=${Age}`);
// if (Sex === "M" && (Name === "Mike" || Age > 19)) {
//   console.log("통과");
// } else {
//   console.log("돌아가");
// }

//---------------------------------  8. 반복문  --------------------------------
// for (i = 0; i < 10; i++) {
//   console.log(i);
// }

// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i = i + 1;
// }

// while (true) {
//   let answer = confirm("계속할까요");
//   if (!answer) {
//     break;
//   }
// }

//짝수만 출력되는 코드
// for (let i = 0; i < 10; i++) {
//   if (i % 2) {
//     continue;
//   }
//   console.log(i);
// }

//---------------------------------  9. switch  --------------------------------
//사고싶은 광리을 물어보고 가격 알려주기
// let fruit = prompt("무슨 과일을 사고싶나요?");
// switch (fruit) {
//   case "사과":
//     console.log("100원 입니다");
//     break;
//   case "바나나":
//     console.log("200원 입니다");
//     break;
//   case "키위":
//   case "딸기":
//     console.log("300원 입니다");
//     break;
//   case "멜론":
//   case "토마토":
//     console.log("400원 입니다");
//     break;
//   case "수박":
//     console.log("500원 입니다");
//     break;
//   default:
//     console.log("그런 과일은 없습니다");
// }
//---------------------------------  10. 함수  --------------------------------
// function showerror() {
//   alert("에러가 발생");
// }
// showerror();

//매개변수 있는 함수
// function sayHello(name) {
//   const msg = `Hello, ${name}`;
//   console.log(msg);
// }
// sayHello("Mike");
// sayHello("Jane");

// function sayHello(name) {
//   let msg = "Hello";
//   if (name) {
//     //   msg = `Hello, ${name}`;
//     //   msg += ", " + name;
//     msg += `, ${name}`;
//   }
//   console.log(msg);
// } //msg는 함수내에서만 사용가능한 지역변수
// sayHello();
// sayHello("Mike");
// //console.log(msg); 에러(함수바깥에서 선언해줘야 함)

// let msg = "Hello"; // 전역 변수
// console.log("함수호출 전");
// console.log(msg);
// function sayHello(name) {
//   if (name) {
//     //   msg = `Hello, ${name}`;
//     //   msg += ", " + name;
//     msg += `, ${name}`;
//   }
//   console.log("함수내부");
//   console.log(msg);
// } //msg는 함수내에서만 사용가능한 지역변수
// sayHello();
// sayHello("Mike");
// console.log("함수호출 후");
// console.log(msg); //바깥에 선언하면 사용가능

// let msg = "welcome";
// console.log("🚀 ~ msg:", msg);
// function sayHello(name) {
//   let msg = "Hello";
//   console.log(msg + " " + name);
// }
// sayHello("Mike");
// console.log("🚀 ~ msg:", msg);
// //전역변수, 지역변수

// let name = "Mike";
// function sayHello(name) {
//   console.log(name);
// }
// sayHello();
// sayHello("Jane");
// //전역변수와 지역변수는 분리되어 있음

// function sayHello(name) {
//   let newName = name || "friend"; //없으면 friend, 있으면 name
//   let msg = `Hello, ${newName}`;
//   console.log(msg);
// }
// sayHello();
// sayHello("Mike");
// sayHello("Jane");

// function sayHello(name = "friend") {
//   //name 값이 없을 때 디폴트로 friend할당됨
//   let msg = `Hello, ${name}`;
//   console.log(msg);
// }
// sayHello();
// sayHello("Mike");
// sayHello("Jane");

// function add(num1, num2) {
//   return num1 + num2;
//   //함수에 return이 없으면 undefined를 반환함, return이 있으면 함수를 종료함
// }
// const result = add(2, 3);
// console.log("🚀 ~ result:", result);

//---------------------------------  11. 함수표현식, 화살표함수  --------------------------------
// showError();
// let showError = function () {
//   console.log("error");
// }; //함수표현식, 표현식 이전 함수사용은 에러

// function showError() {
//   console.log("error");
// } //함수 선언문은 실행 가능

// let showError = () => console.log("error"); //화살표함수

// const sayHello = function (name) {
//   const msg = `Hello, ${name}`;
//   console.log(msg);
// };
//위 표현식을 화살표 함수로 만들기
// const sayHello = (name) => {
//   const msg = `Hello, ${name}`;
//   console.log(msg);
// };
// sayHello("Jane");

// const add = function (num1, num2) {
//     const result = num1 + num2;
//     return result;
// }

// const add = (num1, num2) => num1 + num2;
// console.log(add(3, 5));

//---------------------------------  12. 객체(Object)  --------------------------------
// const superman = {
//   name: "clark",
//   age: 30,
// };
// console.log(superman.name);
// console.log(superman["age"]);
// console.log(superman);

// superman.hairColor = "black";
// superman["hobby"] = "football";
// console.log(superman);
// delete superman.age;
// console.log(superman);

//이름과 나이를 받아서 객체를 반환하는 함수
// function makeObject(name, age) {
//   return {
//     name, //name: name, 동이하기 때문에 축약가능
//     age, //age: age,
//     hobby: "football",
//   };
// }

// const Mike = makeObject("Mike", 30);
// console.log(Mike);

// console.log("age" in Mike);
// console.log("birthday" in Mike);

// function IsAdult(user) {
//   if (
//     !("age" in user) || //user에 age가 없거나
//     user.age < 20
//   ) {
//     //20살 미만이거나
//     return false;
//   }
//   return true;
// }
// const Mike = {
//   name: "Mike",
//   age: 30,
// };
// const Jane = {
//   name: "Jane",
// };
// console.log(IsAdult(Mike));
// // function IsAdult(user) {
// //   if (user.age < 20) {
// //     return false;
// //   }
// //   return true;
// // }
// // console.log(IsAdult(Jane)); //user.age 가 undefined - false - true반환
// console.log(IsAdult(Jane));

// var x;
// const Mike = {
//   name: "Mike",
//   age: 30,
// };
// for (x in Mike) {
//   console.log(x);
// }

// for (x in Mike) {
//   console.log(Mike[x]);
// }
// for (x in Mike) {
//   console.log(Mike.x);
// } //. 연산자는 키값을 직접 입력해줘야 함.(????)

//---------------------------------  13. 객체(Object)~method, this   --------------------------------
// let boy = {
//   name: "Mike",
//   showName: function () {
//     console.log(this.name); // console.log(boy.name);
//   },
// };
// boy.showName();
// let man = boy; // man boy둘다로 접근 가능함
// man.name = "Tom";
// console.log(boy.name); //man이름 바꾸니 boy도 이름 바뀜
// man.showName();
// boy = null;

// man.showName(); //boy 가 null이기 때문에 error!, 함수 내의 boy를 this 로 바꿔줘야 한다.(????)

//---------------------------------  14. 배열 array   --------------------------------
let days = ["mon", "tue", "wed"];
console.log(days[1]);
days[1] = "B";
console.log("🚀 ~ days[1]:", days[1]);
console.log(days.length);
days.push("AB");
console.log("🚀 ~ days:", days);
days.unshift("FFF");
console.log("🚀 ~ days:", days);

for (let i = 0; i < days.length; i++) {
  console.log(days[i]);
}

for (let day of days) {
  console.log(day);
}
