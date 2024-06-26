//var moment = require("moment");
import moment from "moment"; //ESM방식
// moment.locale("ko");

const d = new Date();
console.log("🚀 ~ d:", d);
const m = moment();
console.log("🚀 ~ m:", m.format("LLL"));
console.log("🚀 ~ m:", m.format("dddd"));

const writtenDate = moment("2024-04-30");
console.log("🚀 ~ writtenDate:", writtenDate.fromNow());
