function User(name, age) {
  this.name = name;
  this.age = age;
  this.sayName = function () {
    console.log(this.name);
  };
}
let user1 = new User("Mike", 30);
let user2 = new User("Jane", 22);
let user3 = new User("Tom", 17);
console.log("🚀 ~ user3:", user3);
let user5 = new User("Han", 40);
user5.sayName();

function Item(title, price) {
  this.title = title;
  this.price = price;
  this.showPrice = function () {
    console.log(`가격은 ${price} 입니다.`);
  };
}
const item1 = new Item("인형", 3000);
const item2 = new Item("가방", 4000);
const item3 = new Item("지갑", 9000);
console.log("🚀 ~ item1:", item1);
console.log("🚀 ~ item2:", item2);
console.log("🚀 ~ item3:", item3);

item3.showPrice();
