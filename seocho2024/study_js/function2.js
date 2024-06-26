export const f2 =
  (f) =>
  (...args) =>
    console.log(f.name, f(...args));
//currying
