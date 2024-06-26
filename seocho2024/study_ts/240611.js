var _a;
var member = {
    name: "홍길동",
    addr: "용산구",
    discountRate: 0.1,
};
var guest = {
    name: "김길동",
    age: 28,
};
var who = Math.random() > 0.5 ? member : guest; // who는 멤버나 게스트 다됨
who.name = "마길동";
// const price = 10000 - 10000 * who.discountRate; 한쪽에만 있어서 오류
// if ('discountRate' in who)
//     console.log(who.discountRate);
// 타입내로잉
if ("addr" in who)
    console.log(who.discountRate);
var xarr = Math.random() > 0.5 ? 1 : [1, 2];
if (Array.isArray(xarr))
    console.log(xarr.length);
var gildong = Math.random() > 0.5 && "HongGilDong";
if (gildong) {
    gildong.toUpperCase(); // string
}
else {
    gildong; // false | string
}
var a;
// a = undefined;
console.log(a === null || a === void 0 ? void 0 : a.length);
var users = [
    { id: 1, name: "Hong" },
    { id: 2, name: "Kim" },
];
console.log((_a = users.find(function (user) { return user.id === 2; })) === null || _a === void 0 ? void 0 : _a["id"]);
