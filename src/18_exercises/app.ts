//! Module-Namensräume-TS-1_1
// - Erstelle zwei TypeScript-Dateien app.ts und calculator.ts
// - Erstelle in der calculator.ts eine Funktion namens addFive, die zu einer als Parameter übergebenen Zahl 5 dazuaddiert und das Ergebnis zurückgibt
// - Exportiere die Methode mit ihrem Namen
// - Importiere die Funktion in der app.ts
// - Rufe die Funktion 3x mit beliebigen Zahlen auf
// - Die Ergebnisse sollen in der Konsole ausgegeben werden.

import { add, divide, multiply, substract } from "./operations";
import addFive from "./calculator";
import {
  addNumbers,
  divideNumbers,
  multiplyNumbers,
  subtractNumbers,
} from "./operations2";
import randomColorGenerator from "./random-color-generator";
import { TextTools } from "./text-tools";

console.log(addFive(6));
console.log(addFive(11));
console.log(addFive(189));

//!Module-Namensräume-TS-1_2
// - Erstelle zwei TypeScript-Dateien app.ts und operations.ts
// - Erstelle in der operations.ts vier Funktionen
// - add (a: number, b: number)
// - subtract (a: number, b: number)
// - multiply (a: number, b: number)
// - divide (a: number, b: number)
// - Die Funktionen sollen jeweils den Wert der Addition, Subtraktion, Multiplikation und Division zurückgeben
// - Exportiere die Funktionen am Dateiende mit ihren tatsächlichen Namen
// - Importiere die Funktionen in der app.ts
// - Rufe die Funktionen mit beliebigen Zahlen auf
// - Die Ergebnisse sollen in der Konsole ausgegeben werden.
// - Erstelle eine weitere Datei operations2.ts
// - Kopiere die Funktionen aus der operations.ts
// - Exportiere diese Funktionen am Dateiende mit den neuen Namen:
//  addNumbers, subtractNumbers, multiplyNumbers und divideNumbers
// - Importiere die Funktionen in der app.ts
// - Rufe die Funktionen mit beliebigen Zahlen auf
// - Die Ergebnisse sollen in der Konsole ausgegeben werden.

console.log(add(4, 5));
console.log(substract(4, 5));
console.log(multiply(4, 5));
console.log(divide(4, 5));

console.log(addNumbers(6, 5));
console.log(subtractNumbers(6, 5));
console.log(multiplyNumbers(6, 5));
console.log(divideNumbers(6, 5));

//! Module-Namensräume-TS-1_3

// - Erstelle drei TypeScript-Dateien app.ts, special-color.ts und random-color-generator.ts
// - Die Datei special-color.ts soll ein Enum mit 10 beliebigen Farbnamen enthalten und per default exportieren
// - Die Datei random-color-generator.ts soll eine Funktion randomColorGenerator() enthalten und per default exportieren
// - Die Funktion soll zufällig eine der Farben aus dem Enum zurückgeben
// (Tipp: Math.random)
// - Importiere die Funktion unter dem Namen getRandomColor() in der app.ts
// - Rufe die Funktion mehrfach auf
// - Die Ergebnisse sollen in der Konsole ausgegeben werden.

console.log("Color: ", randomColorGenerator());
console.log("Color: ", randomColorGenerator());
console.log("Color: ", randomColorGenerator());

//! Module-Namensräume-TS-2_1

// - Lernziel: Namensräume verwenden
// - Lege eine TypeScript-Datei text-tools.ts an
// - Fange mit der Zeile export {}; an
// - Erstelle einen Namensraum (namespace) TextTools
// - Der Namespace soll zwei Funktionen enthalten, die exportiert werden
//     - toUpperCase(text: string) soll den Text in Großbuchstaben zurückgeben
//     - reverse(text: string) soll den Text rückwärts ausgeben
// - Außerdem soll der Text “Das ist eine Konstante” als Konstante im Namespace TextTools enthalten sein, die ebenfalls exportiert wird
// - Rufe in der Datei app.ts die beiden Funktionen mit beliebigen Texten auf
// - Die Ergebnisse sollen in der Konsole ausgegeben werden
// - Lass dir die Konstante in der Konsole ausgeben

console.log(TextTools.textConstant);
console.log(TextTools.toUpperCase("Hello"));
console.log(TextTools.reverse("HELLO"));

//! Module-Namensräume-TS-3_1

import createProduct from "./product/ProductFunctions";
import addProductToService from "./product/ProductServiceFunctions";
import createOrder from "./order/OrderFunctions";
import addOrderToService from "./order/OrderServiceFunctions";

createProduct("Hose", 55);
addProductToService("nähen", "Hose");
createOrder(["Hose", "Hemd", "Schuhe]"]);
addOrderToService("Nähen", "54632");
