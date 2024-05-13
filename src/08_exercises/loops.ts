//!  console.log(object);
// - Schreibe eine for-Schleife, die genau 10 Mal "Hello World + Nummer" in der Konsole ausgibt
// - Bei jedem Durchlauf soll sich die Nummer um 1 erhöhen

for (let index = 0; index < 10; index++) {
  console.log("Hello World");
}

//!Loops-TS-Level-1_2
// - Erstelle ein Array mit den Zahlen 0-10 mithilfe einer Schleife.
// - Wenn du mit Arrays arbeitest, musst du das Array initialisieren
// let numbersToTen: number[]  = [];

// - Verwende den Befehl push() im Schleifenkörper.
// - Gib zum Schluss die Variable numbersToTen in der Konsole aus.
let numbersToTen: number[] = [];
for (let index = 1; index <= 10; index++) {
  numbersToTen.push(index);
}
console.log(numbersToTen);

//! Loops-TS-Level-1_3
// - Lernziel: while-Schleife verstehen und anwenden.
// - Schreibe eine while-Schleife, die "Hallo World + Nummer" 10 mal anzeigt.
// - Lege dazu eine Variable counter mit dem Wert 0 an.
// - Als Bedingung nutze in der Schleife "counter < 10".
// - Gib den String "Hallo World + counter" in der Konsole aus.
// - Erhöhe counter um eins.

let counterForWhileLoop = 0;
while (counterForWhileLoop < 10) {
  console.log("Hello World ", counterForWhileLoop);
  counterForWhileLoop++;
}

//! Loops-TS-Level-1_4

// - Deklariere ein Array "friendNames" mit den Werten: "Georg", "Anass", "Elaine", "Hakan", "Eric", "Kim" und "Sergio"
// - Dann verwende eine for-Schleife, um alle Namen in der Konsole anzuzeigen
// - Verwende anschließend eine for … of - Schleife um alle Namen in der Konsole anzuzeigen

let friendNames: string[] = [
  "Georg",
  "Anass",
  "Elaine",
  "Hakan",
  "Eric",
  "Kim",
  "Sergio",
];

for (const friend of friendNames) {
  console.log(friend);
}

//! Loops-TS_Level-1_7
// - Erstelle einen Loop mit do...while
// - Es sollen die Nummern von 1 bis 5 (wie im Screenshot zu sehen) im HTML-Dokument ausgeben werden.
let doWhileCount = document.querySelector("#loop-result");
let doWhileCounter = 1;
if (doWhileCount !== null) {
  do {
    doWhileCount.innerHTML += `The number is ${doWhileCounter} `;
    doWhileCounter++;
  } while (doWhileCounter <= 5);
}
//! Loops-TS-Level-1_8

// - Lernziel: do...while-Loop anwenden und verstehen.
// - Erstelle einen Loop mit do...while
// - Es sollen alle geraden Zahlen bis 20 im HTML-Dokument ausgegeben werden.

let doWhileCountTo20Element = document.querySelector("#doWhile");
let doWhileCountTo20 = 0;
if (doWhileCountTo20Element !== null) {
  do {
    doWhileCountTo20Element.innerHTML += doWhileCountTo20.toString() + "<br>";
    doWhileCountTo20 += 2;
  } while (doWhileCountTo20 <= 20);
}

//!Loops-TS-Level-2_1
// - Lernziel: Anwendung for-Schleife und Conditional Statements.
// - Nehmen wir an, wir wollen automatisiert 100 Dateinamen für Bilder in unserem Ordner erstellen. Wir erstellen dazu ein Array mit standardisierten Dateinamen – wie in der Ergebnisvorschau.
// - Deklariere dafür die Function createImageNames.
// - Deklariere im Funktionskörper die Variable returnArray als leeres Array.
// - Schreibe eine for-Schleife.
// - Du kannst Conditionals Statements (if, else) nutzen, wenn du den Dateinamen zusammenbaust, um zu ermittelt wie viel Nullen vor der Zahl stehen müssen. Alternativ kannst du die String-Methode padStart() einsetzen.
// - Nutze push() um den jeweiligen Dateinamen ins Array zu schreiben
// - Gib das Array mit return aus der Funktion zurück
// - Lasse dir das Ergebnis auf der Konsole ausgeben

function createImageNames(totalImages: number): string[] {
  const returnArray: string[] = [];
  for (let index = 1; index <= totalImages; index++) {
    const paddedNumber = String(index).padStart(3, "0");
    const filename = `image_${paddedNumber}.jpg`;
    returnArray.push(filename);
  }
  return returnArray;
}

const imageNames = createImageNames(100);
console.log(imageNames);

//!Loops-TS-Level-2_2
