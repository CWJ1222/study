function addPoints(a, b) {
  var decimalPlace = Math.max(
    (a.toString().split(".")[1] || []).length,
    (b.toString().split(".")[1] || []).length
  );
  return parseFloat((a + b).toFixed(decimalPlace));
}
console.log(addPoints(0.21354, 0.1));

function add(c, d) {
  C = c.toString().split(".")[1].length;
  D = d.toString().split(".")[1].length;
  E = C > D ? C : D;
  return parseFloat((c + d).toFixed(E));
}
console.log(add(0.222, 0.12222));
