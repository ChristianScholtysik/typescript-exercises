console.clear();

//! Math-TS-Level-1_1
const pi: number = Math.PI;
console.log(pi);

const piRounded: number = Math.round(pi);
console.log({ piRounded });

//!Math-TS-Level-1_3

let randomNum = Math.random();
console.log(randomNum);

let randomNum1_10 = Math.random() * 10;
console.log(Math.floor(randomNum1_10));

let randomNum1_100 = Math.random() * 100;
console.log(Math.floor(randomNum1_100));

//! Math-TS-Level-2_2

const randomNumGame = Math.floor(Math.random() * 10);
console.log(randomNumGame);

const userInputGame = window.prompt(" Insert a  number from 1-10");
const userInputGameNumber: number = Number(userInputGame);

// if (userInputGameNumber === randomNumGame) {
//   console.log("Du bist der Beste");
// } else {
//   console.log("Versuche es noch einmal. Die Zahl lautet: ", randomNumGame);
// }

const userGuess = document.getElementById("ergebnis");
if (userGuess)
  if (userInputGameNumber === randomNumGame) {
    userGuess.innerHTML = "Du bist der Beste!!!";
    userGuess.style.color = "red";
    userGuess.style.fontSize = "7rem";
  } else {
    userGuess.innerHTML =
      "Versuche es noch einmal. Die Zahl lautet:" + randomNumGame;
  }
