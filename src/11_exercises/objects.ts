//! Math-TS-Level-1_4
// - In dieser Übung lernst du [Math.min] und [Math.max] kennen.
// - Finde mit Math.min den niedrigsten Wert aus den Zahlen im Code-Snippet.
// - Finde nun mit Math.max den höchsten Wert aus den Zahlen im Code-Snippet.
// - Lass dir das Ergebnis auf der Konsole ausgeben

const minimum2 = Math.min(
  393,
  205,
  479,
  47,
  376,
  267,
  385,
  2,
  190,
  383,
  286,
  462,
  115,
  138,
  331,
  409,
  427,
  245,
  224,
  276,
  483,
  55,
  147,
  177,
  208,
  347,
  135,
  282,
  33,
  270,
  475,
  426,
  476,
  453,
  474,
  351,
  219,
  358,
  354,
  410,
  240,
  139,
  371,
  356,
  277,
  202,
  264,
  204,
  447,
  488
);
console.log({ minimum2 });
const maximum2 = Math.max(
  393,
  205,
  479,
  47,
  376,
  267,
  385,
  2,
  190,
  383,
  286,
  462,
  115,
  138,
  331,
  409,
  427,
  245,
  224,
  276,
  483,
  55,
  147,
  177,
  208,
  347,
  135,
  282,
  33,
  270,
  475,
  426,
  476,
  453,
  474,
  351,
  219,
  358,
  354,
  410,
  240,
  139,
  371,
  356,
  277,
  202,
  264,
  204,
  447,
  488
);
console.log({ maximum2 });

//! Math-TS-Level-2_1

// - Lernziel: Verwendung von math-Methoden, um Zahlen zu runden.
// - Erstelle eine Function roundTo(Zahl, Genauigkeit){...}, die eine Zahl auf genaue Dezimalstellen rundet. So können die User:innen selber bestimmen, auf wie viele Nachkommastellen sie runden möchten.
// - Um die Funktion zu testen, schreibe: console.log(roundTo(3.1415926535, 5)); // 3.14159
function roundTo(Zahl: number, Genauigkeit: any) {
  let num = Zahl;
  let roundFactor = num.toFixed(Genauigkeit);
  return roundFactor;
}
console.log(roundTo(3.1415926535, 5));
console.log(roundTo(1.78965454545448, 7));

//! Objekte-TS-Level-1_3
// - Im vorgegebenen Code findest du einen type Apple, drei Objekte vom Typ Apple und ein Array mit allen Äpfeln
// - Nutze eine for-Schleife, die das Array von Äpfeln durchgeht und nur die Größen aller Äpfeln in der Konsole ausgibt.
// - Nutze forEach, um die Farbe jedes Apfels auf der Konsole auszugeben
// - Verwende den Befehl length, um die Anzahl der Äpfel auszugeben
// - Erstelle selbst ein Objekt pinkApple vom Typ Apple und pushe es in das apples-Array
// - Füge eine neue Eigenschaft isSweet vom Typ boolean zum Typ Apple hinzu
// - Schau dir die Fehlermeldungen an und füge bei jedem Apple-Objekt die Eigenschaft isSweet hinzu

type Apple = {
  color: string;
  size: string;
  isSweet: boolean;
};

let redApple: Apple = { color: "red", size: "big", isSweet: false };
let greenApple: Apple = { color: "green", size: "small", isSweet: true };
let yellowApple: Apple = { color: "yellow", size: "big", isSweet: false };
let apples: Apple[] = [redApple, greenApple, yellowApple];

apples.forEach((apple) => {
  console.log("Size: ", apple.size);
  console.log("Color: ", apple.color);
});

function getApplesLength(apples: string[]) {
  return apples.length;
}

console.log(`${apples.length}`);

let pinkApple = { color: "pink", size: "big", isSweet: true };
apples.push(pinkApple);
console.log({ apples });

//! Objekte-TS-Level-1_4

// - Lernziel: auf Objekte in einem Array zugreifen.
// - Verwende den vorgegebenen Code.
// - Greife auf die Werte "Nala" und "Droopy" in diesem Array von Objekten zu und lasse sie dir auf der Konsole ausgeben.
// - Lasse dir einmal alle Hundenamen anzeigen.
// - Ändere folgende Werte:
//     - Droopy in Snoppy
//     - Dinky in Pinky
// - Erstelle ein weiteres Objekt vom Typ Pet, z. B. Hamster
// - Füge das Objekt im Array hinzu

type Pet = {
  tiertyp: string;
  namen: string[];
};

let unsereHaustiere: Pet[] = [
  {
    tiertyp: "Katze",
    namen: ["Gipsy", "Nala", "Dinky"],
  },
  {
    tiertyp: "Hunde",
    namen: ["Knöpfchen", "Pinselchen", "Droopy"],
  },
];

console.log(unsereHaustiere[0].namen[1]);
console.log(unsereHaustiere[1].namen[2]);
//-----
console.log(unsereHaustiere[1].namen);

unsereHaustiere[0].namen[2] = "Pinky";
console.log(unsereHaustiere[0].namen);

unsereHaustiere[1].namen[2] = "Snoopy";
console.log(unsereHaustiere[1].namen);

//------
let hamster = {
  tiertyp: "Hamster",
  namen: ["Tick", "Trick", "Track"],
};
unsereHaustiere.push(hamster);
console.log({ unsereHaustiere });

//! Objekte-TS-Level-1_5
// - Lernziel: auf Objekt-Inhalte zugreifen.
// - Verwende den vorgegebenen Code: den Typ Lager und ein Objekt vom Typ Lager
// - Greife auf die Eigenschaften des Objekts zu und gib folgende Werte in der Konsole aus:
//     - Geheimnisse
//     - Cola
//     - Hefter
type Lager = {
  schreibtisch: {
    schublade: string;
  };
  schrank: {
    "Obere Schublade": {
      Ordner1: string;
      Ordner2: string;
    };
    "Untere Schublade": string;
  };
};

let unserLager: Lager = {
  schreibtisch: {
    schublade: "Hefter",
  },
  schrank: {
    "Obere Schublade": {
      Ordner1: "Dokumente",
      Ordner2: "Geheimnisse",
    },
    "Untere Schublade": "Cola",
  },
};

console.log(unserLager.schrank["Obere Schublade"].Ordner2);
console.log(unserLager.schrank["Untere Schublade"]);
console.log(unserLager.schreibtisch.schublade);

//!Objekte-TS-Level-1_6
// - In dieser Übung lernen wir, wie man auf die Objekte zugreift.
// - Der Code ist vorgegeben.
// - Greife auf folgende Werte dieses Objekts zu und lasse sie dir auf der Konsole ausgeben:
// - "The Beatles"
// - aus dem Objekt Pink Floyd: "Download"
// - aus dem Objekt Pink Floyd: true
// - die Releasejahre: 1971 und 1983
// - Von Metallica: "MC"
// - aus dem Objekt  Metallica das Wort: "Ride"
// - Lege ein neues Objekt vom Typ Musik an und füge es zum Array hinzu.

type Musik = {
  kunstler: string;
  title: string;
  release_jahr: number;
  formate: string[];
  gold: boolean;
};

let meineTopVier: Musik[] = [
  {
    kunstler: "The Beatles",
    title: "Abbey Road",
    release_jahr: 1969,
    formate: ["LP", "CD", "MC", "Download"],
    gold: true,
  },
  {
    kunstler: "Pink Floyd",
    title: "Dark Side of the Moon",
    release_jahr: 1978,
    formate: ["CS", "CD", "LP", "Download"],
    gold: true,
  },
  {
    kunstler: "Led Zeppelin",
    title: "Led Zeppelin IV",
    release_jahr: 1971,
    formate: ["CS", "LP", "Download"],
    gold: true,
  },
  {
    kunstler: "Metallica",
    title: "Kill ’Em All und Ride the Lightning",
    release_jahr: 1983,
    formate: ["LP", "CD", "MC", "Download"],
    gold: true,
  },
];

console.log(meineTopVier[0]);
console.log(meineTopVier[0].kunstler);
console.log(meineTopVier[1].formate[3]);
console.log(meineTopVier[1].gold);
console.log(meineTopVier[2].release_jahr);
console.log(meineTopVier[3].release_jahr);
console.log(meineTopVier[3].formate[2]);
console.log(meineTopVier[3].title.slice(17, 22));
//------
let nirvana: Musik = {
  kunstler: "Nirvana",
  title: "Bleach",
  release_jahr: 1989,
  formate: ["LP", "CD", "MC", "Download"],
  gold: false,
};
meineTopVier.push(nirvana);
console.log({ meineTopVier });

//! Objekte-TS-Level-2_2
// - Du hast Sammlungen deiner Lieblingsbands. Du möchtest sie alphabetisch sortieren.
// - Sortiere die Bands aus dem Code-Snippet alphabetisch nach Namen.
// - Sortiere anschließend die Bands aufsteigend nach dem Karrierebeginn (period_active.start).
// - Gib das Ergebnis in der Konsole aus.
type PeriodActive = {
  start: number;
  end: number | string;
  extra?: number;
};

type Singer = {
  name: string;
  country: string;
  period_active: PeriodActive;
  genre: string;
};

const singers: Singer[] = [
  {
    name: "The Beatles",
    country: "United Kingdom",
    period_active: { start: 1960, end: 1970 },
    genre: "Rock / Pop",
  },
  {
    name: "Elvis Presley",
    country: "United States",
    period_active: { start: 1954, end: 1977 },
    genre: "Rock and roll",
  },
  {
    name: "Michael Jackson",
    country: "United States",
    period_active: { start: 1964, end: 2009 },
    genre: "Pop / Rock / Dance / Soul / R&B",
  },
  {
    name: "Elton John",
    country: "United Kingdom",
    period_active: { start: 1964, end: "present" },
    genre: "Pop / Rock",
  },
  {
    name: "Madonna",
    country: "United States",
    period_active: { start: 1979, end: "present" },
    genre: "Pop / Dance / Electronica",
  },
  {
    name: "Led Zeppelin",
    country: "United Kingdom",
    period_active: { start: 1968, end: 1980 },
    genre: "Hard rock / Blues rock / Folk rock",
  },
  {
    name: "Rihanna",
    country: "United States",
    period_active: { start: 2005, end: "present" },
    genre: "R&B / Pop / Dance / Hip-hop",
  },
  {
    name: "Pink Floyd",
    country: "United Kingdom",
    period_active: { start: 1965, end: 1996, extra: 2014 },
    genre: "Progressive rock / Psychedelic rock",
  },
];

const sortedSingers = singers.sort((a, b) => {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  return 0;
});
console.log({ sortedSingers });
