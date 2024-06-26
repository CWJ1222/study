// ---------------- class
interface Animal {
  move(): void;
  // move: () => void;
}

class Pet implements Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  move(): void {
    console.log("Pet is moving!!");
  }
}

class Dog extends Pet {
  bark() {
    console.log("멍멍!", this.name);
  }
  howling() {
    console.log("아~오~", this.name);
  }
}
class Cat extends Pet {
  kukuki() {
    console.log("꾹!꾹!");
  }
  bark() {
    console.log("야옹!", this.name);
  }
}

const lucy = new Dog("Lucy");
lucy.bark();
const maxx = new Dog("Max");
maxx.howling();

const happy = new Cat("Happy");
happy.bark();
happy.kukuki();
