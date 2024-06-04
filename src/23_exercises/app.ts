//! OOP-Interfaces-TS-Level-1_1

// Lernziel: Interfaces anlegen

// - Erstelle einen Ordner contracts
// - Erstelle ein Interface IShape mit den Eigenschaften
//     - name: string
//     - color: string
// - Lege eine Klasse Circle an, die IShape implementiert
// - Die Klasse soll die zusätzliche Eigenschaft haben
//     - radius: number
// - Außerdem gibt es die public Methode draw, die auf der Konsole “Drawing circle” ausgibt
// - Lege drei Instanzen von Circle an, der name ist immer ‘circle’

import Rectangle from "./Rectangle";
import Circle from "./contracts/Circle";
import Subordinate from "./contracts/Subordinate";
import Manager from "./manager";

const circle1 = new Circle("circle1", "blue", 5);
const circle2 = new Circle("circle2", "green", 12);
const circle3 = new Circle("circle3", "red", 105);

console.log(circle1);
console.log(circle2);
console.log(circle3);

circle1.draw();
circle2.draw();
circle3.draw();

//! OOP-Interface-TS-Level-1_2

// - Wir bauen auf der vorherigen Aufgabe [OOP-Interfaces-TS-Level-1_1](https://www.notion.so/OOP-Interfaces-TS-Level-1_1-35a10a661b2d4d668f619bcaf6f54035?pvs=21)  auf
// - Erstelle eine weitere Datei im Hauptordner rectangle.ts
// - Erstelle dort eine Klasse Rectangle, die das Interface IShape implementiert
// - Die Klasse soll diese zusätzlichen Eigenschaften haben
//     - width: number
//     - height: number
// - Außerdem gibt es eine Methode draw, die auf der Konsole “drawing rectangle” ausgibt

// - Nimm die Methode draw ins Interface IShape auf
// - Nimm eine weitere Eigenschaft isRound (boolean) in IShape auf
// - Implementiere die Eigenschaft mit sinnvollen Werten in den Klassen Circle und Rectangle

const rectangle1 = new Rectangle("Rectangle1", "blue", 5, 10);
console.log(rectangle1);
rectangle1.draw();
rectangle1.isRound();

circle1.isRound();

//! OOP-Interface-TS-Level-2_1
// - Erstelle einen Ordner contracts
// - Lege dort eine Datei employee.ts an
// - Erstelle ein Interface IEmployee mit den Eigenschaften
//     - name (string)
//     - age (number)
//     - position (string)
// - Lege im Hauptordner eine Datei manager.ts an
// - Lege dort eine Klasse Manager an, die das Interface IEmployee implementiert
// - Die Klasse Manager hat eine zusätzliche private Eigenschaft assignedEmployees (Array von IEmployee)

// - Lege in einer neuen Datei subordinate.ts an
// - Erstelle dort eine Klasse Subordinate, die das Interface IEmployee implementiert
// - Erstelle nun eine Methode in der Klasse Manager namens addSubordinate mit einem Parameter vom Typ IEmployee
// - Die Methode soll den übergebenen IEmployee in das Array assignedEmployees hinzufügen
// - Lege eine Datei app.ts an
// - Erstelle dort drei Instanzen der Klasse Subordinate
// - Erstelle eine Instanz der Klasse Manager
// - Weise die Subordinates über die Methode addSubordinate dem Manager zu

const subordinate1 = new Subordinate("Maria", 53, "Developer");
const subordinate2 = new Subordinate("Franz", 28, "Developer");
const subordinate3 = new Subordinate("Lilly", 24, "Developer");
const subordinate4 = new Subordinate("Bernie", 44, "Designer");

const manager = new Manager("Vera", 45, "Product Owner");

manager.addSubordinate(subordinate1);
manager.addSubordinate(subordinate2);
manager.addSubordinate(subordinate3);
manager.addSubordinate(subordinate4);

console.log(manager);
