import IceCreamFlavor from "./IceCremFlavor";
import SchoolClass from "./SchoolClass";
import SchoolClassWithStudents from "./SchoolClassWithStudents";
import Person from "./Person";
import Car from "./Car";
import Driver from "./Driver";

//! - Lege in einer neuen Datei eine Klasse mit dem Namen IceCreamFlavor an
// - Die Klasse soll folgende Attribute haben
// - name: string
// - price: number
// - isPopular: boolean
// - description: string → optional
// - name soll beim Anlegen ‘’ sein, price = 0, isPopular = false und description = undefined
// - Lege 4 Instanzen von IceCreamFlavor an und setze deren Eigenschaften
// - Lege die 4 Instanzen in einem Array ab
// - Lass dir von allen populären Eissorten (isPopular) den Namen auf der Konsole ausgeben
const vanillaIce = new IceCreamFlavor();
vanillaIce.name = "Vanilla";
vanillaIce.price = 2.5;
vanillaIce.isPopular = true;

const chocolateIce = new IceCreamFlavor();
chocolateIce.name = "Chocolate";
chocolateIce.price = 2.8;
chocolateIce.isPopular = false;

const straberryIce = new IceCreamFlavor();
straberryIce.name = "Strawberry";
straberryIce.price = 2.3;
straberryIce.isPopular = true;

const hazelnutIce = new IceCreamFlavor();
hazelnutIce.name = "Hazelnut";
hazelnutIce.price = 2.8;
hazelnutIce.isPopular = true;

const IceCreamFlavorCollection: IceCreamFlavor[] = [
  vanillaIce,
  chocolateIce,
  straberryIce,
  hazelnutIce,
];

function showPopularIceCreamFlavors() {
  IceCreamFlavorCollection.forEach((flavor) => {
    if (flavor.isPopular) {
      console.log(flavor.name);
    }
  });
}

showPopularIceCreamFlavors();

//! OOP-Class-TS-Level-1_2
// - Lege in einer neuen Datei eine Klasse mit dem Namen SchoolClass an
// - Im Konstruktor der Klasse SchoolClass soll auf der Konsole ausgegeben werden: “School class creation successful”
// - Es sollen zwei Konstruktorparameter übergeben werden: id und name, diese setzen die entsprechenden Eigenschaften der Klasse
// - die Eigenschaft endDate soll optional sein und wird nicht über den Konstruktor angelegt
// - Lege drei SchoolClasses an - sie müssen mit Konstruktorparametern angelegt werden
// - Ändere bei zwei SchoolClasses nachträglich den Namen über das Setzen der Eigenschaft

const classElephant = new SchoolClass("Elephant", "5536");
const classPenguin = new SchoolClass("Penguin", "4786");
const classLion = new SchoolClass("Lion", "2366");

console.log(classElephant);
console.log(classPenguin);
console.log(classLion);

classElephant.name = "Dumbo";
classPenguin.name = "Kowalski";
console.log(classElephant);
console.log(classPenguin);
console.log(classLion);

//! OOP-Class-TS-Level-2_1
// Wir wollen unsere Schulklassenverwaltung (SchoolClass) nun weiter ausbauen.

// **a)** Wir möchte die Schulklasse mit Leben füllen und brauchen dafür eine Klasse Person mit folgenden Attributen/Eigenschaften:

// - id
// - firstName
// - lastName
// - birthday

// Überlege dir hierzu selbst die passenden Datentypen.

// **b)** Füge der Klasse SchoolClass ein weiteres Attribut/eine Eigenschaft hinzu, und zwar ein Array aus Personen.

// **c)** Teste deine Klassen und Methoden in der app.ts. Erstelle eine Schulklasse und füge mehrere Personen hinzu

// d) Lass dir alle Personen aus der Schulklasse ausgeben

// **Tip:** du kannst eine Schleife zur Erstellung von den Personen benutzen.

const student1 = new Person("123", "John", "Doe");
const student2 = new Person("456", "Jane", "Doe");
const students = [student1, student2];

const classMath = new SchoolClassWithStudents("Mathestunde", "789", students);

console.log(classMath);
console.log(classMath.students);
console.log(classMath.students[1].firstName);

//! OOP-Class-TS-Level-2_2
// Erstelle eine Klasse Car mit folgenden Eigenschaften:

// - brand (Marke)
// - constructionYear(Baujahr)
// - currentSpeed (aktuelle Geschwindigkeit)

// Überlege dir sinnvolle Datentypen für die Eigenschaften.

// Erstelle eine separate Klasse Driver mit folgenden Eigenschaften:

// - firstName (Vorname)
// - lastName (Nachname)
// - age (Alter)
// - car (Auto)

// Überlege dir sinnvolle Datentypen für die Eigenschaften.

// Im Konstruktor von Driver soll bereits das zugehörige Auto übergeben und gesetzt werden.

// Zu guter Letzt sollst du in der Datei app.ts, mehrere Autos und Fahrer erstellen und miteinander verknüpfen

const mercedes = new Car("Mercedes Benz", 2003, 190);
const porsche = new Car("Porsche", 2023, 294);
const opel = new Car("Opel", 1983, 140);

const michaela = new Driver("Michaela", "Schmidt", 32, mercedes);
const bernd = new Driver("Bernd", "Ecclestone", 82, porsche);
const till = new Driver("Till", "Schweiger", 55, opel);

console.log(michaela);
console.log(bernd.lastName);
console.log(till.car.constructionYear);
