//* Wie legen wir bisher Bauplän efür Objekte an

type DogOld = {
  name: string;
  age: number;
  owner: string;
  breed: string;
  favoriteFood: string;
};
const fluffy: DogOld = {
  name: "Fluffy",
  age: 6,
  owner: "Pablo",
  breed: "Labradoodle",
  favoriteFood: "Pablo Dog Food",
};
console.log(fluffy.name);

//* Dogs anlegen auf Basis der Klasse Dog

import Dog from "./Dog";
import Owner from "./Owner";
//? Variablennamen für den anzulegenden Hund
//? alle Objekte von der Klasse Dog nenenen sich Instanz und die werden immer mit new und Klassennamen und rundne Klammern angelegt
const wuffy: Dog = new Dog("Wuffy");

//? auf die Eigenscaften von wuffy kann ich mit einem Punkt zugreifen

//wuffy.name = "Wuffy";
wuffy.age = 3;
wuffy.favoriteFood = "Frolic";
wuffy.owner_old = "John";

console.log({ wuffy });

const ownerKali = new Owner("Lisa", "Main Street", "33652", "Duesseldorf");

const kali = new Dog("Kali", ownerKali);
kali.name = "Kali";
kali.age = 8;

kali.breed = "Malteser";
console.log(kali.owner.city);
console.log(kali);
