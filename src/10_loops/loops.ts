//! Loops-TS-Level-3_5

// ? Schreibe eine Funktion, die die [Fakultät](https://www.frustfrei-lernen.de/mathematik/fakultaet.html) (engl. Factorial) einer übergegebenen Zahl vom Typ number berechnet und das Ergebnis der Fakultätsberechnung zurückgibt.
// ? Verwende eine Schleife, um die Multiplikation der Zahlen von 1 bis n durchzuführen.
// ? Wenn 0 und 1 als Parameter übergeben werden, soll direkt das Ergebnis 1 zurückgegeben werden
// - Logik:

//     “Die Fakultät einer Zahl ist das Produkt aller positiven ganzen Zahlen kleiner oder gleich dieser Zahl.”
//     Einfacher verständlich sind vermutlich diese Beispiel-Berechnungen

function getFactorial(number: number): number {
  // bei 0 und 1 soll automatisch das Ergebnis 1 zurückgegeben werden
  if (number === 0 || number === 1) {
    return 1;
  }
  //Schleife mit Berechnung
  //! bei summen am besten mit 0  anfangen, bei multiplikationen am besten mit 1
  //? vor der schleife bietet es sich an eine variable anzulegen
  let factorialResult = 1;
  //factorial(4) = 4 · 3 · 2 · 1 = 24
  // ? nicht mit 0 anfangen- sonst würde mit 0 multipliziert und es kommt immer 0 raus
  for (let index = 1; index <= number; index++) {
    factorialResult = factorialResult * index;
    //? Kurzschreibweise: factorialResult*= index
  }

  //Ergebnis zurückgeben
  return factorialResult;
}

console.log(`factorial: ${getFactorial(3)}`);
console.log(`factorial: ${getFactorial(6)}`);
console.log(`factorial: ${getFactorial(5)}`);

//! Loops-TS-Level-3_6
//  Schreibe eine Funktion, die den Durchschnitt von Punkten einer Klassenarbeit aus einem Array berechnet und eine Bewertung ausgibt
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

//? Function Parameter vom typ number[]
//? Punkte von 0-100 in einem array --> allPointsInClass
function getClassRating(allPointsInClass: number[]): string {
  //? mit .length überprüfen ob das array einen inhalt hat, falls length 0 wird es als false interpretiert
  //? 0 entspricht false und alles >0 = true
  if (!allPointsInClass || !allPointsInClass.length) {
    return "Unbekannt";
  }
  //? Durchschnitt der Punkte berechnen
  //? const results = [44, 11, 70, 80, 52, 88, 94, 3, 25, 46]
  let sumOfAllPoints = 0;
  for (let index = 0; index < allPointsInClass.length; index++) {
    const singlePoint = allPointsInClass[index];
    // sumOfAllPoints = sumOfAllPoints + singlePoint
    sumOfAllPoints += singlePoint;
  }
  //? Durchschnittspunkte ermitteln
  const averagePoints = sumOfAllPoints / allPointsInClass.length;
  console.log({ averagePoints });
  if (averagePoints < 50) {
    return "Ungenügend";
  } else if (averagePoints < 60) {
    return "Mangelhaft";
  } else if (averagePoints < 70) {
    return "Ausreichend";
  } else if (averagePoints < 80) {
    return "Befriedigend";
  } else if (averagePoints < 90) {
    return "Gut";
  } else {
    return "Sehr gut";
  }
}
console.log(getClassRating([50, 100]));
//? Bewertung ermitteln
//? Bewertung zurückgeben
console.log(getClassRating([90, 100]));
console.log(getClassRating([44, 11, 70, 80, 52, 88, 94, 3, 25, 46]));
