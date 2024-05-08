const eightiesHits: string[] = [
  "Blue Monday",
  "Just Cant Get Enough",
  "Dont You Want Me",
  "Tainted Love",
  "Enjoy the Silence",
  "Bizarre Love Triangle",
  "Rio",
  "Heart of Glass",
  "Love Will Tear Us Apart",
  "Dont stop believin",
  "Rio",
];

//?IndexOf

const indexOfRio = eightiesHits.indexOf("Rio");
console.log({ indexOfRio });
if (indexOfRio > -1) {
  console.log("Es wurde ein Ergebnis gefunden");
}

//? lastIndexOf
const lastIndexOfRio = eightiesHits.lastIndexOf("Rio");
console.log({ lastIndexOfRio });

//? includes - gibt boolean zurück ob Element enthalten ist oder nicht
const includesTaintedLove = eightiesHits.includes("Tainted Love");
console.log({ includesTaintedLove });
if (eightiesHits.includes("Heart of Glass")) {
  console.log("Blondie song found");
}

//?  find  - gibt das erste Vorkommen im Array zurück
const blueMondey = eightiesHits.find((hit: string) => hit === "Blue Mondey");
console.log({ blueMondey }); //falsch geschrieben: undefined!!

const blueMonday = eightiesHits.find((hit: string) => hit === "Blue Monday");
console.log({ blueMonday });

const firstHitWithDont = eightiesHits.find((hit: string) =>
  hit.startsWith("Dont")
);
console.log({ firstHitWithDont });

//?filter - filtert alle Elemente heraus die den Kriterien entsprechen
const allHitsWithDont = eightiesHits.filter((hit: string) =>
  hit.startsWith("Dont")
);
console.log({ allHitsWithDont });

const allHitsWithLove = eightiesHits.filter((hit: string) =>
  hit.includes("Love")
);
console.log({ allHitsWithLove });

const allHitsWithDontAndEnjoy = eightiesHits.filter(
  (hit: string) => hit.startsWith("Dont") || hit.startsWith("Enjoy")
);
console.log({ allHitsWithDontAndEnjoy });

const allHitsLongerThan17Letters = eightiesHits.filter(
  (hit: string) => hit.length > 17
);
console.log({ allHitsLongerThan17Letters });

//?map
