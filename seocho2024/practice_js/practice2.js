for (let i = 1; i <= 10; i++) {
  console.log(i, Math.sqrt(i).toFixed(3));
}

for (let a = 1; a <= 15; a++) {
  if (!Number.isInteger(Math.sqrt(a))) {
    console.log(a, Math.sqrt(a).toFixed(3));
  }
}

let b = 1;
while (b <= 17) {
  console.log(b, Math.sqrt(b).toFixed(3));
  b++;
}
