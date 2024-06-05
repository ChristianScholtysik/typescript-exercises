//! OOP-Class-TS-Level-1_7

// - Lege eine Datei unicorn.ts
// - Lege dort eine Klasse Unicorn mit den Eigenschaften name: string und colors: string[] an
// - Lege eine Datei instance-checker.ts an
// - Erstelle dort eine Klasse InstanceChecker
// - Lege eine statische Methode isUnicorn an
// - Die Methode hat einen Parameter namens objectToCheck - ausnahmsweise vom Typ any ;)
// - Die Methode gibt true zurück, wenn das objectToCheck eine Instanz der Klasse Unicorn ist
// - Die Methode gibt false zurück, wenn das objectToCheck keine Instanz der Klasse Unicorn ist
// - Lege eine Datei app.ts an
// - Rufe die Methode InstanceChecker.isUnicorn mit einem leeren Objekt auf und lass dir das Ergebnis auf der Konsole ausgeben
// - Erstelle eine Instanz der Klasse Unicorn
// - Rufe die Methode InstanceChecker.isUnicorn dieser Instanz auf und lass dir das Ergebnis auf der Konsole ausgeben

import InstanceChecker from "./Instance-Cecker";
import Unicorn from "./Unicorn";

const objectEmpty = {};
console.log(InstanceChecker.isUnicorn(objectEmpty));

const myLittleUnicorn = new Unicorn("Einhörnchen", ["pink", "gold"]);
console.log(InstanceChecker.isUnicorn(myLittleUnicorn));

//! OOP-Class-TS-Level-1_8

// - Lege eine Datei car.ts an
// - Lege dort eine Klasse Car an
// - Lege eine weitere Datei electric-car.ts an
// - Lege dort eine Klasse ElectricCar an
// - Verwende den InstanceChecker aus [OOP-Class-TS-Level-1_7](https://www.notion.so/OOP-Class-TS-Level-1_7-90d06102759c4869afdd4d5a33d3ec48?pvs=21)  weiter
// - Lege eine statische Methode isCar an
// - Die Methode hat einen Parameter namens objectToCheck - ausnahmsweise vom Typ any
// - Die Methode gibt true zurück, wenn das objectToCheck eine Instanz der Klasse Car ist
// - Die Methode gibt false zurück, wenn das objectToCheck keine Instanz der Klasse Car ist

// - Lege eine statische Methode isElectricCar an
// - Die Methode hat einen Parameter namens objectToCheck - ausnahmsweise vom Typ any
// - Die Methode gibt true zurück, wenn das objectToCheck eine Instanz der Klasse ElectricCar ist
// - Die Methode gibt false zurück, wenn das objectToCheck keine Instanz der Klasse ElectricCar ist
// - Lege eine Datei app.ts an
// - Lege dort eine Instanz der Klasse Car und eine der Klasse ElectricCar an
// - Rufe die Methode [I](http://InstanceChecker.is)nstanceChecker.isCar mit den gerade erstellten Variablen auf und lass dir das Ergebnis auf der Konsole ausgeben
// - Rufe die Methode [I](http://InstanceChecker.is)nstanceChecker.isElectricCar mit den gerade erstellten Variablen auf und lass dir das Ergebnis auf der Konsole ausgeben
import Car from "./Car";
import ElectricCar from "./Electric-Car";

const opel = new Car("Michael", "Opel");
console.log("Is Opel a Car? ", InstanceChecker.isCar(opel));
console.log("Is Opel an ElectricCar? ", InstanceChecker.isElectricCar(opel));
const tesla = new ElectricCar("Elon", "Tesla");
console.log("Is Tesla a Car? ", InstanceChecker.isCar(tesla));
console.log("Is Tesla an ElectricCar? ", InstanceChecker.isElectricCar(tesla));

//! OOP-Class-TS-Level-1_11

// - Erstelle eine neue Klasse Activity in einer Datei activity.ts
// - Die Klasse hat die Eigenschaften name (string) und difficulty (number von 1 - 6)
// - difficulty soll eine get- und eine set-Methode haben und nur die gültigen Werte zulassen, andernfalls kommt eine Fehlermeldung
// - Lege eine Methode execute an, die auf der Konsole “Executing [Name der Aktivität]…” ausgibt
// - Leite eine neue Klasse Yoga davon ab (yoga.ts)
// - Die Klasse hat die zusätzliche Eigenschaft type vom Datentyp Enum
// → Werte sind: Hatha, Vinyasa, Ashtanga und Bikram
// - Leite eine neue Klasse Running von Activity ab
// - Lege dort die Eigenschaft distance vom Typ number an
// - Distance muss immer über den Konstruktor gesetzt werden
// - Lege zwei Methoden warmUp und coolDown an
// - Je nach Länge (distance) soll dort “Warming up for x minutes”, “Cooling down for x minutes” stehen
//     - ab 3 km: 2 Minuten Warmup und Cooldown
//     - ab 4.5 km: 3 Minuten
//     - ab 7 km: 4 Minuten
//     - mehr als 10 km: 5 Minuten
// - Achte darauf, dass du keinen doppelten Code schreibst (DRY-Prinzip)

// # ✨ Bonus

// - Erstelle eine HTML-Seite auf der du verschiedene der o. g. Aktivitäten anlegen kannst
import Activity from "./Activity";
// import Running from "./Runnings";
// import { Yoga, YogaType } from "./Yoga";
const swimming = new Activity("Swimming", 5);
swimming.execute();

const yoga = new Activity("Yoga", 5);
yoga.execute();
// yoga.get();
const running = new Activity("Running", 3);
running.execute();

//! OOP-Class-TS-Level-2_6
// - Lege eine Klasse Singer an, die eine Eigenschaft name: string hat
// - Lege 4 Klassen, die von Singer erben, die zusätzlich die Methode sing() haben, die einen String zurückgibt
// - Setze den Namen und gib bei der Methode in jeder Klasse eine bekannte Liedzeile zurück

// ```tsx
// class Beyonce extends Singer {
//     constructor(name: string) {
//        super(name);
//     }
//     sing(): string {
//         return "I'm a survivor, I'm gonna make it!";
//     }
// }
// ```

// - Lege eine Datei app.ts an
// - Schreibe eine Function letsSing in app.ts mit einem Parameter singer
// - Je nach Typ der Klasse soll ein passendes Emoji, das den/die Sänger:in repräsentiert, mit dem Songtext ausgegeben werden, z. B.

// ```tsx
// 👨🏻‍🦱 "Freddy Mercury" sings "We will, we will rock you."
// ```

// - Denk dir etwas aus, was ausgegeben wird, wenn kein passender Klassen-Typ gefunden wird
// - Rufe letsSing für alle Instanzen deiner Klassen auf und lass dir das Ergebnis auf der Konsole ausgeben
