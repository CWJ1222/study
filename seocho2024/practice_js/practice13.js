// 어떤 함수를 호출하기 전에 before() 함수를, 호출 후에 after() 함수를
// 항상 실행하는 template() 함수를 만드시오.

// const before = () => console.log("before....");
// const after = () => console.log("after...");
// const someFn = () => console.log("do something...1");
// const template = (fn) => {
//   return () => {
//     before();
//     fn();
//     after();
//   };
// };

// const temp = template(someFn);
// temp();

const before = () => console.log("before....");
const after = () => console.log("after...");
const someFn = (name, greeting) => console.log(`${greeting}, ${name}`);
const template = (fn) => {
  return (...args) => {
    before();
    fn(...args);
    after();
  };
};

const temp = template(someFn);
temp("lnsol", "hello");
