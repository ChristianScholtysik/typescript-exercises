console.log("Welcome :)");

//! Intro-TS-Level-1_12

let dogName = "Leon";
console.log(dogName);

dogName = "elf";

// let isDogNice = true;

// isDogNice = "elf";

let isDogNice: boolean = true;

// let seventeen;

let seventeen = 17;

const sum = seventeen + 44;
console.log(sum);

//! Intro-TS-Level-1_13

// Addition
let addition_operator: number = 1 + 1;
console.log("addition: " + addition_operator);

// Subtraktion
let subtraktion_operator: number = 2 - 1;
console.log("subtraktion: " + subtraktion_operator);

// Multiplikation
let multiplication_operator: number = 2 * 2;
console.log("multiplication: " + multiplication_operator);

// Division
let division_operator: number = 4 / 2;
console.log("division: " + division_operator);

// Modulo: zeigt an, was der Rest sein würde.
let modulo_operator: number = 14 % 5;
console.log("modulus: " + modulo_operator);

// ! Intro-TS-Level-1_8
let x: number = 20;
let y: number = 30;

let ergebnis1 = x + y;

console.log(ergebnis1);

let ergebnis2 = x - y;
console.log(ergebnis2);

let ergebnis3 = x * y;
console.log(ergebnis3);

let ergebnis4 = x / y;
console.log(ergebnis4);

let z: number = 10;

let resultOne = ergebnis3 / z;
console.log(resultOne);

let a = 15;
let b = 9;
let sum2 = 15 % 9;
console.log(sum2);

let c = 20;
let resultTwo = (a + b) * c;
console.log(resultTwo);

let resultThree = a - b;
console.log(resultThree);

let resultFour = resultOne % resultTwo;
console.log(resultFour);

//! Intro-TS-Level-1_16

let score1: number = 5 + 5 * 10;
console.log("Ergebnis: " + score1);

let score2 = (5 + 5) * 10;
console.log("Ergebnis: " + score2);

let score3 = 0;
score3 = score3 + 10;
console.log("Ergebnis: " + score3);

// score += 10;
// console.log("Ergebnis: " + score);

let zahl = 1;
zahl = zahl + 1;
zahl += 1;

zahl++;
console.log("increment: " + zahl);

zahl--;
console.log("dekrement: " + zahl);
