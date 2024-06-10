//! OOP-IntersectionType-Level-1_2
// - Wir erweitern die Aufgabe [OOP-IntersectionType-Level-1_1](https://www.notion.so/OOP-IntersectionType-Level-1_1-f58e8d4e842648ea86853820f604df35?pvs=21)
// - Lege eine Datei app.ts an
// - Schreibe ein Funktion mixCocktail mit zwei Parametern
//     - alcohol: Alcohol
//     - mixer: Mixer
// - Rückgabewert ist vom Intersection-Type Cocktail
// - das zurückgegebene Objekt soll die Eigenschaften vom übergebenen alcohol und mixer enthalten
// - bei Feld name wird eine Kombination aus beiden Objekten gesetzt, z. B.
// alcohol.name = ‘Wodka’ und [mixer.name](http://mixer.name) = ‘Lemon’ ⇒ ‘Wodka Lemon’
// - Lege 2 Alkohol und zwei Mischgetränke an
// - Rufe die Methode mixCocktail mit allen Kombinationen auf

import { Alcohol, Mixer } from "../27_exercises/alcohol";
type Cocktail = Alcohol & Mixer;

function mixingCocktail(alcohol: Alcohol, mixer: Mixer): Cocktail {
  return {
    name: `${alcohol.name} ${mixer.name}`,
    percentage: alcohol.percentage,
    type: `${alcohol.type} & ${mixer.type}`,
    carbonated: mixer.carbonated,
  };
}

const gin = new Alcohol("Gin", 35, "Bombay");
const vodka = new Alcohol("Vodka", 50, "GreyGoose");

const tonic = new Mixer("Tonic", "SoftDrink", true);
const orange = new Mixer("Orange", "Juice", false);

const mixedCocktails: Cocktail[] = [
  mixingCocktail(vodka, orange),
  mixingCocktail(gin, tonic),
  mixingCocktail(vodka, tonic),
  mixingCocktail(gin, orange),
];

mixedCocktails.forEach((cocktail) => {
  console.log(`Cocktailname: ${cocktail.name}`);
});
