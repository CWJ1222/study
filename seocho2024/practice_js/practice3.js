const today = new Date();

switch ((G = today.getDay())) {
  case 0:
    console.log("Sun");
    break;

  case 1:
    console.log("Mon");
    break;

  case 2:
    console.log("Tue");
    break;

  case 3:
    console.log("Wed");
    break;

  case 4:
    console.log("Thu");
    break;

  case 5:
    console.log("Fri");
    break;

  case 6:
    console.log("Sat");
    break;
}

G === 0
  ? console.log("Sun")
  : G === 1
  ? console.log("Mon")
  : G === 2
  ? console.log("Tue")
  : G === 3
  ? console.log("Wed")
  : G === 4
  ? console.log("Thu")
  : G === 5
  ? console.log("Fri")
  : console.log("Sat");

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
console.log("오늘은", days[G]);

function ff(day) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return days[day];
}
console.log(ff(G));
