//! BONUS : OOP-Interface-TS-Level-3_1

// - Erstelle ein Interface IIceCreamService, das Methoden und Eigenschaften für die Bestellung und Verwaltung von Eiscreme in einer Eisdiele definiert.
// - Das Interface sollte folgende Elemente enthalten:
//     - listFlavors(): string[]: Diese Methode gibt eine Liste aller verfügbaren Eiscreme-Geschmacksrichtungen zurück.
//     - orderIceCream(flavor: string, scoops: number): string: Diese Methode nimmt eine Bestellung für eine bestimmte Geschmacksrichtung und Anzahl von Kugeln Eiscreme entgegen und gibt eine Bestätigungsnachricht zurück.
//     - addNewFlavor(flavor: string): void: Diese Methode fügt eine neue Eiscreme-Geschmacksrichtung zum Sortiment der Eisdiele hinzu.
//     - removeFlavor(flavor: string): void: Diese Methode entfernt eine bestimmte Eiscreme-Geschmacksrichtung aus dem Sortiment der Eisdiele.
//     - isFlavorAvailable(flavor: string): boolean: Diese Methode überprüft, ob eine bestimmte Eiscreme-Geschmacksrichtung verfügbar ist und gibt true zurück, wenn sie verfügbar ist, andernfalls false.
//     - getFlavorPrice(flavor: string): number: Diese Methode gibt den Preis für eine bestimmte Eiscreme-Geschmacksrichtung zurück. Der Preis wird aktuell fest intern in der Klasse für die Geschmacksrichtungen hinterlegt.
// - Implementiere dann eine Klasse IceCreamParlor, die das Interface IIceCreamService implementiert
// - Die Methoden sollen entsprechend implementiert werden, um Eiscreme-Bestellungen zu verwalten und das Sortiment der Eisdiele zu aktualisieren.
// - Lege hierzu alle benötigten internen Eigenschaften und ggf. Methoden an
// - Die Klasse soll keine Eigenschaften haben, die von außen verfügbar sind- es soll nur über die Methoden interagiert werden

// # ✨ Bonus

// - Erstelle eine Oberfläche für eine Eisdiele in der man
//     - alle Geschmacksrichtungen sieht
//     - neue Eissorten anlegen und löschen kann
//     - den Namen einer Eissorte eingibt und sieht, ob sie verfügbar ist
//     - den Preis eine Eissorte abrufen kann

import IceCreamParlor from "./contracts/ IceCreamParlor,";
import IceCream from "./contracts/IceCream";

const parlor = new IceCreamParlor();
const mangoIce = new IceCream("Mango", 2.0);
const joghurtIce = new IceCream("Joghurt", 1.7);
const hazelnutIce = new IceCream("Hazelnut", 2.2);
const vanillaIce = new IceCream("Vanilla", 1.6);

parlor.addNewFlavor(mangoIce.flavor);
parlor.addNewFlavor(joghurtIce.flavor);
parlor.addNewFlavor(hazelnutIce.flavor);
parlor.addNewFlavor(vanillaIce.flavor);
console.log(parlor.listFlavors());

const vanillaIceScoops = (vanillaIce.scoops = 4);
console.log(vanillaIceScoops);
console.log(parlor.orderIceCream(vanillaIce.flavor, 2));
console.log(parlor.isFlavorAvailable("Mango"));
parlor.removeFlavor("Hazelnut");
console.log(parlor.listFlavors());
console.log(
  `The price for one Scoop of ${parlor.flavors[2]} is ${parlor.getFlavorPrice(
    vanillaIce.price.toString()
  )} Euro`
);
