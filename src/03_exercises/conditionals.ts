console.clear();
//! Intro-TS-Level-1_15

let num = 5;
let anotherNum = 8;

console.log(num == anotherNum);
console.log(num === anotherNum);
console.log(num > anotherNum);
console.log(num < anotherNum);
console.log(num >= anotherNum);
console.log(num <= anotherNum);
console.log(num == "5");
console.log(num != 8);
console.log(num != "5");

//!Conditionals-TS-Level-2_1

let johnAge = 22;
let johnHeight = 170;
let johnScore = johnAge * 5 + johnHeight;
console.log({ johnScore });

let meikeAge = 34;
let meikeHeight = 168;
let meikeScore = meikeAge * 5 + meikeHeight;
console.log({ meikeScore });

if (johnScore < meikeScore) {
  console.log(`Meike gewinnt das Spiel mit ${meikeScore} Punkten`);
} else {
  console.log(`John gewinnt das Spiel mit ${johnScore} Punkten`);
}

//! Conditionals-TS-Level-2_3

// let number = 35;
// let number = 74;
let number = 123;
let numDiff = number - 27;
if (number > 27) {
  console.log(numDiff * 2);
}

//! Conditionals-TS-Level-2_4

let randomNum1 = Math.random() * 77;
let randomNum2 = Math.random() * 77;

if (randomNum1 > randomNum2) {
  console.log("Erste Zahl größer");
} else {
  console.log("Zweite Zahl größer");
}

//switch

switch (true) {
  case randomNum1 > randomNum2:
    console.log("Switch: Erste Zahl größer");
    break;

  default:
    console.log("Switch:Zweite Zahl größer");
    true;
    break;
}

//! Conditionals-TS-Level-1_5

// const userInput = window.prompt("Please insert a number from 1 to 7");
// let weekdayAsString;
// let weekdayAsNumber: number = Number(userInput);
// console.log({ weekdayAsNumber });

// switch (weekdayAsNumber) {
//   case (weekdayAsNumber = 1):
//     weekdayAsString = "Montag";
//     break;
//   case (weekdayAsNumber = 2):
//     weekdayAsString = "Dienstag";
//     break;
//   case (weekdayAsNumber = 3):
//     weekdayAsString = "Mittwoch";
//     break;
//   case (weekdayAsNumber = 4):
//     weekdayAsString = "Donnerstag";
//     break;
//   case (weekdayAsNumber = 5):
//     weekdayAsString = "Freitag";
//     break;
//   case (weekdayAsNumber = 6):
//     weekdayAsString = "Samstag";
//     break;
//   case (weekdayAsNumber = 7):
//     weekdayAsString = "Sonntag";
//     break;
//   default:
//     weekdayAsString = "Weekday must be between 1 and 7";
//     break;
// }
// console.log({ weekdayAsString });

//!Conditionals-TS-Level-2_8

let schoolGrade = Math.round(Math.random() * 10);

switch (schoolGrade) {
  case (schoolGrade = 1):
    console.log("sehr gut");
    break;
  case (schoolGrade = 2):
    console.log("gut");
    break;
  case (schoolGrade = 3):
    console.log("befriedigend");
    break;
  case (schoolGrade = 4):
    console.log("ausreichend");
    break;
  case (schoolGrade = 5):
    console.log("mangelhaft");
    break;
  case (schoolGrade = 6):
    console.log("ungenügend");
    break;
  case (schoolGrade = 7):
    console.log("Das ist keine gültige Schulnote.");
    break;
  case (schoolGrade = 8):
    console.log("Das ist keine gültige Schulnote.");
    break;
  case (schoolGrade = 9):
    console.log("Das ist keine gültige Schulnote.");
    break;
  case (schoolGrade = 10):
    console.log("Das ist keine gültige Schulnote.");
    break;
  default:
    break;
}

//! Conditionals-TS-Level-3_1

let salesMonth: number = Math.round(Math.random() * 12);

switch (salesMonth) {
  case (salesMonth = 1):
  case (salesMonth = 2):
  case (salesMonth = 3):
    console.log("1.Quartal");
    break;
  case (salesMonth = 4):
  case (salesMonth = 5):
  case (salesMonth = 6):
    console.log("2.Quartal");
    break;
  case (salesMonth = 7):
  case (salesMonth = 8):
  case (salesMonth = 9):
    console.log("3.Quartal");
    break;
  case (salesMonth = 10):
  case (salesMonth = 11):
  case (salesMonth = 12):
    console.log("4.Quartal");
    break;
  default:
    break;
}

//
let min: number = 1000;
let max: number = 10000;
let totalSales: number = Math.round(Math.random() * (max - min) + min);
console.log({ totalSales });
let sales: string;

switch (true) {
  case totalSales <= 2500:
    console.log("schlecht");
    sales = "schlecht";
    console.log(`im ${salesMonth}.Quartal war der Umsatz ${sales}`);
    break;
  case totalSales >= 2501 && totalSales <= 5000:
    console.log("mittelmäßig");
    sales = "mittelmäßig";
    console.log(`im ${salesMonth}.Quartal war der Umsatz ${sales}`);
    break;
  case totalSales >= 5001 && totalSales <= 7500:
    console.log("gut");
    sales = "gut";
    console.log(`im ${salesMonth}.Quartal war der Umsatz ${sales}`);
    break;
  case totalSales >= 7501 && totalSales <= 10000:
    console.log("unglaublich");
    sales = "unglaublich";
    console.log(`im ${salesMonth}.Quartal war der Umsatz ${sales}`);
    break;

  default:
    true;
    break;
}

//! Ternary-Operator-TS-Level-2_2

const isOnline2: boolean = Math.random() <= 0.5;
const consoleMessage = isOnline2
  ? console.log("online")
  : console.log("offline");

let monthlyFee: number;
const premiumUser: boolean = Math.random() <= 0.5;
const premiumMessage = premiumUser
  ? (monthlyFee = 19.99)
  : (monthlyFee = 12.99);
console.log({ premiumMessage });

const isAdult: boolean = Math.random() <= 0.5;
const adultMessage = isAdult
  ? window.confirm("Willkommen")
  : window.alert("Keine Berechtigung");

//
let randomAge = Math.round(Math.random() * 120);
let randomSalary = Math.round(Math.random() * 15000);

const isMiddleAged = randomAge >= 40 && randomAge <= 65 ? true : false;
console.log({ isMiddleAged });

const mySalary =
  randomSalary > 10000
    ? console.log("You are rich")
    : randomSalary > 1500
    ? console.log("Not too bad")
    : console.log("Not that much");
