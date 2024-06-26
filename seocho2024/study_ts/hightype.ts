// interface User {
//   id: number;
//   name: string;
// }

// interface Dept {
//   id: number;
//   dname: string;
//   captain: string;
// }
// interface Ud2 {
//   //   <이 부분을 작성하시오>
//   // [k: string]: string; //인덱스 시그니처 윗줄의 범위가 더 큼

//   [k: number]: string | number;
//   id: number;
//   addr: string;
// }

// 다음 코드가 오류가 없으면 통과!
// const ud3: Ud2 = { id: 1, dname: "HH", captain: "HH", addr: "Seoul" };
// const ud2: Ud2 = { id: 1, name: "HH", addr: "Seoul" };

// interface Animal { }
// class Pet implements Animal{

// }
// class Dog
