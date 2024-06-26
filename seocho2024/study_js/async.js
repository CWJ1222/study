//https://jsonplaceholder.typicode.com
//user 이름을 구하는 함수

const URL = "https://jsonplaceholder.typicode.com";

const getUserName = async (userId) => {
  const res = await fetch(`${URL}/users/${userId}`);
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("OK"), 2000);
  });
  const data = await res.json();

  return data?.name;
};
// //console.log("🚀 ~ getUserName ~ data:", data);
// //console.log("🚀 ~ getUserName ~ res:", res);
console.log("1번 유저명은:", await getUserName(1));
