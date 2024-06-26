const weeks = ["일", "월", "화", "수", "목", "금", "토"];
// let widx = -1;
// const getNextWeek = () => {
//   widx += 1; // side-effect!
//   if (widx >= weeks.length) widx = 0;
//   return `${weeks[widx]}요일`;
// };
let widx = -1;
const getNextWeek = (() => {
  let idx = widx;
  return () => {
    idx += 1;
    if (idx >= weeks.length) idx = 0;
    return `${weeks[idx]}요일`;
  };
})();
let cnt = 0;
const intl = setInterval(() => {
  console.log("call", cnt, getNextWeek());
  if ((cnt += 1) === 8) clearInterval(intl);
}, 300);
