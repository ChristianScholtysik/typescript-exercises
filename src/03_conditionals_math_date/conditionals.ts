const randomErrorNumber: number = Math.ceil(Math.random() * 10);

console.log("If/else: ");
if (randomErrorNumber === 1) {
  console.log("Schwerer Fehler");
} else if (randomErrorNumber === 2) {
  console.log("Mittlerer Fehler");
} else if (randomErrorNumber === 3) {
  console.log("leichter Fehler");
} else {
  console.log("Alles top");
}

console.log("Switch:");
switch (randomErrorNumber) {
  case 1:
    console.log("Schwerer Fehler");
    break;
  case 2:
    console.log("Mittlerer Fehler");
    break;
  case 3:
    console.log("leichter Fehler");
    break;
  default:
    console.log("Alles top");
    break;
}

// const fruitVegetable = window.prompt("Gib mir ein Obst oder Gemüse");

// if (
//   fruitVegetable === "Banane" ||
//   fruitVegetable === "Apfel" ||
//   fruitVegetable === "Birne"
// ) {
//   console.log("Das ist eine Frucht");
// } else if (
//   fruitVegetable === "Blumenkohl" ||
//   fruitVegetable === "Karotte" ||
//   fruitVegetable === "Sellerie"
// ) {
//   console.log("Das ist ein Gemüse");
// } else {
//   console.log("Keine Ahnung, was das ist");
// }

// switch (fruitVegetable) {
//   case "Banane":
//   case "Apfel":
//   case "Birne":
//     console.log("Das ist eine Frucht");
//     break;
//   case "Blumenkohl":
//   case "Karotte":
//   case "Sellerie":
//     console.log("Das ist ein Gemüse");
//     break;

//   default:
//     console.log("Keine Ahnung, was das ist");

//     break;
// }

if (randomErrorNumber < 5) {
  console.log("Kein Fehler");
} else if (randomErrorNumber < 8) {
  console.log("Warnung");
} else {
  console.log("Fehler");
}

// * nicht unbedingt zu empfehlen
switch (true) {
  case randomErrorNumber < 5:
    console.log("Kein Fehler");
    break;
  case randomErrorNumber < 8:
    console.log("Warnung");
    break;
  default:
    console.log("Fehler");
    break;
}

//* ternary expression
console.clear;
// const isOnline: boolean = true;
const isOnline: boolean = Math.random() <= 0.5;
const message: string = isOnline ? "user ist online" : "user ist offline";

console.log({ message });
