//! Tuple-TS-Level-1_1
// - Erstelle ein Tuple names starWarsActor vom Typ string, string
// - die beiden Werte sind “Luke Skywalker”, “Mark Hamill”
// - Erstelle jetzt ein Array von diesen Tupeln, das mehrere StarWars-Schauspieler:innen enthält

// ```tsx
//     ["Luke Skywalker", "Mark Hamill"],
//     ["Darth Vader", "James Earl Jones"],
//     ["Yoda", "Frank Oz"],
//     ["Han Solo", "Harrison Ford"],
//     ["Princess Leia", "Carrie Fisher"]
// ```

// - Lass dir in einer Schleife den Inhalt auf der Konsole ausgeben, z. B. “Mark Hamill spielt Luke Skywalker” etc.

const starWarsActor: [string, string] = ["Luke Skywalker", "Mark Hamill"];
starWarsActor.push("Darth Vader", "James Earl Jones");
starWarsActor.push("Yoda", "Frank Oz");
starWarsActor.push("Han Solo", "Harrison Ford");
starWarsActor.push("Princess Leia", "Carrie Fisher");
console.log(starWarsActor);

//! Tuple-TS-Level-2_1
// - Wir wollen eine Mitarbeitendenverwaltung auf Basis eines Arrays erstellen
// - Erstelle eine Datei employee.ts
// - Dabei wollen wir im Array den Datentyp Tuple verwenden
// - Ein Tuple, das einen Mitarbeitenden repräsentiert besteht aus Nummer (number), Name (string), Abteilung (string) und Jahresgehalt (number)
// - Erstelle jetzt ein Array von diesen Tupeln, das mindestens 5 Mitarbeitende mit beliebigen Daten enthält
// - Lass dir alle Mitarbeitenden mit ihren Daten auf der Konsole ausgeben

const employee: [number, string, string, number] = [
  1,
  "Hans Maxi",
  "Sales",
  50.0,
];

employee.push(2, "Klaus Schmidt", "Marketing", 35.0);
employee.push(3, "Jochen Müller", "Marketing", 35.0);
employee.push(4, "Bert Assmann", "Marketing", 45.0);
employee.push(5, "Klaus Leber", "Finance", 25.0);

console.log(employee);

//! Enum-TS-Level-1_1
// - Definiere ein Enum Weekday mit den Wochentagen Monday bis Sunday
// - Erstelle eine Datei days-months.ts
// - Lass dir dort die Werte für Monday bis Sunday auf der Konsole ausgeben
// - Definiere ein Enum Month mit den Monaten January bis December
// - Lass dir alle Werte auf der Konsole ausgeben

enum Weekday2 {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}
// console.log(Weekday2[0]);
// console.log(Weekday2[1]);
// console.log(Weekday2[2]);
// console.log(Weekday2[3]);
// console.log(Weekday2[4]);
// console.log(Weekday2[5]);
// console.log(Weekday2[6]);

enum Month {
  January,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

// console.log("Months: ");
// console.log(Month[0]);
// console.log(Month[1]);
// console.log(Month[2]);
// console.log(Month[3]);
// console.log(Month[4]);
// console.log(Month[5]);
// console.log(Month[6]);
// console.log(Month[7]);
// console.log(Month[8]);
// console.log(Month[9]);
// console.log(Month[10]);
// console.log(Month[11]);
//? Nochmal neu mit for Schleife

for (const month in Month) {
  console.log("Months: ", Month[month]);
}

//! Enum-TS-Level-1_2
// - Definiere ein Enum PizzaSize mit den Größen Small, Medium, Large, Familie
// - Definiere ein weiteres Enum PizzaIngredients mit Werten wie Cheese, Onion, Salami - werde selbst kreativ und denke dir weitere Zutaten aus
// - Lege eine Typ Pizza mit den Eigenschaften size: PizzaSize und ingredients: PizzaIngredients[] an
// - Lege 4 Pizza-Objekte mit verschiedenen Größen und Belägen an

enum PizzaSize {
  Small = "Small",
  Medium = "Medium",
  Large = "Large",
  Familie = "Familie",
}
enum PizzaIngredients {
  Cheese = "Cheese",
  Onion = "Onion",
  Salami = "Salami",
}

type Pizza = { size: PizzaSize; topping: PizzaIngredients };

const pizza1: Pizza = {
  size: PizzaSize.Large,
  topping: PizzaIngredients.Cheese,
};
console.log(pizza1);
const pizza2: Pizza = {
  size: PizzaSize.Medium,
  topping: PizzaIngredients.Onion,
};
console.log(pizza2);
const pizza3: Pizza = {
  size: PizzaSize.Small,
  topping: PizzaIngredients.Salami,
};
console.log(pizza3);

//! Enum-TS-Level-2_1
enum HtmlError {
  Ok = 200,
  Redirect = 300,
  BadRequest = 400,
  InternalServerError = 500,
}
function showHtmlError() {
  const randomNum = Math.floor(Math.random() * 5) + 1;
  //   if (randomNum === 0 || randomNum === 1 || randomNum === 2) {
  if (randomNum <= 2) {
    console.log(HtmlError.Ok);
  } else if (randomNum === 3) {
    console.log(HtmlError.Redirect);
  } else if (randomNum === 4) {
    console.log(HtmlError.Redirect);
  } else {
    console.log(HtmlError.InternalServerError);
  }
}

showHtmlError();

//! Enum-TS-Level-2_2
// - Du sollst eine Farbauswahl mit Hilfe von Buttons in einem Online-Shop erstellen
// - Definiere ein Enum ClothingColor mit dem Farbnamen und der Entsprechung in Hex-Werten
// - Es gibt diese Farben: Gelb, Orange, Pink, Blau, Lila, und Grau
// - Suche dir im Internet passende Farbwerte (Hex-Werte) für Gelb, Orange, Pink, Blau, Lila und Grau (z. B. Gelb = #FFFF00)
// - Lege dir ein Array mit allen Farben an: allColors: Color[]
// - Gehe in einer Schleife das Array durch und erstelle Buttons mit der jeweiligen Farbe als Hintergrundfarbe

enum ClothingColor {
  Gelb = "#FFFF00",
  Orange = "#EA710A",
  Pink = " #D60AEA",
  Blau = "#2596be",
  Lila = "#780AEA",
  Grau = "#AAA9AA",
}

// const allColors: ClothinColor[] = Object.values(ClothinColor);

const allColors: ClothingColor[] = [
  ClothingColor.Gelb,
  ClothingColor.Orange,
  ClothingColor.Pink,
  ClothingColor.Blau,
  ClothingColor.Lila,
  ClothingColor.Grau,
];

// Funktion zur Rückgabe des Namens der Farbe basierend auf dem Enumwert
function getColorName(color: ClothingColor): string {
  switch (color) {
    case ClothingColor.Gelb:
      return "Gelb";
    case ClothingColor.Orange:
      return "Orange";
    case ClothingColor.Pink:
      return "Pink";
    case ClothingColor.Blau:
      return "Blau";
    case ClothingColor.Lila:
      return "Lila";
    case ClothingColor.Grau:
      return "Grau";
    default:
      return "";
  }
}

console.log(allColors);
const container = document.getElementById("color-buttons-container");
// Funktion zurm erstellen der Buttons mit ihren jeweiligen Farbwerten und dem Farbnamen auf dem button

function createColorButtons() {
  if (container) {
    allColors.forEach((color) => {
      const button = document.createElement("button");
      button.textContent = getColorName(color); // Holt den Farbnamen aus der Funktion getColorName
      button.style.backgroundColor = color; //nimmt den HexWert aus dem Enum
      document.body.appendChild(button);
    });
  }
}

createColorButtons();

//!Set-TS-Level-1_1
// - Erstelle ein Set, das Strings enthält → new Set
// - Es soll starWarsCharacters heißen und die Anfangswerte “Luke Skywalker”, “Darth Vader” und “Obi Wan Kenobi” beinhalten
// - Lass dir den Inhalt des Sets auf der Konsole ausgeben
// - Füge “Leia Organa” hinzu
// - Lass dir den Inhalt des Sets auf der Konsole ausgeben
// - Füge erneut “Leia Organa” hinzu
// - Lass dir den Inhalt des Sets auf der Konsole ausgeben

const starWarsCharacters = new Set<string>();
starWarsCharacters.add("Luke Skywalker");
starWarsCharacters.add("Darth Vader");
starWarsCharacters.add("Obi Wan Kenobi");
starWarsCharacters.add("Leia Organa");
console.log(starWarsCharacters);
starWarsCharacters.add("Leia Organa");
console.log(starWarsCharacters);

//! Map-TS-Level-1_1
// - Wir wollen unsere fünf Lieblingsbands mit ihren Mitgliedern speichern
// - Dazu verwenden wir den Datentyp Map
// - Erstelle eine Datei favoriteBands.ts
// - Lege dort eine Map vom Datentyp string, string[] für den Bandnamen und die Mitglieder an
// - Nimm gerne deine eigenen Lieblingsbands, ansonsten such dir etwas aus diesem Code aus

// ```tsx
// "The Beatles", ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
// "Queen", ["Freddie Mercury", "Brian May", "Roger Taylor", "John Deacon"]
// "Kiss", ["Gene Simmons", "Paul Stanley", "Ace Frehley", "Peter Criss"]
// "NWA", ["Ice Cube", "Dr. Dre", "Eazy-E", "MC Ren"]
// "Kraftwerk", ["Ralf Hütter", "Florian Schneider", "Karl Bartos", "Wolfgang Flür"]
// "Pink Floyd", ["Roger Waters", "David Gilmour", "Nick Mason", "Richard Wright"]
// "Metallica", ["James Hetfield", "Lars Ulrich", "Kirk Hammett", "Robert Trujillo"]
// "The Rolling Stones", ["Mick Jagger", "Keith Richards", "Charlie Watts", "Ronnie Wood"]
// "U2", ["Bono", "The Edge", "Adam Clayton", "Larry Mullen Jr."]
// ```

// - Lass dir die Größe deiner Band-Map ausgeben
// - Füge eine weitere Band zur Band-Map hinzu
// - Lass dir erneut die Größe deiner Band-Map ausgeben
// - Hole dir einen Eintrag aus der Map, z. B. Kraftwerk
// - Lass dir dort den Namen des letzten Mitglieds auf der Konsole ausgeben

const favoriteBands = new Map<string, string[]>();
favoriteBands.set("Pink Floyd", [
  "Roger Waters",
  "David Gilmour",
  "Nick Mason",
  "Richard Wright",
]);
console.log(favoriteBands.size);

favoriteBands.set("Metallica", [
  "James Hetfield",
  "Lars Ulrich",
  "Kirk Hammett",
  "Robert Trujillo",
]);
console.log(favoriteBands.size);
console.log(favoriteBands.get("Pink Floyd"));
const pinkFloydArray = favoriteBands.get("Pink Floyd");
if (pinkFloydArray) {
  console.log(pinkFloydArray[3]);
}

//! BONUS----------------------------------

//! Map-TS-Level-2_1
// - Wir bauen auf der Aufgabe der Lieblingsbands auf
// - Prüfe, ob die Band “Metallica” in der Map enthalten ist
// - Lege einen doppelten Eintrage an, also einen Bandnamen (=Key), den du bereits verwendet hast mit anderen Mitgliedern
// - Hole dir den Eintrag mit get aus der Map aus lasse ihn auf der Konsole ausgeben
// - Welchen Eintrag bekommst du zurück? Schreibe es als Kommentar in deinen Code

if (favoriteBands.has("Metallica")) {
  console.log("Es gibt Metallica");
}

favoriteBands.set("Metallica", ["Ice Cube", "Dr. Dre", "Eazy-E", "MC Ren"]);
console.log(favoriteBands.get("Metallica"));
//["Ice Cube", "Dr. Dre", "Eazy-E", "MC Ren"]

//!Set-TS-Level-2_1
// - Erstelle ein Array vom Typ String mit Marvel-Charakteren: Iron Man, Captain America, Thor, Hulk, Black Widow, Spider Man
// - Füge in das Array nochmal Iron Man und Thor hinten hinzu
// - Lass dir den Inhalt des Arrays auf der Konsole ausgeben
// - Erstelle ein neues Set, dass das Array als Basis hat
// - Lass dir den Inhalt des Sets auf der Konsole ausgeben
// - Was fällt auf?

const marvelCharcters: string[] = [
  "Iron Man",
  "Captain America",
  "Thor",
  "Hulk",
  "Black Widow",
  "Spider Man",
];
console.log(marvelCharcters);
marvelCharcters.push("Iron Man");
marvelCharcters.push("Thor");
console.log(marvelCharcters);

const marvelCharctersSet = new Set<string>(marvelCharcters);
console.log(marvelCharctersSet);
marvelCharctersSet.add("Iron Man");
marvelCharctersSet.add("Thor");
console.log(marvelCharctersSet);
// Es gibt im set keine doppelten Einträge, im Array schon

//! Map-TS-Level-3_1

// Wir bauen weiterhin auf der Aufgabe der Map der Lieblingsbands auf
// Lass dir alle Mitglieder auf der Konsole ausgeben, deren Name länger als 12 Zeichen (inkl. Leerzeichen) ist
// Beispiel für eine Zeile in der Ausgabe:
// Band: Metallica, Member: Robert Trujillo, Length: 15

function getAllMembersLongerThan12() {
  favoriteBands.forEach((members, band) => {
    members.forEach((member) => {
      if (member.length > 12) {
        console.log(
          `Band: ${band}, Member: ${member}, Length: ${member.length}`
        );
      }
    });
  });
}
getAllMembersLongerThan12();

//! Enum-TS-Level-3_1

// - Erstelle ein Enum BasicShape mit den Werten Square, Circle und Triangle und Reactangle
// - Erstelle ein weiteres Enum ExtendedShape mit den Werten Ellipse, Rhombus
// - Das Enum ExtendedShape soll auch die Werte von Basic-Shape enthalten ohne dass du sie kopierst

enum BasicShape {
  "Square",
  "Circle",
  "Triangle",
  "Reactangle",
}

enum ExtendedShape {
  "Ellipse",
  " Rhombus",
  BasicShape,
}

console.log(ExtendedShape);
console.log(BasicShape);
