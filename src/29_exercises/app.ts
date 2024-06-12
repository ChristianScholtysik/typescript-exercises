//! callback-TS-Level-1_1

// - Lege eine Datei add-numbers.ts an
// - Erstelle eine Funktion addNumbers mit drei Parametern
//     - a: number
//     - b: number
//     - callback: (sum: number) ⇒ void
// - in der Funktion addNumbers wird das Ergebnis von a + b an die Callback-Funktion übergeben
// - Rufe addNumbers mit zwei Zahlen auf
// - In der Callback-Function soll nur console.log mit der Summe aufgerufen werden
// → entscheide selbst ob du dafür eine extra Funktion anlegst oder es direkt in der Arrow-Schreibweise umsetzt

import { addNumbers, addNumbers2, showAlert } from "./add-numbers";

addNumbers(5, 7, (sum) => {
  console.log(`Die summe ist ${sum}`);
});

addNumbers2(5, 7, showAlert);

//! callback-TS-Level-1_4

// - Lege eine Datei max.ts an
// - Schreibe dort eine Funktion showMaximum
//     - Parameter 1: numbers: numbers[]
//     - Parameter 2: callback: (max: number) ⇒ number
// - Die Funktion ermittelt zuerst das Maximum der Zahlen aus dem numbers-Array und gibt es auf der Konsole aus
// - Dann übergibt sie den Max-Wert an die Callback-Funktion
// - Danach wird auf der Konsole ausgegeben “Finished with showMaximum”
// - Schreibe eine weitere Funktion powerOfTen(number: number): number
//     - Parameter: number: number
//     - die Funktion soll die übergebene Zahl hoch 10 nehmen und auf der Konsole ausgeben
// - Rufe showMaximum mit einem Array von Zahlen und powerOfTen als Callback-Funktion auf
// - Lass dir das Ergebnis auf der Konsole ausgeben
import { powerOfTen, showMaximum } from "./max";

showMaximum([2, 5, 7, 9, 1, 8], powerOfTen);

//! callback-TS-Level-2_1

// - Lege eine Datei callback-cascade.ts an
// - Schreibe dort eine Funktion calculateSumAndMore
//     - Parameter 1: a: number
//     - Parameter 2: b: number
//     - Parameter 3: callback1: (result1: number) ⇒ number
//     - Parameter 4: callback2: (result2: number) ⇒ number
// - Zuerst wird die Summe von a + b ermittelt
// - Dann wird sie an die erste Callback-Funktion übergeben
// - Das Ergebnis der ersten Callback-Funktion wird an die zweite Callback-Funktion übergeben
// - Das Ergebnis der zweiten Callback-Funktion ist dann der Rückgabewert von calculateSumAndMore

// Rufe calculateSumAndMore auf und übergebe folgende Callback-Funktionen

// - Die erste Callback-Funktion soll die Summe von a und b verdoppeln zurückgeben
// - Die zweite CallbackFunktion soll dann das Ergebnis in eine Binärzahl umwandeln und zurückgeben (siehe https://www.geeksforgeeks.org/javascript-program-to-convert-a-number-to-binary/)

// - Rufe die Funktion mit mehreren Zahlen auf und lass dir das Ergebnis auf der Konsole ausgeben
// import {
//   calculateSumAndMore,
//   changeToBinary,
//   doubleSum,
// } from "./callback-cascade";

function calculateSumAndMore(
  a: number,
  b: number,
  callback1: (result1: number) => number,
  callback2: (result2: number) => number
): number {
  const sum = a + b;
  console.log(`Die Summe von ${a} und ${b} ist: ${sum}`);
  const result1 = callback1(sum);
  console.log(`Ergebnis der ersten Callback-Funktion (Verdoppeln): ${result1}`);
  const result2 = callback2(result1);
  console.log(
    `Ergebnis der zweiten Callback-Funktion (Binärumwandlung): ${result2}`
  );
  return result2;
}

const double = (num: number): number => {
  return num * 2;
};
const toBinary = (num: number): number => {
  return parseInt(num.toString(2));
};

const ergebnis1 = calculateSumAndMore(3, 5, double, toBinary);
console.log(`Endergebnis für (3, 5): ${ergebnis1}`);

const ergebnis2 = calculateSumAndMore(7, 72, double, toBinary);
console.log(`Endergebnis für (7, 2): ${ergebnis2}`);

const ergebnis3 = calculateSumAndMore(10, 20, double, toBinary);
console.log(`Endergebnis für (10, 20): ${ergebnis3}`);

//! callback-TS-Level-3_2

// Zufallsgenerator für verschiedene Datentypen

// Es soll eine Anwendung erstellt werden, die in einem h1-Element entweder eine random Number, einen random String, ein random Boolean oder ein random Emoji zurückgibt, wenn man auf einen Button klickt

// - Erstelle eine HTML-Datei mit einem h1-Element mit der ID "headline" für die Anzeige der Ergebnisse und einem Button mit der Id "randomButton" für den Zufallsgenerator.
// - Erstelle eine TypeScript-Datei namens random-generator.ts und verbinde sie mit der HTML-Datei
// - Definiere in der TypeScript-Datei vier Funktionen:
//     - randomNumber: Generiert eine zufällige Zahl und gibt sie als string zurück.
//     - randomText: Generiert einen zufälligen Text und gibt ihn zurück.
//     - randomBoolean: Generiert einen zufälligen Wahrheitswert (true oder false) und gibt ihn als string zurück.
//     - randomEmoji: Gibt einen zufälligen Emoji zurück
// - Definiere eine Funktion updateHeadline, die eine Callback-Funktion (Rückgabewert: string) als Parameter erhält und den Rückgabewert dieser Callback-Funktion in das h1-Element mit der ID "headline" schreibt.
// - Füge einen Event Listener für den Random-Button hinzu
//     - dort soll nach dem Zufallsprinzip eine der zuvor definierten vier Funktionen ausgewählt und an die updateHeadline-Funktion übergeben werden
// - Teste die Anwendung ausführlich

// # 💡 Tipp

// - Nutze ein Array mit einigen Emojis
// - Um eine zufällige Funktion aus den 4 vorgegebenen Funktionen auszuwählen, kannst entweder mit Zufallszahlen und if arbeiten oder ein Array von Functions verwenden
