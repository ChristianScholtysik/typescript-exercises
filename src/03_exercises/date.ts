import { differenceInYears } from "date-fns/differenceInYears";

console.clear();

//! Date-TS-Level-1_1

const date1 = new Date("September 2, 2019 09:00:00");
const date2 = new Date(0);
const date3 = new Date(31556908800);
const date4 = new Date(86400000);

// console.log(date1);
// console.log(date2);
// console.log(date3);
// console.log(date4);

const dateExercise = document.getElementById("date1");

if (dateExercise) {
  dateExercise.innerHTML = date1.toString();
}

const dateExercise2 = document.getElementById("date2");

if (dateExercise2) {
  dateExercise2.innerHTML = date2.toString();
}

const dateExercise3 = document.getElementById("date3");

if (dateExercise3) {
  dateExercise3.innerHTML = date3.toString();
}

const dateExercise4 = document.getElementById("date4");

if (dateExercise4) {
  dateExercise4.innerHTML = date4.toString();
}

//! Date-TS-Level-2_1
let dateNow = new Date();
dateNow = new Date(
  dateNow.getFullYear(),
  dateNow.getMonth(),
  dateNow.getDate(),
  dateNow.getHours(),
  dateNow.getMinutes()
);
console.log(dateNow.toLocaleString("en-GB"));
console.log(dateNow.toLocaleString("en-US"));

let dateElement = document.getElementById("dateLevel1");
if (dateElement) {
  dateElement.innerHTML = dateNow.toLocaleString("de-DE");
}

let dateElement2 = document.getElementById("dateLevel2");
if (dateElement2) {
  dateElement2.innerHTML = dateNow.toLocaleString("en-GB");
}

//
let stunden = dateNow.getHours();
let minuten = dateNow.getMinutes();
let uhrzeit = `${stunden}:${minuten} Uhr`;

let dateNow2 = new Date("en-US");
let stunden2 = dateNow2.getHours();
let minuten2 = dateNow2.getMinutes();
let uhrzeit2 = `${stunden2}:${minuten2} Uhr`;

console.log(uhrzeit);
console.log(stunden + ":" + minuten, "Uhr");

let timeElement = document.getElementById("time1");
if (timeElement)
  //   timeElement.innerHTML = dateNow.toLocaleString("en-US", { timeZone: "UTC" });

  timeElement.innerHTML = uhrzeit2;

let timeElement2 = document.getElementById("time2");
if (timeElement2) timeElement2.innerHTML = uhrzeit;

//! Date-TS-Level-3_2

const dateSeventy = new Date("01.01.1970");
const dateTwentyFour = new Date();

const date70 = differenceInYears(dateTwentyFour, dateSeventy);
console.log({ date70 });

const myBirthday = new Date("1987-10-22");
const pastDate = new Date("2007-04-07");
const diffBirth = differenceInYears(dateTwentyFour, myBirthday);
console.log({ diffBirth });

const pastDiff = differenceInYears(pastDate, myBirthday);
console.log({ pastDiff });
