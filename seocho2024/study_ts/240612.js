var SIZE = [
    { id: "XS", price: 8000 },
    { id: "S", price: 10000 },
    { id: "M", price: 12000 },
    { id: "L", price: 14000 },
    { id: "XL", price: 15000 },
];
var sizeOption = { XS: 1, S: 5, M: 2, L: 2, XL: 4 };
var total = 0;
Object.entries(sizeOption).forEach(function (_a) {
    var size = _a[0], quantity = _a[1];
    var sizeInfo = SIZE.find(function (s) { return s.id === size; });
    if (sizeInfo) {
        total += sizeInfo.price * quantity;
    }
});
console.log("\uCD1D \uAE08\uC561: ".concat(total, "\uC6D0"));
