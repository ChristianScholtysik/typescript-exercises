//! Loops-TS-Level-1_10
// - Schreibe eine Funktion getHighestNumber
// - Die Funktion bekommt als Parameter ein Array von numbers übergeben
// - Die Funktion hat als Rückgabetyp den Typ number
// - Es soll der höchste Wert aus dem übergebenen Array von Zahlen ermittelt werden

//     Tipp: Gehe alle Zahlen durch und merke dir immer den aktuell höchsten Wert in einer Variable

// - Anschließend wird dieser Wert mit return zurückgegeben
// - Rufe die Funktion mit mehreren Arrays auf, um zu testen, ob sie richtig funktioniert

//? Schreib Funktion: number
//? als Parameter ein Array:numbers
function getHighestNumber(numbers: number[]): number {
  // if(numbers.length === 0){
  //     console.log('Array darf nicht leer sein');
  // }
  //? ermittle den höchsten Wert
  let highestNumber = numbers[0];
  for (let index = 1; index < numbers.length; index++) {
    if (numbers[index] > highestNumber) {
      highestNumber = numbers[index];
    }
  }
  //? Gib Wert mit return zurück
  return highestNumber;
}

const array1: number[] = [1, 5, 7, 88, 99, 653, 8752];
const array2: number[] = [-99, -5, -0.7, -18, -9, -44, -2];

console.log(getHighestNumber(array1));
console.log(getHighestNumber(array2));

//! Loops-TS-Level-1_11
// - Schreibe eine Funktion calculateSum mit einem Parameter maxNumber: number
// - Sie soll die Summe aller Zahlen von 1 bis zur angegebenen Zahl (maxNumber) berechnen und zurückgeben.
// - Verwende eine Schleife, um die Zahlen von 1 bis n zu durchlaufen und ihre Summe zu berechnen.

//?Schreibe eine Funktion calculateSum mit einem Parameter maxNumber: number

function calculateSum(maxNumber: number): number {
  //? Summe aller Zahlen von 1 bis zur angegebenen Zahl (maxNumber) berechnen und zurückgeben
  //? Verwende eine Schleife von 1-n
  let sumToMaxNumber = 0;
  for (let index = 1; index <= maxNumber; index++) {
    sumToMaxNumber += index;
  }
  return sumToMaxNumber;
}

const result = calculateSum(7);
console.log(result);

const resultB = calculateSum(17);
console.log(resultB);

//! Loops-TS-Level-2_3
// - Schreibe eine Funktion getNumberOfVowels
// - Sie soll die Anzahl der Vokale (A, E, I, O, U) in einem übergegebenen String zählen und zurückgeben.
// - Verwende eine Schleife, um jeden Buchstaben im übergebenen String zu durchzugehen, und eine Bedingung, um zu prüfen, ob es sich um einen Vokal handelt.
// - Teste die Funktion mit mehreren Strings

//? Schreibe function getNumberOfVowels
function getNumberOfVowels(text: string) {
  const textArray = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  //? anzahl der Vokale zählen
  let count = 0;
  const foundVowels: string[] = [];
  //? schleife erstellen die jeden Buchstaben prüft ob er ein Vokal ist
  for (let index = 0; index < text.length; index++) {
    if (textArray.includes(text[index])) {
      count++;
      foundVowels.push(text[index]);
    }
  }
  return { count, vowels: foundVowels };
}

const vowelsArray = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

//? Testen
const testString1 = "Hello World";
console.log(getNumberOfVowels(testString1));

const testString2 = "This is just a test about vowels in a text";
console.log(getNumberOfVowels(testString2));

//! Loops-TS-Level-2_4
// - Schreibe eine Funktion addToFifty(): void
// - In der Funktion soll in einer Schleife eine Zufallszahl zwischen 1 und 10 generiert werden
// - Die Zahl soll jeweils auf der Konsole ausgegeben werden
// - Die Zufallszahlen sollen so lange aufaddiert werden, bis die Zahl 50 überschritten wird
// - Am Ende wird z. B. beim Gesamtergebnis 53 Folgendes ausgegeben
// '53 > 50. Stopping right here.'
// - Nutze Math.random()

function addToFifty(): void {
  let sum = 0;

  while (sum <= 50) {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log("Generated number:", randomNumber);
    sum += randomNumber;
  }

  console.log(`${sum} > 50. Stopping right here.`);
}

// Aufruf der Funktion
addToFifty();

//! BONUS
// - Schreibe eine Funktion, die den Durchschnitt von Punkten einer Klassenarbeit aus einem Array berechnet und eine Bewertung ausgibt
// - Die Funktion hat demnach einen Parameter vom typ number[]

//        → Die Punkte pro Klassenarbeit und damit die Werte im Array können jeweils zwischen 0 bis

//          100 liegen (siehe Beispiel unten)

// - Berechne den Punktedurchschnitt
// - Anhand des Punktedurchschnitts soll eine Bewertung ausgegeben werden.
//     - Durchschnitt  <  50: "Ungenügend"
//     - 50 <=Durchschnitt  <  60: "Mangelhaft"
//     - 60 <= Durchschnitt < 70: "Ausreichend"
//     - 70 <= Durchschnitt < 80: "Befriedigend"
//     - 80 <= Durchschnitt < 90: "Gut"
//     - 90 <= Durchschnitt: "Sehr gut"
// - Teste die Funktion mit verschiedenen Arrays

//? Funktion vom Typ:number[] welche den Durchschnitt von Punkten einer Klassenarbeit ausgibt
const results = [44, 11, 70, 80, 52, 88, 94, 3, 25, 46];
function averagePoints(results: number[]): string {
  //? Summe der Punkte berechnen für Durchschnitt
  let sum = 0;
  for (let index = 0; index < results.length; index++) {
    sum += results[index];
  }
  console.log({ sum });
  //? Durchschnitt berechnen
  let average = sum / results.length;
  console.log({ average });
  //? Bewertung ausgeben
  let level: string;
  if (average < 50) {
    level = "Ungenügend";
  } else if (average < 60) {
    level = "Mangelhaft";
  } else if (average < 70) {
    level = "Ausreichend";
  } else if (average < 80) {
    level = "Befriedigend";
  } else if (average < 90) {
    level = "Gut";
  } else {
    level = "Sehr gut";
  }
  console.log({ level });
  return level;
}

//? Testen
const resultOfClass = averagePoints([44, 11, 80, 52, 88, 94, 3, 25, 46]);
const resultOfClass2 = averagePoints([
  100, 32, 98, 71, 24, 52, 60, 33, 100, 95, 66,
]);

//! FizzBuzz
// Schreibe eine Funktion, die die Zahlen von 1 bis 100 zurückgibt. Manche Zahlen sollen dabei allerdings übersetzt werden [1]:

// Für Vielfache von 3 gibt „Fizz“ aus.
// Für Vielfache von 5 gib „Buzz“ aus.
// Für Vielfache von 3 und 5 gib „FizzBuzz“ aus.
function fizzBuzz(): string[] {
  const result = [];
  for (let index = 0; index <= 100; index++) {
    if (index % 3 === 0 && index % 5 === 0) {
      result.push("FizzBuzz");
    } else if (index % 3 === 0) {
      result.push("Fizz");
    } else if (index % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(index.toString());
    }
  }
  return result;
}

console.log(fizzBuzz());

//!!
