console.log("🚀 ~ r:", r);
var x, y;
x = y = 9; // x = 9, y = 9
var z = (y++, x + y); // z = 19
console.log("🚀 ~ z:", z);

x += y;
x %= y;
x &= y;
x ^= y; // x = x + y; x = x & y;
u = { id: 1, name: "hong", age: 29 }; // object
var { id, name, addr } = u; // let id = 1 ⇐ let id = user.id;
console.log("🚀 ~ u:", u);

var { id, ...info } = u; // id = 1, info = { name: 'hong', age: 29 }
console.log("🚀 ~ info:", info);

var id, name;
// {id, name} = u; // Error!(why?) ⇒⇒⇒ ({id, name} = u); // OK!
var arr = [1, 2, 3, 4, 5];
var [a, b, ...c] = arr; // let a = arr[0], b = arr[1]
console.log("🚀 ~ b:", b);
console.log("🚀 ~ a:", a);
console.log("🚀 ~ c:", c);
console.log("arr[0]:", arr[0]);

//var [a, b] = [1, 2];
var [a, b] = [b, a]; // 스왑
console.log("🚀 ~ a:", a);

console.log("----------------------------------");

var [a, b, c = 3] = [1, 2];
console.log("🚀 ~ c:", c);
console.log("🚀 ~ a:", a);

var { id, name, addr = "Seoul" } = { id: 1, name: "Hong", addr: "Pusan" };
console.log("🚀 ~ addr:", addr);
console.log("🚀 ~ name:", name);
console.log("🚀 ~ id:", id);
console.log("----------------------------------");

var user = { id: 6, name: "Hong", addr: { city: "Seoul" } };
console.log("user.id: ", user.id);
console.log("user.addr: ", user.addr);
console.log("user.addr.city: ", user.addr.city);

var { id: userId1, name: userName1 } = user;
console.log("userId: ", userId1, "userName: ", userName1);
var { id, addr } = user;
var { city } = addr;
console.log("🚀 ~ city:", city);
var {
  id,
  addr: { city },
} = user;
var {
  id,
  addr: { city: addrCity },
} = user; // addrCity = ? Seoul
console.log("🚀 ~ addrCity:", addrCity);

var arr = [1, 2, 3, 4, 5]; // {0: 1, 1: 2, …}
var { 1: x1, 3: x2 } = arr; // x1 = 2, x2 = ? 4
console.log("🚀 ~ x2:", x2);
console.log("🚀 ~ x1:", x1);

var mainField = user.id > 5 ? "name" : "addr"; // {addr: target
console.log("🚀 ~ user.id:", user.id);
console.log("🚀 ~ mainField:", mainField);

var { [mainField]: target } = user; // target = { city: 'Seoul' }
console.log("🚀 ~ target:", target);

var { addr: ttt } = user; //; ⇐ 가능!
console.log("🚀 ~ ttt:", ttt);
var { id, name: Kim } = user;
console.log("🚀 ~ Kim:", Kim);

//target = 'Kim'; // Uncaught TypeError: Assignment to varant variable.

//var { name: target } = user; // ONLY Browser Console Available!! ('이미 선언되었어요!')

console.log("----------------------------------");
var [a, b] = [1, 2];
var c, d;
[c, d] = [1, 2];
var [, , d] = [1, 2, 3]; // d = ?
console.log("🚀 ~ d:", d);

var [, x, , y, , z] = [1, 2, 3, 4, 5, 6]; // x = arr[1]; y = arr[3] …
console.log("🚀 ~ z:", z);
console.log("🚀 ~ y:", y);
console.log("🚀 ~ x:", x);

console.log("no semi-colon");
var [f, g] = [1, 2];
console.log("🚀 ~ f:", f);
var [x, y] = [y, x];
console.log("🚀 ~ y:", y);

var users = [
  { id: 1, name: "Hong" },
  { id: 2, name: "Kim" },
  { id: 3, name: "Lee" },
];
var [, { id: usrId }] = users;
console.log("🚀 ~ usrId:", usrId);
console.log("----------------------------------");

var [user] = users; // user = ?
console.log("🚀 ~ user:", user);
var { id, name, addr = "Seoul" } = { id: 1, name: "Hong" }; // addr = ?
console.log("🚀 ~ addr:", addr);
var [a, b, c = 3] = [1, 2]; // a = ?, b = ?, c = ?
console.log("🚀 ~ c:", c);
console.log("🚀 ~ b:", b);
console.log("🚀 ~ a:", a);
var { id, name = "Hong" } = { id: 1, name: "" }; // id = ?, name = ?
console.log("🚀 ~ name:", name);
console.log("🚀 ~ id:", id);
var { id, name = "Hong" } = { id: 1, name: undefined }; // name = ?
console.log("🚀 ~ name:", name);
var [e, f, g = 3] = [1, 2, 0]; // e = ?, f = ?, g = ?
console.log("🚀 ~ g:", g);
console.log("🚀 ~ f:", f);
console.log("🚀 ~ e:", e);

var obj = { i: 1, j: 2, l: 3, m: 4, n: 5 };
var { j, i, k = i * j } = obj; // j = ?, i = ?, k = ?
console.log("🚀 ~ k:", k);
console.log("🚀 ~ i:", i);
console.log("🚀 ~ j:", j);
var { k = i * 10, i, j } = obj; // k = ?
console.log("🚀 ~ k:", k);
var q, s, r;
({ r = q * 10, q, s } = { q: 10, s: 20 }); // q = ?, s = ?, r = ?
console.log("🚀 ~ s:", s);
console.log("🚀 ~ q:", q);
console.log("🚀 ~ r:", r);

var arr = [1, 2, 3, 4, 5];
var [aa1, aa2, ...rest] = arr; // a1 = ?, a2 = ?, rest = ?
console.log("🚀 ~ rest:", rest);
console.log("🚀 ~ aa2:", aa2);
console.log("🚀 ~ aa1:", aa1);

console.log("----------------------------------");
console.log("----------------------------------");

var user = { id: 1, name: "Hong", addr: { city: "Seoul" } };
function fn(arg1, { id, name }, arg2) {
  console.log(arg1, id, name, arg2);
}
fn(10, user, 20);
