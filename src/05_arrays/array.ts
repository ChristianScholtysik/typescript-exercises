console.clear();

//? Array von strings deklarieren
const shoppingItems: string[] = [
  "Beer",
  "brokkoli",
  "Peanuts",
  "IceCream",
  "Coffee",
  "Toilet Paper",
];

console.log(shoppingItems[2]);
console.log(shoppingItems[3]);

//? Wert ersetzen
shoppingItems[2] = " Peanut Butter";

console.log({ shoppingItems });

console.log("Länge Anfang:", shoppingItems.length);
//? am Ende ein neues Element einfügen: push
shoppingItems.push("Pasta");
console.log("Länge Ende:", shoppingItems.length);
console.log({ shoppingItems });

//? mehrere Elemente hinzufügen
const lengthAfterTwoNewItems = shoppingItems.push("Pizza", "Soap");
console.log({ shoppingItems });

//? ein Element entfernen:pop
const reduceItem = shoppingItems.pop();
console.log({ reduceItem });
console.log(shoppingItems.length);

//? number-Array
const prices: number[] = [12, 99, 2.32, 33.44, 77.44];
console.log(prices[2]);

//?boolean-Array
const booleanArray: boolean[] = [true, false, false, true];
console.log(booleanArray[2]);

//? erstes Element entfernen
const firstElement = shoppingItems.shift();
console.log(firstElement);
console.log("Länge nach Shift:", shoppingItems.length);

//? vorne im Array ein Element einfügen:unshift
const lengthAfterUnshift = shoppingItems.unshift("Tea", "Cookies");
console.log("Länge nach unshift:", lengthAfterUnshift);
console.log(shoppingItems);

//? Element entfernen:splice = ab Index in Länge

const shoppingItems2: string[] = [
  "Beer",
  "Tea",
  "Ice Cream",
  "Coffee",
  "Broccoli",
];
const spliceElement = shoppingItems2.splice(2, 2);
console.log(spliceElement);

//? Element einfügen: splice= ab Index, dann immer 0 wenn nix gelöscht werden soll, dann neues Element
const addedElement = shoppingItems2.splice(1, 0, "Eggplants");
console.log({ shoppingItems });

//? slice: ohne angaben erstellt kopie
const allItemsSliced = shoppingItems.slice();
console.log({ allItemsSliced });

//? slice: kopie ab Index 2
const allItemsSliced2 = shoppingItems.slice(2);
console.log({ allItemsSliced2 });

//? slice start der kopie ab index 2 und hör bei 4 auf
const allItemsSliced3 = shoppingItems.slice(2, 4);
console.log({ allItemsSliced3 });

//? split
const songText: string = "We all live in a yellow submarine";
const yellowSubmarineWords = songText.split(" "); //aufteilen ab Leerzeichen
console.log({ yellowSubmarineWords });

const lyrics: string =
  "In the town where I was born.Lived a man who sailed to sea. And he told us of his life, In the land of submarines So we sailed on to the sun. 'Til we found a sea of green And we lived beneath the waves In our yellow submarine.";
const lyricsSentence = lyrics.split(".");
console.log({ lyricsSentence });
