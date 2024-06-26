const hong = { id: 1, name: "Hong" };
const choi = { id: 5, name: "Choi" };

const kim = { id: 2, name: "kim" };
const lee = { id: 3, name: "Lee" };
const park = { id: 4, name: "Park" };

const users = [kim, lee, park];

function addUser(user) {
  return [...users, user];
}

function removeUser(user) {
  return users.filter((u) => u.id !== user.id);
}

function changeUser(oldUser, newUser) {
  return users.map((u) => (u.id === oldUser.id ? newUser : u));
}

A = addUser(hong); //[kim, lee, park, hong]
console.log("🚀 ~ A:", A);
B = removeUser(lee); //[kim, park]
console.log("🚀 ~ B:", B);
C = changeUser(kim, choi); //[choi, lee, park]
console.log("🚀 ~ C:", C);
