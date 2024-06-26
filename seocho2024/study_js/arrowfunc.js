//변수 this설명 예시
const obj = {
  name: "ObjName",
  bark1() {
    console.log("1=", this.name);
    const self = this;
    setTimeout(function () {
      console.log("11=", self.name);
    }, 1000);
    console.log("xxxx");
  },

  bark2() {
    console.log("2=", this.name);
    setTimeout(() => {
      console.log("22=", this.name);
    }, 1000);
  },
};
obj.bark1();
console.log("obj.bark1=", obj.bark1());
obj.bark2();

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);
console.log(doubled);

const greet = (name) => `Hello, ${name}!`;
console.log(greet("Korea"));

// function() {console.log('11=', [self.name](http://self.name/));}
// () => {console.log('22=', [this.name](http://this.name/));}
