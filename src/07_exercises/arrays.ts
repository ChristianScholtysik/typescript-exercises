console.clear();
//! Array-TS-Iteration-Level-1_2 (map)

const drinks = [
  "Coca-Cola",
  "Apfelsaft",
  "Pepsi",
  "Traubensaft",
  "Sprite",
  "Orangensaft",
  "Red Bull Energy Drink",
  "Fanta",
];

// Nutze die map()-Methode, um in einer neuen Variable upperDrinks alle Getränke in Großbuchstaben zu speichern.
// Gib upperDrinks in der Konsole aus.
// Nutze die Map-Methode um für jedes Element auf der Konsole folgendes auszugeben:‘I like [drink]’

const upperDrinks = drinks.map((drink: string) => {
  return drink.toUpperCase();
});
console.log({ upperDrinks });

const iLikeDrinks = drinks.map((drink: string) => {
  return console.log(`I like ${drink}`);
});

//! Array-TS-Iteration-Level-1_4 (map)
// - Schreibe Code, der mit Hilfe von map() ein Array aus Temperaturen von Fahrenheit in Celsius umwandelt.
// - Verwende die [mathematische Formel](https://www.metric-conversions.org/de/temperatur/fahrenheit-in-celsius.htm) celsius = (℉ - 32) / 1.8 zur Umrechnung.
// - Verwende das Array aus dem Code-Snippet.
// - Überprüfe das Ergebnis in der Konsole.

let fahrenheit: number[] = [0, 32, 45, 50, 75, 80, 99, 120];

const changeFahrenheit = fahrenheit.map(
  (temperature: number, index: number) => {
    const celsius = (temperature - 32) / 1.8;
    return console.log(` ${index + 1}: ${Math.round(celsius)}`);
  }
);

//! Array-TS-Iteration-Level-1_5 (map)

// - Verwende die Variable checkNumber aus dem Code-Snippet
// - Nutze die Array-Methode map()
// - In der map-Methode soll Folgendes passieren:
//     - Überprüfe mit einem if-Statement, ob die Zahl durch 3 teilbar ist.
//     - Wenn ja: Addiere 100 zu dieser Zahl hinzu.
//     - Wenn nein: Lasse die Zahl so wie sie ist
//     - Gib das Ergebnis in der Konsole aus.
// - Gib das Ergebnis in der Konsole aus.
let checkNumber: number[] = [
  18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30,
  74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78,
];

const divideCheckNumber = checkNumber.map((num: number) => {
  if (num % 3 === 0) {
    num += 100;
  }
  return num;
});
console.log({ divideCheckNumber });

//! Array-TS-Iteration-Level-1_6 (map oder forEach)

// - Lernziel: Anwenden von TypeScript map() oder forEach(), um Dateiendungen zu verändern
// - Erstelle ein neues Array von Dateinamen auf Basis des gegebenen Arrays (siehe Code-Snippet).
// - Entferne die Dateiendungen (z.B. "image.jpg" => "image").
// - Falls keine Dateiendung vorhanden ist, soll statt dem Dateinamen der Wert "invalid" gespeichert werden (z.B. "dog" => "invalid").
// - Die Dateinamen sollen in Kleinbuchstaben gespeichert werden.
// - Es sollte entweder mit der map() oder forEach() Methode gearbeitet werden.

let album: string[] = [
  "holidays.jpg",
  "Restaurant.jpg",
  "desktop",
  "rooms.GIF",
  "DOGATBEACH.jpg",
];

const cutAlbum = album.map((fileName: string) => {
  const index = fileName.lastIndexOf(".");
  if (index !== -1) {
    return fileName.slice(0, index).toLowerCase();
  } else {
    return (fileName = "invalid");
  }
});
console.log(cutAlbum);

//!Array-TS-Iteration-Level-1_7 (map)
// - Nutze das Array von Emojis aus dem Code-Snippet
// - Schreibe Code, der dir aus dem Array fruits jeweils Fruchtsaft macht, indem ein Saftglas angehängt wird
// - Gib nun die Fruchtsäfte in der Konsole aus.
let fruits2: string[] = ["🍇", "🍌", "🍒", "🍎"];

const juice = fruits2.map((fruit: string) => {
  return (fruit += "🧃");
});
console.log({ juice });

//!Array-TS-Iteration-Level-1_8 (filter)
// - Nutze das Array der Zahlen von 1 bis 10 aus dem Code-Snippet
// - Schreibe eine Function printEvenNumbers(), wobei die Elemente durch eine boolsche Abfrage ausgewählt werden, die uns nur die geraden Zahlen zeigt
// - Schreibe eine Function printOddNumbers(), wobei die Elemente durch eine boolsche Abfrage ausgewählt werden, die uns nur die ungeraden Zahlen zeigt
// - Nutze beide Funktionen für den Aufruf der filter-Methode
// - Das Ergebnis sollen zwei Arrays sein: evenNumbers und oddNumbers
// - Prüfe die Funktionalität
// - Schreibe nun die selbe Logik noch einmal in der Arrow-Function-Schreibweise
const zahlen: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function printEvenNumbers1(): number[] {
  return zahlen.filter((element: number) => element % 2 === 0);
}

const evenNumbersArray: number[] = printEvenNumbers1();
console.log({ evenNumbersArray });

function printOddNumbers1(): number[] {
  return zahlen.filter((element: number) => element % 2 === 0);
}

const oddNumbersArray: number[] = printOddNumbers1();
console.log({ oddNumbersArray });

//---------------------------------------
//* arrow functions
const printEvenNumbers: number[] = [];
zahlen.forEach((num: number) => {
  if (num % 2 === 0) {
    // console.log(num);
    printEvenNumbers.push(num);
  }
});

console.log({ printEvenNumbers });

const printOddNumbers: number[] = [];
zahlen.forEach((num: number) => {
  if (num % 2 == 1) {
    // console.log(num);
    printOddNumbers.push(num);
  }
});

console.log({ printOddNumbers });

//! Array-filter-TS-Level-1_2
// - In dieser Übung setzt du die filter()-Methode ein, um gezielt Elemente auszusortieren und ein neues Array zu erzeugen, das nur die übriggebliebenen Elemente enthält.
// - Ziel ist es alle “null” und “undefined”-Elemente zu entfernen.
// - Das Array ist vorgegeben (siehe Code-Snippet).
// - Schreibe die Function showHeroesCleaned(), die das Array mit Hilfe der filter()-Methode aufräumt.
// - Gib das Ergebnis nun in der Konsole aus.
// - Zur besseren Darstellung lass dir das Array vor und nach dem Aufruf der Function ausgeben.

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

function cleanUpHeroes(): (string | null | undefined)[] {
  return heroArr.filter((hero) => hero !== null && hero !== undefined);
}

const cleanedHeroes = cleanUpHeroes();

console.log("Array nach der Bereinigung:", cleanedHeroes);

//!Ternary-Operator-TS-Level-2_1
const woerter: string[] = [
  "Banane",
  "Kaktus",
  "Flausch",
  "Ente",
  "Apfel",
  "Auto",
  "Giraffe",
  "Schmetterling",
  "Krokodil",
  "Lampe",
];

console.log("Array vor der Filterung:", woerter);

function filterShortWords(words: string[]): string[] {
  return words.filter((word) => word.length <= 6);
}

function filterWordsWithE(words: string[]): string[] {
  return words.filter((word) => word.toLowerCase().includes("e"));
}

console.log("Wörter mit 6 Zeichen oder weniger:", filterShortWords(woerter));
console.log("Wörter mit 'e' oder 'E':", filterWordsWithE(woerter));
