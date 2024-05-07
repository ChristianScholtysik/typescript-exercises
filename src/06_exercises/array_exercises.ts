//! Array-TS-Sort-Level-1_1 (sort)
let languages: string[] = [
  "JavaScript",
  "Python",
  "Java",
  "Ruby",
  "PHP",
  "C++",
  "CSS",
  "C#",
  "Go",
  "C",
  "TypeScript",
  "Swift",
];
//Deklariere die Funktion sortAlphabetically.
function sortAlphabetically(a: string, b: string) {
  return a.localeCompare(b);
}
//- Verwende den Befehl sort(), um die Aufgabe zu erfüllen.
//- Rufe die Funktion sortAlphabetically auf.
//- Überprüfe den Erfolg in der Konsole.
console.log(languages.sort(sortAlphabetically));

let europeanCountries: string[] = [
  "France",
  "Germany",
  "Sweden",
  "Great Britain",
  "Czech Republic",
  "Switzerland",
];

//- Lege selbst ein weiteres Array europeanCountries mit einigen Ländern an, z. B. France, Germany, Sweden, Great Britain, Czech Republic, Switzerland
//Rufe die Funktion sortAlphabetically mit den europeanCountries auf
//Überprüfe den Erfolg in der Konsole.
console.log(europeanCountries.sort(sortAlphabetically));

//!Array-TS-Sort-Level-1_2 (sort + reverse)

// - Sortiere die Programmiersprachen in umgekehrter alphabetischer Reihenfolge.
// - Der Code steht im Code-Snippet.
// - Nenne die Funktion sortDescending (= sortiere absteigend).
// - Verwende den Befehl sort() und reverse(), um die Aufgabe auszuführen.
// - Rufe die Funktion sortDescending auf.
// - Überprüfe das Ergebnis in der Konsole.
// - Rufe die Funktion auch für europeanCountries auf
// - Überprüfe das Ergebnis in der Konsole.

function sortDescending1(a: string, b: string) {
  return b.localeCompare(a);
}

console.log(europeanCountries.sort(sortDescending1));
console.log(europeanCountries.reverse());

//! Array-TS-Sort-Level-1_3 (sort)

let numArray1: number[] = [36, 24, 22, 3, 2, 98, 88, 99, 10, 54, 68, 70];

function sortAsc(a: number, b: number) {
  return a - b;
}
function sortDesc(a: number, b: number) {
  return b - a;
}
console.log(numArray1.sort(sortAsc));
console.log(numArray1.sort(sortDesc));

//! Array-TS-Sort-Level-2_1

let names: string[] = [
  "Christian",
  "Sergio",
  "Hannah",
  "Regallager",
  " Reliefpfeiler",
  "Rentner",
];
function reverseLetters(a: string): string {
  return a.split("").reverse().join("");
}
console.log(reverseLetters("Sergio"));

function sortArrayReversedLetters(a: string[]): string[] {
  const reversedArray: string[] = a.map(reverseLetters);
  const sortedArray: string[] = reversedArray.sort();
  return sortedArray;
}

const resultOfSortedArray: string[] = sortArrayReversedLetters(names);
console.log(resultOfSortedArray);

//------------------------
const sentences: string[] = ["Ella mag alle Bohnen", " han nesaH has ennaH"];

const resultOfSortedArraySentence: string[] =
  sortArrayReversedLetters(sentences);
console.log(resultOfSortedArraySentence);

//! Array-TS-Sort-Level-2_3 (slice)
let numArray: number[] = [36, 324, 122, 62, 98, 88, 99, 1000];

let oldPainters: string[] = [
  "Caspar David Friedrich",
  "Mary Cassatt",
  "Rosa Bonheur",
  "Francisco de Goya",
  "Édouard Manet",
];
let newerPainters: string[] = [
  "Pablo Picasso",
  "Salvador Dalí",
  "Frida Kahlo",
  "Georgia O'Keeffe",
];

let femalePainters: string[] = [];
let newerFemalePainters = newerPainters.slice(2, 4);
let olderFemalePainters = oldPainters.slice(1, 3);

const copyPaintersWithConcat = femalePainters.concat(
  newerFemalePainters,
  olderFemalePainters
);
console.log(copyPaintersWithConcat);

const copyOfFemalePaintersWithSpreadOperator: string[] = [
  ...olderFemalePainters,
  ...newerFemalePainters,
];
console.log(copyOfFemalePaintersWithSpreadOperator);
//-----------------
let malePainters: string[] = [];
let newerMalePainters = newerPainters.slice(0, 2);

let olderMalePainters1 = oldPainters.slice(0, 1);
let olderMalePainters2 = oldPainters.slice(3, 6);
const olderMalePainters = olderMalePainters1.concat(olderMalePainters2);
const copyMalePaintersWithConcat = malePainters.concat(
  newerMalePainters,
  olderMalePainters
);
console.log(copyMalePaintersWithConcat);

const copyOfMalePaintersWithSpreadOperator: string[] = [
  ...olderMalePainters,
  ...newerMalePainters,
];
console.log(copyOfMalePaintersWithSpreadOperator);

//! Array-TS-Level-1_14 (copy)

const oldHollywoodActors: string[] = [
  "Marlon Brando",
  "Audrey Hepburn",
  "Elizabeth Taylor",
  "Cary Grant",
  "Paul Newman",
  "Doris Day",
];

let actorsReference: string[] = [...oldHollywoodActors];
actorsReference.push("Marilyn Monroe");
console.log(oldHollywoodActors);
console.log(actorsReference);
//Kopie mit Concat
const copyOfOldHollywoodActors = oldHollywoodActors.concat();
console.log(copyOfOldHollywoodActors);
copyOfOldHollywoodActors.push("Marlene Dietrich");
console.log("nach push: ", copyOfOldHollywoodActors);
//Kopie mit Slice
const copyOfOldHollywoodActors2 = oldHollywoodActors.slice();
console.log(copyOfOldHollywoodActors2);
copyOfOldHollywoodActors2.push("Keine Ahnung");
console.log("nach push: ", copyOfOldHollywoodActors2);
//Kopie mit Spread
const copyOfOldHollywoodActors3: string[] = [...oldHollywoodActors];
console.log(copyOfOldHollywoodActors3);
copyOfOldHollywoodActors3.push("Hello");
console.log("nach push: ", copyOfOldHollywoodActors3);

//! Array-TS-Level-3_1

const artworks: string[] = [
  "Die Sternennacht - Vincent van Gogh",
  "Guernica - Pablo Picasso",
  "Die Geburt der Venus - Sandro Botticelli",
  "Die Nachtwache - Rembrandt",
  "Die Mona Lisa - Leonardo da Vinci",
  "Die Kartoffelesser - Vincent van Gogh",
  "Die Schrei - Edvard Munch",
  "Das letzte Abendmahl - Leonardo da Vinci",
  "Die freudige Botschaft - James Tissot",
  "Der Garten der Lüste - Hieronymus Bosch",
];

const artworksDates: string[] = [
  "Die Sternennacht - 1889",
  "Guernica - 1937",
  "Die Geburt der Venus - 1486",
  "Die Nachtwache - 1642",
  "Die Mona Lisa - 1503",
  "Die Kartoffelesser - 1885",
  "Die Schrei - 1893",
  "Das letzte Abendmahl - 1495",
  "Die freudige Botschaft - 1885",
  "Der Garten der Lüste - 1505",
];

function searchArt(artworkName: string) {
  const index = artworks.findIndex((artwork) =>
    artwork.startsWith(artworkName)
  );
  if (index !== -1) {
    const artworksInfo = artworks[index].split(" - ");
    const artworksDatesInfo = artworksDates[index].split(" - ");
    console.log(
      `'${artworksInfo[0]}' wurde von ${artworksInfo[1]} im Jahre ${artworksDatesInfo[1]} gemalt`
    );
  } else {
    console.log(`Artwork '${artworkName}' not found`);
  }
}

searchArt("Der Garten der Lüste");
searchArt("Mona Lisa");
searchArt("Die Mona Lisa");
searchArt("Die Sternennacht");
searchArt("Guernica");
