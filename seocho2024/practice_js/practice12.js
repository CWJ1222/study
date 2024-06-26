// const dog = {
//   name: "Max",
//   showMyName() {
//     console.log(`My name is ${this.name}.`);
//   },
//   whatsYourName() {
//     setTimeout(this.showMyName, 1000);
//   },
// };
// dog.whatsYourName();

const dog = {
  name: "Max",
  showMyName() {
    console.log(`My name is ${this.name}.`);
  },
  whatsYourName() {
    setTimeout(() => this.showMyName(), 1000);
  },
};
dog.whatsYourName();
