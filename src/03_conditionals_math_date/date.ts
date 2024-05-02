import { differenceInYears } from "date-fns";

console.clear();

const today = new Date();
console.log({ today });

const startDate = new Date(0);
console.log({ startDate });

const birthday = new Date("1943-10-20");
console.log({ birthday });

//?Monate beginnen bei 0 mit der Zählung Mai= 4
const susisBrithday = new Date(2024, 11, 21, 13, 45);
console.log({ susisBrithday });
console.log(susisBrithday.toLocaleString());
console.log(susisBrithday.toLocaleString("en-GB"));
console.log(susisBrithday.toLocaleString("en-US"));
console.log(susisBrithday.toLocaleString("de-DE", { timeZone: "UTC" }));

console.log("Birthday day: ", birthday.getDay());
console.log("Birthday date: ", birthday.getDate()); //Tag der Woche
console.log("Birthday month: ", birthday.getMonth()); //Zählung beginnt bei 0
console.log("Birthday year: ", birthday.getFullYear());

birthday.setHours(2);
console.log(" Birthday start date 2 hours: ", birthday);

//*date-fns
const age = differenceInYears(new Date(), birthday);
console.log({ age });
