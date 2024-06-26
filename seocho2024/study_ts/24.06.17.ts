abstract class School {
  readonly name: string;

  constructor(name: string) {
    // 구현부
    this.name = name; // readonly 생성자에서만 수정 가능
  }

  abstract getStudentTypes(): string[]; // 정의
} // School 클래스와 getStudentTypes 메서드는 abstract로 표시됨

// class Preschool extends School {
//   getStudentTypes(): string[] {
//     return ["preshooler"];
//   }
// }
// class Absence extends School {} // 하위 클래스인 Preschool과 Absence는 getStudentTypes를 구현해야 함.
