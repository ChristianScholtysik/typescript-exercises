//! OOP-Class-TS-Level-1_3
// - Definiere eine Klasse Animal
// - sie soll die Eigenschaften species (string), age (number) und color (string) enthalten
// - Implementiere Get- und Set-Methoden für jede Eigenschaft.
// - Definiere eine weitere Klasse Person, die die Eigenschaften name ****(string), birthday (Date) und gender (Enum) enthält.
// - Implementiere Get- und Set-Methoden für name und gender, birthday soll im Konstruktor gesetzt werden und ansonsten nur eine Get-Methode haben.

import Animal from "./Animal";
import Person, { Gender } from "./Person";

const lassie = new Animal("Dog", 5, "brown-white");
console.log(lassie);
lassie.age = 11;
console.log(lassie);

const person = new Person("Harry Potter", new Date("2001-07-24"), Gender.Male);
console.log(person.name);
person.name = "Ron Weasley";
console.log(person.name);
console.log(person.birthday);
// person.birthday = new Date();
console.log(person.gender);
person.gender = Gender.Female;
console.log(person.gender);

//! OOP-Class-TS-Level-1_13
// - Wir bauen auf den Klassen Car und Driver auf [OOP-Class-TS-Level-2_2](https://www.notion.so/OOP-Class-TS-Level-2_2-40721ee4c13c49bd8d7b73b18a5bc6bf?pvs=21)
// - in der Klasse Car
//     - soll constructionYear nur über den Konstruktor gesetzt werden können
//     → Wert ist nur über einen Getter (get-Methode) abrufbar
//     - soll es eine Methode getSpeedInfo(): string geben mit dieser Logik geben
//         - currentSpeed ≤ 40 → Rückgabewert ‘Driving slowly’
//         - currentSpeed > 40 und ≤ 70 → Rückgabewert ‘Driving normally’
//         - currentSpeed > 70 und ≤ 120 → Rückgabewert ‘Driving fast’
//         - currentSpeed > 120 und ≤ 190 → Rückgabewert ‘Driving really fast’
//         - currentSpeed> 190 → ‘WTF’
// - Lege in einer neuen Datei ein Enum namens CarType an

//     Werte → Unknown, Sedan, SUV, Coupe, Convertible, Hatchback, Truck

// - erweitere die Klasse Car um eine neue Eigenschaft carType: CarType
// - in der Klasse Driver
//     - soll es eine weitere Eigenschaft licenseFromYear: number geben, die nur über den Konstruktor gesetzt werden kann
//     → Wert ist nur über einen Getter (get-Methode) abrufbar
//     - soll es eine Methode getCarType(): CarType geben, die den CarType des aktuellen Autos als Text ausgibt

import Car from "./Car";
import { CarType } from "./carType";
import Driver from "./Driver";

const maserati = new Car("Maserati", 1995, 135, CarType.Coupe);
console.log(maserati);
// maserati.constructionYear=2001
console.log(maserati.currentSpeed);
maserati.currentSpeed = 40;
console.log(maserati.currentSpeed);
const manuel = new Driver("Manu", "Schmidt", 44, maserati, 1998, CarType.Coupe);
console.log(manuel);
// manuel._licenseFromYear = 1983;
console.log(manuel);

console.log(maserati.carType);
// maserati.carType = "Sedan";

//! OOP-Class-TS-Level-1_12
// - Wir bauen auf der Klasse IceCreamFlavors [OOP-Class-TS-Level-1_1](https://www.notion.so/OOP-Class-TS-Level-1_1-4ba7a4c6beb746a89d3faf3c30f6ec7e?pvs=21) auf
// - Die Klasse soll drei Methoden bekommen
//     - getTotalPrice(numberOfScoops: number)
//     → gibt den Gesamtpreis anhand der übergebenen Anzahl an Eiskugeln auf der Konsole aus
//     - printInfo()
//     → gibt z. B. Folgendes auf der Konsole aus

//     ```tsx
//     'Flavor Vanilla is popular and costs 2.10 Euro.'
//     ```

//     - getLengthOfDescription()
//     → gibt die Textlänge von description aus oder 0, wenn die Eigenschaft nicht gesetzt ist
// - Rufe die Methode bei deinen bereits bestehenden Instanzen von IceCreamFlavor auf

// # ✨ Bonus

// - Stelle alle IceCreamFlavors als Divs im HTML mit Name, Preis und einer Kennzeichnung bei populären Eissorten (z. B. Stern) dar
// - Pro IceCreamFlavor soll es einen Button +1 geben, mit dem man die Anzahl der Kugeln nach oben setzen kann → es soll dann jeweils die getTotalPrice-Methode der entsprechenden IceCreamFlavor-Instanz aufgerufen und das Ergebnis auch im HTML angezeigt werden

import IceCreamFlavor from "./IceCreamFlavor";

const vanilla = new IceCreamFlavor("Vanilla", 1.5, true);
const strawberry = new IceCreamFlavor("Strawberry", 1.8, true);

console.log(vanilla);
vanilla.description = "very tasty ice cream flavor";
vanilla.scoops = 6;
vanilla.totalPrice;
console.log("Vanilla Description: ", vanilla.description);
vanilla.getLengthOfDescription;

strawberry.scoops = 3;
strawberry.totalPrice;
strawberry.getLengthOfDescription;

//! Bonus
// - Stelle alle IceCreamFlavors als Divs im HTML mit Name, Preis und einer Kennzeichnung bei populären Eissorten (z. B. Stern) dar
// - Pro IceCreamFlavor soll es einen Button +1 geben, mit dem man die Anzahl der Kugeln nach oben setzen kann → es soll dann jeweils die getTotalPrice-Methode der entsprechenden IceCreamFlavor-Instanz aufgerufen und das Ergebnis auch im HTML angezeigt werden

const chocolate = new IceCreamFlavor("Chocolate", 3.0, false);
const raspberry = new IceCreamFlavor("Raspberry", 2.0, true);
const malaga = new IceCreamFlavor("Malaga", 3.2, false);
const hazelnut = new IceCreamFlavor("Hazelnut", 2.7, true);
const cookiesAndCream = new IceCreamFlavor("Cookies & Cream", 3.5, true);
const coffee = new IceCreamFlavor("Coffee", 2.9, false);
const pistachio = new IceCreamFlavor("Pistachio", 3.1, true);
const mintChococlate = new IceCreamFlavor("Mint & Chocolate", 3.4, false);

const flavors = [
  vanilla,
  strawberry,
  raspberry,
  chocolate,
  malaga,
  hazelnut,
  coffee,
  cookiesAndCream,
  pistachio,
  mintChococlate,
];
const iceCreamMenue = document.getElementById("iceCreamMenu");

if (iceCreamMenue) {
  flavors.forEach((flavor) => {
    createIceCreamFlavorCard(flavor);
  });
}

function createIceCreamFlavorCard(flavor: IceCreamFlavor) {
  const card = document.createElement("div");
  card.className = "IceCreamCard";

  if (flavor.isPopular) {
    const star = document.createElement("h3");
    star.innerHTML = "⭐️";
    card.appendChild(star);
  } else {
    const star = document.createElement("h3");
    star.innerHTML = "❌";
    card.appendChild(star);
  }

  const headlineElement = document.createElement("h2");
  headlineElement.innerText = flavor.name;
  card.appendChild(headlineElement);

  const priceElement = document.createElement("p");
  priceElement.innerText = `💰 Price: $${flavor.price.toFixed(2)}`;
  card.appendChild(priceElement);

  const scoopsElement = document.createElement("p");
  scoopsElement.innerText = `🍨 Scoops: ${flavor.scoops}`;
  card.appendChild(scoopsElement);

  const totalPriceElement = document.createElement("p");
  totalPriceElement.innerText = `Total Price: ${flavor.totalPrice.toFixed(
    2
  )} Euro`;
  totalPriceElement.className = "price";
  card.appendChild(totalPriceElement);

  const plusButton = document.createElement("button");
  plusButton.innerText = "+1";
  card.appendChild(plusButton);

  iceCreamMenue?.appendChild(card);

  plusButton.addEventListener("click", () => {
    flavor.increaseScoops();
    scoopsElement.innerText = `Scoops: ${flavor.scoops}`;
    totalPriceElement.innerText = `Total Price: ${flavor.totalPrice.toFixed(
      2
    )} Euro`;
  });
}

//! OOP-Class-TS-Level-2_3
// - Definiere eine Klasse Customer
// - sie soll die Eigenschaften name (string), email (string), address (string), postalCode (number) und city (string) enthalten
// - Implementiere Get- und Set-Methoden für jede Eigenschaft.
// - vor dem Setzen des Namens soll geprüft werden, dass die Länge 60 Zeichen nicht überschreitet. Beim Überschreiten soll eine sinnvolle Fehlermeldung auf der Konsole ausgegeben werden. Der Wert wird dann nicht gesetzt.
// - vor dem Setzen der E-Mail-Adresse soll geprüft werden, ob die Adresse ein @-Zeichen und einen Punkt enthält. Ggf. soll eine sinnvolle Fehlermeldung auf der Konsole ausgegeben werden. Der Wert wird dann nicht gesetzt.
// - vor dem Setzen der Postleitzahl (postalCode) soll geprüft werden, ob die Postleitzahl 5-stellig ist und zwischen 00000 und 99999 liegt. Ggf. soll eine sinnvolle Fehlermeldung auf der Konsole ausgegeben werden. Der Wert wird dann nicht gesetzt.

import Customer from "./Customer";

const customer1 = new Customer(
  "Tim Mc Thommy",
  "test@test.de",
  "Mainstreet 3",
  12345,
  "Musterhausen"
);
console.log(customer1);

customer1.name =
  "Sir Arthur Timothey Ronald FerdinandIII Marc Maximilian Felix North West East the one and only Mc Thommy";
console.log(customer1);

customer1.email = "timthomsen.com";
console.log(customer1);
customer1.email = "tim@thomsencom";
console.log(customer1);
customer1.email = "tim@thomsen.com";
console.log(customer1);

customer1.postalCode = 475;
console.log(customer1);
customer1.postalCode = 4757888965;
console.log(customer1);

//! BONUS: OOP-Class-TS-Level-3_2

// Bau auf der Übung [OOP-Class-TS-Level-2_3](https://www.notion.so/OOP-Class-TS-Level-2_3-bc1ea35489934dc68ba0d9e480b314a5?pvs=21)  eine Klasse Customer auf

// - erweitere die E-Mail-Prüfung mit Hilfe dieses npm Pakets https://www.npmjs.com/package/email-validator
// - Du sollst eine eigene Klasse Validator anlegen, in der später auch noch weitere Methoden hinzukommen könnten
// - schreibe eine statische Methode validateEmail in einer neuen Klasse Validator
// - dort wird die Methode aus dem npm-Paket verwendet
// - in der Klasse Customer soll dann im Setter die Methode Validator.validateEmail verwendet werden

customer1.email = "tim@dsfsadasd";
console.log(customer1);
customer1.email = "timdsfsadasd.com";
console.log(customer1);
customer1.email = "tim@dsfsadasd.com";
console.log(customer1);
