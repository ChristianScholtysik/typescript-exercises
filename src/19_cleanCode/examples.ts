export {};

// * Example 1
type PeriodActive = {
  start: number;
  end: number | string;
  extra?: number;
};

type Singer = {
  name: string;
  country: string;
  period_active: PeriodActive;
  genre: string;
};

const singers: Singer[] = [
  {
    name: "The Beatles",
    country: "United Kingdom",
    period_active: { start: 1960, end: 1970 },
    genre: "Rock / Pop",
  },
  {
    name: "Elvis Presley",
    country: "United States",
    period_active: { start: 1954, end: 1977 },
    genre: "Rock and roll",
  },
  {
    name: "Michael Jackson",
    country: "United States",
    period_active: { start: 1964, end: 2009 },
    genre: "Pop / Rock / Dance / Soul / R&B",
  },
  {
    name: "Elton John",
    country: "United Kingdom",
    period_active: { start: 1964, end: "present" },
    genre: "Pop / Rock",
  },
  {
    name: "Madonna",
    country: "United States",
    period_active: { start: 1979, end: "present" },
    genre: "Pop / Dance / Electronica",
  },
  {
    name: "Led Zeppelin",
    country: "United Kingdom",
    period_active: { start: 1968, end: 1980 },
    genre: "Hard rock / Blues rock / Folk rock",
  },
  {
    name: "Rihanna",
    country: "United States",
    period_active: { start: 2005, end: "present" },
    genre: "R&B / Pop / Dance / Hip-hop",
  },
  {
    name: "Pink Floyd",
    country: "United Kingdom",
    period_active: { start: 1965, end: 1996, extra: 2014 },
    genre: "Progressive rock / Psychedelic rock",
  },
];

const orderByName = [...singers].sort((a, b) => a.name.localeCompare(b.name));
console.log(orderByName);

const orderByStart = [...singers].sort(
  (a, b) => a.period_active.start - b.period_active.start
);
console.log(orderByStart);

// * Example 2
const zahlen: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenNum = zahlen.filter(filNum => {
//     if (filNum % 2 == 0) {
//         return filNum
//     }
// })

// const oddNum = zahlen.filter(filNum => {
//     if (filNum % 2 !== 0) {
//         return filNum
//     }
// })

// console.log(evenNum);
// console.log(oddNum);

function printEvenNumbers(arr: number[]) {
  return arr.filter((num) => num % 2 === 0);
}

function printOddNumbers(arr2: number[]) {
  return arr2.filter((num) => num % 2 !== 0);
}

console.log(printEvenNumbers(zahlen));
console.log(printOddNumbers(zahlen));

// * Example 3
let fahrenheit: number[] = [0, 32, 45, 50, 75, 80, 99, 120];

const changeFahrenheit = fahrenheit.map(
  (temperature: number, index: number) => {
    const celsius = (temperature - 32) / 1.8;
    return console.log(` ${index + 1}: ${Math.round(celsius)}`);
  }
);

console.log(changeFahrenheit);

// * Example 4
const heroArr: (string | null | undefined)[] = [
  "Superman",
  "Batman",
  undefined,
  undefined,
  "Wonder Woman",
  "Spider-Man",
  "Black Widow",
  "Iron Man",
  "Thor",
  "Catwoman",
  undefined,
  null,
];
console.log("Array vor der Bereinigung:", heroArr);

// * Example 5
function doWhileLoop() {
  // Initialisiere die Zählervariable
  let newCounter: number = 1;

  // Do...while-Schleife
  do {
    // Füge die Nummer dem HTML-Dokument hinzu
    if (document.getElementById("output")) {
      document.getElementById("output").innerHTML +=
        "The number is " + newCounter + "<br>";
    }
    // Erhöhe die Nummer um 1 für den nächsten Durchlauf
    newCounter++;
  } while (newCounter <= 5);
}

// Führe die Funktion aus
doWhileLoop();

// * Example 6
const numInput = document.querySelector("#number_input") as HTMLInputElement;
const bttn = document.querySelector("#loop_bttn");
let text = document.querySelector("p")!;

if (numInput && bttn && text) {
  bttn.addEventListener("click", (event: Event) => {
    let numInputVal = parseInt(numInput.value);
    event.preventDefault();
    for (let index = 1; index <= numInputVal; index++) {
      text.textContent = "L" + "o".repeat(index) + "p";
    }
  });
}
