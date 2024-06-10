//! OOP-TypeCast-Level-1_1

// - Lege eine neue Datei student.ts an
// - Erstelle ein interface IStudent mit den Eigenschaften
//     - name: string
//     - age: number
//     - grade: number
// - Lege eine neue Datei app.ts an
// - Schreibe dort eine Funktion processStudent(student: IStudent) an
// - Die Funktion gibt “Processing [student.name] …” auf der Konsole aus
// - Lege ein Objekt student1 mit den Eigenschaften name und age an
// - Wandle das Objekt mit as in IStudent um
// - Übergebe das Objekt an die Funktion processStudent
// - Lege ein zweites Objekt student2 mit der Eigenschaft age an
// - Wandle das Objekt in einen IStudent um
// - Übergebe das Objekt an die Funktion processStudent
// - Schreibe in einen Code-Kommentar was im zweiten Fall angezeigt/ausgegeben wird

import IStudent from "./IStudent";

function processStudent(student: IStudent) {
  console.log(`Processing ${student.name}`);
}

const student1 = {
  name: "Michael",
  age: 23,
} as IStudent;

processStudent(student1);

const student2 = {
  age: 22,
} as IStudent;

processStudent(student2); //undefined

//! OOP-UnionType-Level-1_1

// - Lege eine neue Datei app.ts an
// - Erstelle dort einen Union Type namens Result mit den Werten "success", "error" und "pending"
// - Definiere eine Variable vom Typ Result und weise ihr einen der Werte zu.
// - Schreibe eine Funktion handleResult, die einen Parameter vom Typ Result akzeptiert.
// - Implementiere handleResult so, dass sie je nach übergebenem Wert eine entsprechende Meldung ausgibt.
// - Teste die Funktion, indem du verschiedene Werte an sie übergibst.

export type Result = "success" | "error" | "pending";

function handleResult(result: Result): void {
  switch (result) {
    case "success":
      console.log("It's a success");
      break;
    case "error":
      console.log("It's an error");
      break;
    case "pending":
      console.log("Still pending.");
      break;
    default:
      console.log("Unknown result.");
      break;
  }
}

let result1: Result = "error";
handleResult(result1);

let result2: Result = "success";
handleResult(result2);

let result3: Result = "pending";
handleResult(result3);

//! OOP-IntersectionType-Level-1_1

// - Lege eine Datei an: alcohol.ts
// - Erstelle dort zwei Klassen, Alcohol und Mixer, die jeweils Eigenschaften für alkoholische Getränke und Mischgetränke definieren.
// - Alcohol hat die Eigenschaften: name, percentage und type
// - Mixer hat die Eigenschaften: name, type und carbonated
// - Lege anschließend einen Intersection-Typ namens Cocktail an, der sowohl die Eigenschaften von Alcohol als auch von Mixer enthält.
// - Erstelle ein Objekt vom Typ Cocktail und weise ihm entsprechende Eigenschaften zu.
// - Gib die Eigenschaften des Cocktails auf der Konsole aus, um sicherzustellen, dass der Typ korrekt erstellt wurde.

import { Alcohol, Mixer } from "./alcohol";

type Cocktail = Alcohol & Mixer;

const martini: Cocktail = {
  name: "Martini",
  percentage: 15,
  type: "Cocktail",
  carbonated: false,
};

console.log(
  `Cocktail: Name:${martini.name}, Percentage: ${martini.percentage}, Type: ${martini.type}, Carbonated: ${martini.carbonated}`
);

//! TS-ErrorHandling-Level-1_1

// - Lege eine Datei an: user-input.ts
// - Schreibe eine Funktion greetUser, die einen Benutzernamen vom Benutzer über ein Window-Prompt abfragt.
// - Verwende einen try-catch-Block, um Fehler beim Abrufen des Benutzernamens abzufangen.
// - Wenn der Benutzer einen Namen eingibt, gib eine personalisierte Begrüßung aus, die den Namen des Benutzers verwendet.
// - Wenn ein Fehler auftritt (z. B. wenn der Benutzer den Dialog schließt), gib eine Standardbegrüßung aus.
import greetUser from "./user-input";

greetUser();

//! TS-ErrorHandling-Level-2_1

// - Lege eine Datei an: lotto-numbers.ts
// - Schreibe eine Funktion generateLottoNumber, die eine Lottozahl generiert.
// - generiere dort eine Zufallszahl zwischen 1 und 100 mit Math.random().
// - Wenn die random erstellte Zahl größer als 49 ist, soll ein Fehler ausgelöst werden.
// - Ansonsten wird die Zahl als Rückgabewert zurückgegeben
// - Rufe in einer Schleife so oft generateLottoNumber auf, bis du 7 gültige Zahlen erhältst
// - Verwende einen try-catch-Block, um Fehler abzufangen und zu behandeln.
// Schreib die generierte Lottozahl in ein Array lottoResults: number[], wenn kein Fehler aufgetreten ist.
// - Es dürfen keine doppelten Zahlen in lottoResults aufgenommen werden
// - Lass dir am Ende die Lottozahlenreihe auf der Konsole ausgeben

import generateLottoNumber from "./lotto-numbers";

const lottoResults: number[] = [];
while (lottoResults.length < 7) {
  try {
    const number = generateLottoNumber();
    if (!lottoResults.includes(number)) {
      lottoResults.push(number);
    }
  } catch (error) {}
}

console.log("Lotto Numbers:", lottoResults);
