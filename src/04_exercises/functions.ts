console.clear;

//!Functions-TS-Level-1_3

function showPersonInfo(name: string, city: string, age: number) {
  return console.log(
    `Hallo mein Name ist ${name}. Ich bin ${age}Jahre alt und komme aus ${city}`
  );
}

showPersonInfo("Christian", "Bielefeld", 120);

//! Functions-TS-Grundlagen-Level-1_4

function hero(heroName: string, heroPower: string, heroEnemy: string) {
  const nameOutput = `Mein:e Lieblingsheld:in ist: ${heroName}`;
  const powerOutput = `Er/sie hat die Fähigkeit: ${heroPower}`;
  const enemyOutput = `Sein/ihr größte/r Gegner:in ist: ${heroEnemy}`;
  return console.log(nameOutput, powerOutput, enemyOutput);
}

hero("Batman", "Fliegen", "Joker");

//! Functions-TS-Level-1_5
function multiplyAndDivide(zahl: number, zahl2: number) {
  const multiply = zahl * zahl2;
  const divide = zahl / zahl2;
  if (zahl2 === 0) {
    console.log("Division durch 0 nicht erlaubt");
  }

  return console.log({ multiply }, { divide });
}

multiplyAndDivide(10, 2);
multiplyAndDivide(30, 20);
multiplyAndDivide(100, 100);
multiplyAndDivide(5, 0);
multiplyAndDivide(45, 173);
multiplyAndDivide(1, 1000);

//! Functions-TS-Grundlagen-Level-1_6

function returnOne() {
  return 1;
}

let x2 = 1;
let y2 = returnOne();

if (x2 === y2) {
  console.log("Wird das gedruckt??");
}

//! Functions-TS-Grundlagen-Level-1_7

function multiplyNum(zahl3: number) {
  const multiplyWith2 = zahl3 * 2;
  return console.log({ multiplyWith2 });
}

multiplyNum(8);

//! Functions-TS-Grundlagen-Level-1_8

function whatsMyAgeAgain(birthYear: number) {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const myAge = currentYear - birthYear;
  return console.log({ myAge });
}

whatsMyAgeAgain(1922);

// ------------

function compareAge(myAge: number, otherAge: number) {
  let altersDifferenz = myAge - otherAge;
  return console.log({ altersDifferenz });
}
compareAge(77, 25);

//! Functions-TS-Grundlagen-Level-1_9
function aboutMe(
  vorname: string,
  nachname: string,
  geburtsort: string,
  alter: number,
  wohnort: string
) {
  return console.log(
    `Meine Name ist ${vorname} ${nachname}. Ich bin in ${geburtsort} geboren. Ich lerne bei Supercode. Ich bin ${alter} Jahre alt. Ich wohne in ${wohnort}`
  );
}
aboutMe("Omar", "Little", "New York", 28, "Baltimore");
