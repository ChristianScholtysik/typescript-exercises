for (let index: number = 0; index < 10; index++) {
  console.log("Hello World");
}

for (let index: number = 12; index < 24; index++) {
  console.log(index);
}

for (let index: number = 0; index < 20; index = index + 2) {
  console.log("+2: ", index);
}

for (let index: number = 1; index < 20; index = index + 2) {
  console.log("ungerade Zahlen", index);
}

for (let index: number = 20; index >= 0; index--) {
  console.log("minus:", index);
}
//? allle Zahlen bis 30 die durch 3 teilbar sind
for (let index = 0; index <= 30; index++) {
  if (index % 3 === 0) {
    console.log("durch 3 teilbar:", index);
  }
}

//? alle Zahlen von 1 bis 30 sollen aufeinander aufaddiert werden

let sumOfNumbersTo30: number = 0;
for (let index = 1; index <= 30; index++) {
  sumOfNumbersTo30 += index;
  console.log(sumOfNumbersTo30);
}
console.log("Gesamtsumme: ", sumOfNumbersTo30);

//? einen string mit for durchlaufen und Buchstaben verdoppeln

let text2 = "Das ist ein längerer Text";
let doubledText2 = "";
for (let index = 0; index < text2.length; index++) {
  doubledText2 += text2[index] + text2[index];
  console.log(doubledText2);
}

//? Array durchlaufen - lieber Array.forEach verwenden

const numbersToEleven = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

for (let index = 0; index < numbersToEleven.length; index++) {
  const element = numbersToEleven[index];
  console.log(element);
}

//? Array befpllen lassen
const numbersTo12: number[] = [];
for (let index = 1; index <= 12; index++) {
  numbersTo12.push(index);
}
console.log(numbersTo12);

//? while schleife

let counterForWhile = 0;
while (counterForWhile < 10) {
  console.log("Hello World from while");
  counterForWhile++;
}

let userInput = "";

while (userInput !== "STOP") {
  userInput = window.prompt("Bitte gib einen Text ein") ?? "";
}

//? dowhile schleife
let specialCounter = 5;
do {
  console.log("Hello from do while");
} while (specialCounter < 5);

//? forof
const meals: string[] = ["pizza", "pommes", "döner", "sushi"];
for (const meal of meals) {
  console.log(meal);
}

meals.forEach((meal: string) => {
  console.log(meal);
});
