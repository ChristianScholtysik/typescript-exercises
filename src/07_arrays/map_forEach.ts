//? map - wendet eine function auf das Ursprungsarray an und gibt ein neues Array zurück
const eightiesHits2: string[] = [
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

const hitsWithExclamationMark = eightiesHits2.map((hit: string) => {
  return hit + "!";
});
console.log({ hitsWithExclamationMark });

const hitsToUpperCase = eightiesHits2.map((hit: string) => {
  return hit.toUpperCase();
});
console.log({ hitsToUpperCase });

const hitsWithBigLove = eightiesHits2.map((hit: string) => {
  return hit.toLowerCase().replace("love", "LOVE");
});

console.log({ hitsWithBigLove });

const hitsRated = eightiesHits2.map((hit: string) => {
  if (hit.includes("Blue")) {
    return `Best song: ${hit}`;
  }
  if (hit.includes("Rio")) {
    return `Worst song: ${hit}`;
  }
  return `Good song: ${hit}`;
});

console.log({ hitsRated });

//?map mit Index
const hitsWithOrder = eightiesHits2.map((hit: string, index: number) => {
  return ` ${index + 1} - ${hit} `;
});
console.log({ hitsWithOrder });

//!------------------------------------------------------------------
//? forEach - erschafft kein neues Array sondern führt nur Code aus

eightiesHits2.forEach((hit: string) => {
  console.log(hit);
});

eightiesHits2.forEach((hit: string, index: number) => {
  console.log(` ${index + 1} - ${hit} `);
});

eightiesHits2.forEach((hit: string) => {
  if (hit.includes("Blue")) {
    console.log(`Best song: ${hit}`);
  }
  if (hit.includes("Rio")) {
    console.log(`Worst song: ${hit}`);
  }
  console.log(`Good song: ${hit}`);
});
