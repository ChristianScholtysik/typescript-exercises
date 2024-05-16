//* Set ist wie ein Array nur mit eindeutigen WErten

const cocktails: string[] = [
  "Pina Colada",
  "Mojito",
  "Long Island Ice Tea",
  "Mojito",
  "Cuba Libre",
];
console.log(cocktails);
console.log(cocktails.length);

const cocktailSet = new Set<string>();
cocktailSet.add("Pina Colada");
cocktailSet.add("Cuba Libre");
cocktailSet.add("Pina Colada");
cocktailSet.add("Mojito");
console.log(cocktailSet);
console.log(cocktailSet.size);

if (cocktailSet.has("Mojito")) {
  console.log("Es gibt Mojito");
}
//? Kein Indexzugriff möglich
//console.log(cocktailSet[0])

//? zum Aufräumen eines Array --> doppelte Werte entfernen
const cleanUpCocktailsSet = new Set(cocktails);
console.log({ cleanUpCocktailsSet });
//! Mit Array.from kann ich Daten in ein Array umwandeln
const cleanedUpArray = Array.from(cleanUpCocktailsSet);
console.log({ cleanedUpArray });

//* Map spezielles Objekt - Nachschlagewerk
const germanEnglishDictionary = new Map<string, string>();
germanEnglishDictionary.set("Tier", "animal");
germanEnglishDictionary.set("froh", "happy");
germanEnglishDictionary.set("Montag", "monday");
germanEnglishDictionary.forEach((value, key) => {
  console.log(`${key} heißt übersetzt ${value}`);
});

console.log(germanEnglishDictionary.get("Tier"));

const italianMenue = new Map<number, string>();
italianMenue.set(100, "Bruscetta");
italianMenue.set(200, "Pizza Margerita");
italianMenue.set(210, "Pizza Funghi");
console.log("Nr 210 rausholen: ", italianMenue.get(210));

//* tuple -Array mit verschiedenen Datentypen
const nameAgeSize: [string, number, number] = ["Annie", 22, 1.73];
console.log(nameAgeSize[0]);
// nameAgeSize[0 ]=3435
nameAgeSize.push("X-Beliebiges");
console.log(nameAgeSize);
//? besser ist die Schreibweise mit Type
type SimplePerson = {
  name: string;
  age: number;
  size: number;
};
const person5: SimplePerson = {
  name: "Annie",
  age: 22,
  size: 1.73,
};
console.log(person5.name);
