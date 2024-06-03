//! OOP-Class-TS-Level-1_4

// - Erstelle eine Datei alien.ts
// - Deklariere eine Klasse Alien
// - Der Konstruktor soll die Parameter name und color haben
// - Lege vier Eigenschaften an:
// - name (string)
// - planet (string)
// - galaxy (string)
// - color (string)
// - name, planet und galaxy sollen public sein
// - color soll private sein
// - Schreibe für color einen Getter
// - Erstelle eine Datei app.ts
// - Lege dort 3 Alien-Arten an und setze alle Eigenschaften

import Alien from "./Alien";

const alf = new Alien("Alf", "Melmac", "Keine Ahnung", "brown");
const prot = new Alien("Prot", "KPax", "Keine Ahnung", "white");
const alien = new Alien("Alien", "Unknown", "Keine Ahnung", "black");
console.log(alf);
console.log(prot);
console.log(alien);
alien.planet = "Calpamos ";
alien.galaxy = "Zeta II Reticuli ";
console.log(alien);

//! OOP-Class-TS-Level-1_5

// - erstelle eine Datei Song.ts
// - Deklariere eine Klasse Song
// - Lege drei Eigenschaften an:
// - private title (string)
// - protected artist (string)
// - public durationInSeconds (number)
// - Die Eigenschaften title und artist sollen über einen Konstruktorparameter beim Anlegen gesetzt werden

// - Erstelle eine Datei app.ts
// - Lege dort 2 Instanzen der Klasse Song an
// - Setze jeweils eine durationInSeconds
// - Erstelle eine Klasse SongWithUnknownArtist
// - Diese Klasse soll von der Klasse Song ableiten
// - Der Konstruktor soll nur den Parameter title haben
// - Im Konstruktor soll der Konstruktor der Basis-Klasse Song aufgerufen werden
// - als zweiter Parameter wird immer “Unknown” gesetzt
// - Schreibe eine Methode setArtist() mit einem Parameter name vom Datentyp string
// - In der Methode soll die Eigenschaft artist gesetzt werden
// - Lege in der Datei app.ts eine Instanz der Klasse SongWithUnknownArtist an
// - Setze nachträglich über die entsprechende Methode einen Wert für artist

import Song from "./Song";
import SongWithUnknownArtist from "./SongWithUnknownArtist";

const song1 = new Song("Song Title 1", "Artist 1");
song1.durationInSeconds = 153;

const song2 = new Song("Song Title 2", "Artist 2");
song2.durationInSeconds = 268;

const songWithUnknownArtist = new SongWithUnknownArtist("Unknown Artist Song");
songWithUnknownArtist.durationInSeconds = 180;
songWithUnknownArtist.setArtist("Kelly Family");

console.log(song1);
console.log(song2);
console.log(songWithUnknownArtist);

//! OOP-Class-TS-Level-1_10
// - Erstelle eine neue Klasse Beverage in einer Datei beverage.ts
// - Die Klasse hat die Eigenschaften name (string) und price (number)
// - Leite eine neue Klasse Coffee davon ab (coffee.ts)
// - Die Klasse hat die zusätzliche Eigenschaft type vom Datentyp Enum
// → Werte sind: Espresso, Latte, Cappuccino und Americano
// - Erstelle eine weitere abgeleitete Klasse Tea
// - Füge eine Eigenschaft flavor vom Datentyp Enum hinzu
// → Werte sind: Green, Black, Chai, Peppermint
// - Erstelle eine Datei app.ts
// - Lege dort verschiedene Instanzen von Beverage, Coffee und Tea an
import Beverage from "./Beverage";
import { Tea, TeaFlavor } from "./Tea";
import { Coffee, CoffeeType } from "./Coffee";

const getränk = new Beverage("Beer", 5.0);
console.log(getränk);

const kaffee = new Coffee("Latte Macchiatto", 3.5, CoffeeType.Latte);
const espresso = new Coffee("Espresso", 3.5, CoffeeType.Espresso);
console.log(kaffee);
console.log(espresso);

const schwarzerTee = new Tea("Schwarzer Tee", 1.7, TeaFlavor.Black);
const chai = new Tea("Chai", 1.7, TeaFlavor.Chai);

console.log(schwarzerTee);
console.log(chai);

//! OOP-Class-TS-Level-2_5
// - Erstelle eine Datei vocabulary.ts
// - Deklariere eine Klasse Vocabulary
// - Lege eine private Eigenschaft an:
// - words (string-Array)
// - Die Eigenschaft soll beim Anlegen der Klasse mit einem leeren Array initialisiert werden
// - Lege eine private Eigenschaft language (string) an, die im Konstruktor auf den Wert “English” gesetzt wird
// - Erstelle eine Methode names addWord, die public ist
// - die Methode hat einen Parameter names word vom Typ string
// - in der Methode wird das übergebene Wort zum Array hinzugefügt
// - Erstelle eine Methode displayAll(), die protected ist
// - die Methode gibt zuerst die language auf der Konsole aus
// - anschließend werden alle Wörter im Array - mit Komma getrennt - ausgegeben

// - Erstelle eine Datei app.ts
// - Lege dort eine Instanz der Klasse Vocabulary an
// - Füge einige Wörter über addWord hinzu
// - Lass dir den Inhalt über displayAll ausgeben
// - Erstelle eine Datei spanish-vocabulary.ts
// - Deklariere eine Klasse SpanishVocabulary
// - Die Klasse soll von der Klasse Vocabulary ableiten
// - Im Konstruktor wird der Wert von language auf “Spanish” gesetzt

// - Lege dort eine Instanz der Klasse Vocabulary an
// - Füge einige Wörter mit addWord hinzu
// - Lass dir den Inhalt über displayAll ausgeben

import Vocabulary from "./Vocabulary";
import SpanishVocabulary from "./SpanischVocabulary";

const vocabulary = new Vocabulary();
vocabulary.addWord("Hello");
vocabulary.addWord("World");
vocabulary.addWord("How");
vocabulary.addWord("are");
vocabulary.addWord("you");
vocabulary.dislayAll();

const spanishVocabulary = new SpanishVocabulary();
spanishVocabulary.addWord("hola");
spanishVocabulary.addWord("amigo");
spanishVocabulary.addWord("muy");
spanishVocabulary.addWord("bien");
spanishVocabulary.dislayAll();
