const { name: n, age = 30 } = { name: "Lee" }; // n = Lee, age = 30
console.log("🚀 ~ age:", age);
console.log("🚀 ~ n:", n);
const { age2 = 30 } = { name: "Park", age2: 20 }; // age2 = 20
console.log("🚀 ~ age2:", age2);

user = { id: 1, name: "P", age: 33 };
function fn({ age }) {
  return age;
}
const { age2: age3 = fn(user) } = { age22: 20 }; // age2 = 20, age3 = 33
console.log("🚀 ~ age3:", age3);
console.log("🚀 ~ age2:", age2);

const u3 = { id: 3, name: "kim", addr: { id: 1, city: "Seoul" } };
let {
  id: idd,
  addr: { id: aid },
} = u3; // idd=3, aid=?
console.log("🚀 ~ aid:", aid);
console.log("🚀 ~ idd:", idd);

const arr = [1, 2, [3, 4], [5, 6], { ax: 7, ay: 8 }, { ax: 9 }];
const [, x, [, y], z] = arr; // x = 2, y = 4, z = [5,6]
console.log("🚀 ~ z:", z);
console.log("🚀 ~ y:", y);
console.log("🚀 ~ x:", x);
obj = {
  id: 1,
  name: hong,
};
