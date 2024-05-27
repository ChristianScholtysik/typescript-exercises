//! Functions-TS-Grundlagen-Level-1_1
// - Arrow-Functions ermöglichen es, Functions in einer kürzeren Syntax zu schreiben.
// - Schreibe - wie du es bisher gewohnt bist - die Funktion intro1() und gib nur "Hello Function" in der Konsole aus.
// - Nun sollst du den Code mit Hilfe der Arrow-Function verkürzen.

function intro1() {
  console.log("Hello Function");
}
intro1();

const intro2 = () => {
  console.log("Hello World");
};
intro2();

//! Functions-TS-Grundlagen-Level-1_2
// - Schreibe eine Function, die "Hallo" in deinem HTML anzeigt.
// - Schreibe eine 2. Function, die die Summe von zwei Zahlen in deinem Browser (Konsole oder HTML) anzeigt.
// - Schreibe eine 3. Function, die das Ergebnis der Multiplikation von zwei Zahlen über window.alert ausgibt
// - Schreibe eine 4. Function, die einen Parameter vom Typ Object hat und die alle Eigenschaften (Keys) des Objekts in der Konsole ausgibt.
// - Konvertiere schließlich alle Funktionen in die neue Arrow-Functions Schreibweise.

function firstFunction() {
  console.log("first: Hallo");
}
firstFunction();

function secondFunction(a: number, b: number) {
  const result = a + b;
  console.log(`second: ${result}`);
}
secondFunction(3, 7);

// function thirdFunction(a: number, b: number) {
//   const result = a * b;
//   alert(result);
// }
// thirdFunction(3, 5);

// function fourthFunction(firstName: string, lastName: string) {
//   console.log(`fourth: ${firstName} ${lastName}`);
// }
// fourthFunction("Billie", "Jean");

function printKeys(object: Object): void {
  console.log(Object.keys(object));
}
printKeys({ firstName: "Manny", lastName: "Müller" });

//? Arrow funktionen
const firstFunctionArrow: () => void = () => {
  console.log("first arrow: Hallo");
};
firstFunctionArrow();

const secondFunctionArrow = (a: number, b: number): number => {
  return a + b;
};
secondFunctionArrow(3, 7);

// const thirdFunctionArrow = (a: number, b: number): void => {
//   const result = a * b;
//   return alert(`third arrow: ${result}`);
// };
// thirdFunctionArrow(4, 8);

const fourthFunctionArrow = (firstName: string, lastName: string) => {
  console.log(`fourth: ${firstName} ${lastName}`);
};
fourthFunctionArrow("Jane", "Doe");

//! This-TS-Level-1_2
// - Lernziel: Verstehen und Anwenden von [this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this) in TypeScript.
// - **Bitte halte dich an den Typescript-Standard.**
// - Verwende den vorgegebenen Code.
// - Baue in der Function zeigeProfil deines Objektes die Ausgabe aller Werte der Person ein
// - Validiere dein HTML auf Korrektheit.
// - Lege dann eine zweite Person mit den gleichen Eigenschaften aber anderen Werten an
// - Die 2. Person soll ebenfalls eine Funktion zeigeProfil habe, die aber dieses Mal als Arrow-Function definiert ist

let person = {
  vorname: "Anton",
  nachname: "Fish",
  alter: 34,
  familienstand: "ledig",
  groesse: 1.78,
  zeigeProfil: function (): string {
    return `${this.vorname} ${this.nachname} is ${this.alter}. Der Familienstand ist ${this.familienstand} und die Größe: ${this.groesse}`;
  },
};

// document.getElementById("person").innerHTML = person.zeigeProfil();
const personData = document.getElementById("person");

if (personData) {
  personData.innerHTML = person.zeigeProfil();
}

let person2 = {
  vorname: "Marc",
  nachname: "Deer",
  alter: 74,
  familienstand: "verheiratet",
  groesse: 1.92,
  zeigeProfil: function (): string {
    return (() => {
      const { vorname, nachname, alter, familienstand, groesse } = this;
      return `${vorname} ${nachname} ist ${alter} Jahre alt. Der Familienstand ist ${familienstand} und die Größe: ${groesse} Meter.`;
    })();
  },
};
const personData2 = document.getElementById("person2");
if (personData2) {
  personData2.innerHTML = person2.zeigeProfil();
}

//! Functions-TS-Level-1_6
// - Lernziel: Funktionen mit Default-Parametern nutzen
// - Lege einen Typ Monster mit folgenden Eigenschaften an
// name, type, health, strength, speed
// - Alle Eigenschaften sind Pflicht (nicht optional)
// - Überlege dir selbst, welche Datentypen hierfür sinnvoll sein könnten
// - Erstelle ein Funktion createMonster, die ein Monster erzeugt und zurückgibt
// - name und type müssen immer an die Funktion übergeben werden
// - werden health, strength und speed nicht angegeben, sollen diese Standardwerte verwendet werden
//     - health = 100
//     - strength = 50
//     - speed = 25
// - Lege mit Hilfe der Funktion mehrere Monster an, gibt dabei
//     - 2 Parameter
//     - 3 Parameter
//     - 4 Parameter
//     - 5 Parameter

//     an

// - Lass dir jeweils das erzeugte Objekt in der Konsole ausgeben

type Monster = {
  name: string;
  type: string;
  health: number;
  strength: number;
  speed: number;
};
function createMonster(
  name: string,
  type: string,
  health: number = 100,
  strength: number = 50,
  speed: number = 25
): Monster {
  return {
    name,
    type,
    health,
    strength,
    speed,
  };
}

const goblin = createMonster("Goblin", "Beast");
console.log(goblin);

const orc = createMonster("Orc", "Beast", 50);
console.log(orc);

const medusa = createMonster("Medusa", "Beast", 500, 150);
console.log(medusa);

const dragon = createMonster("Dragon", "Reptile", 300, 200, 100);
console.log(dragon);

//! Functions-TS-Level-2_2
// - Lernziel: Funktionen mit optionalen Parametern nutzen
// - Lege im HTML ein kleines Formular zur Kundenanlage mit folgenden Eingabefeldern an
//     - firstName: string
//     - lastName: string
//     - email: string
//     - phone: string
// - Lege einen Submit-Button für das Formular an und erstelle einen EventHandler
// - Lege einen Typ NewCustomer mit diesen Eigenschaften an
//     - firstName: string
//     - lastName: string
//     - email: string (optional)
//     - phone: string (optional)
// - Lege zwei Funktionen an, die jeweils das gleiche Ergebnis liefern, nämlich einen Begrüßungstext als String zurückgeben
//     - greetNewUser1 mit einem Parameter vom Typ NewCustomer
//     - greetNewUser2 mit 4 Parametern (firstName, lastName, email, phone)
//     - Der Begrüßungstext lautet, je nachdem ob email und/oder phone oder nichts von beiden angegeben wurden folgendermaßen:

//     ```tsx
//     'Hello Suzy Sue. We will not contact you'
//     'Hello Suzy Sue. We will contact you via suzy@gmail.com'
//     'Hello Suzy Sue. We will contact you via 0178 / 645464'
//     ''Hello Suzy Sue. We will contact you via suzy@gmail.com and 0178 / 645464
//     ```

// - Diese Aktionen sollen ausgeführt werden, wenn man auf den Submit-Button klickt
//     - ein Objekt vom Typ NewCustomer wird angelegt
//     - greetNewUser1 wird aufgerufen
//     - greetNewUser2 wird aufgerufen
//     - das Ergebnis von greetNewUserVar1 wird auf die Konsole geloggt
//     - das Ergebnis von greetNewUserVar2 wird im HTML unterhalb des Submit-Buttons ausgegeben
//? Element holen
// const submitButton = document.getElementById("submit-btn") as HTMLInputElement;
// const emailInput = document.getElementById("email") as HTMLInputElement;
// const phoneInput = document.getElementById("phone") as HTMLInputElement;
// const firstnameInput = document.getElementById("firstname") as HTMLInputElement;
// const lastnameInput = document.getElementById("lastname") as HTMLInputElement;
// const resultField = document.getElementById("result") as HTMLElement;

// //? Type

// type NewCustomer2 = {
//   firstName: string;
//   lastName: string;
//   email?: string;
//   phone?: string;
// };

// //? EventHandler
// submitButton.addEventListener("click", (event) => {
//   event.preventDefault();
//   const firstName = firstnameInput?.value;
//   const lastName = lastnameInput?.value;
//   const email = emailInput.value;
//   const phone = phoneInput.value;
//   if (firstName && lastName) {
//     if (email && phone) {
//       const newUser = greetNewUserVar1();
//       console.log(newUser);
//     } else if (email && !phone) {
//       const newUser = greetNewUserVar2();
//       console.log(newUser);
//     } else if (phone && !email) {
//       const newUser = greetNewUserVar3();
//       console.log(newUser);
//     } else if (!phone && !email) {
//       const newUser = greetNewUserVar4();
//       console.log(newUser);
//     }
//   }
// });
// //? Functions

// function greetNewUserVar1(): NewCustomer2 {
//   const firstName = firstnameInput?.value;
//   const lastName = lastnameInput?.value;
//   const email = emailInput?.value;
//   const phone = phoneInput?.value;
//   if (resultField) {
//     const result = document.createElement("p");
//     result.innerHTML = `Hello ${firstName} ${lastName}. We will contact you via ${email} and ${phone}`;
//     resultField.appendChild(result);

//     alert(
//       `Hello ${firstName} ${lastName}. We will contact you via ${email} and ${phone}`
//     );
//     return {
//       firstName,
//       lastName,
//       email,
//       phone,
//     };
//   }
// }
// function greetNewUserVar2() {
//   if (resultField) {
//     const firstName = firstnameInput?.value;

//     const lastName = lastnameInput?.value;
//     const email = emailInput?.value;
//     const result = document.createElement("p");
//     result.innerHTML = `Hello ${firstName} ${lastName}. We will contact you via ${email}`;
//     resultField.appendChild(result);
//     alert(`Hello ${firstName} ${lastName}. We will contact you via ${email}`);
//     return {
//       firstName,
//       lastName,
//       email,
//     };
//   }
// }
// function greetNewUserVar3() {
//   const firstName = firstnameInput?.value;

//   const lastName = lastnameInput?.value;
//   const phone = phoneInput?.value;
//   if (resultField) {
//     const result = document.createElement("p");
//     result.innerHTML = `Hello ${firstName} ${lastName}. We will contact you via ${phone}`;
//     resultField.appendChild(result);

//     alert(`Hello ${firstName} ${lastName}. We will contact you via ${phone}`);
//     return {
//       firstName,
//       lastName,
//       phone,
//     };
//   }
// }
// function greetNewUserVar4() {
//   const firstName = firstnameInput?.value;

//   const lastName = lastnameInput?.value;

//   alert(`Hello ${firstName} ${lastName}. We will not contact you `);
//   return {
//     firstName,
//     lastName,
//   };
// }

//! Bonus: Functions-TS-Level-3_1
// - Erstelle vier SuperBalls: Durch das Anklicken eines SuperBalls ändert sich die Hintergrundfarbe des <body> und die Textfarbe der Überschrift <h1>.
// - Nutze CSS um die Elemente zu stylen. Entweder nutzt du linear-gradient oder du sprichst jeden Halbkreis selber an.
// - In deinem TS-Code definierst du dann was beim Klick auf den jeweiligen SuperBall passieren soll.

type SuperBalls = {
  ball: HTMLElement;
  backgroundColor: string;
  textColor: string;
};

//?
const createSuperBall = (
  id: string,
  bgColor: string,
  textColor: string
): void => {
  const ball = document.getElementById(id);
  const ballField = document.getElementById("superBalls") as HTMLElement;
  const title = document.querySelector("h1");
  if (ball) {
    const superBall: SuperBalls = {
      ball: ball,
      backgroundColor: bgColor,
      textColor: textColor,
    };
    //* ohne hard line
    ball.style.background = `linear-gradient(50deg,${superBall.backgroundColor}, ${superBall.textColor} )`;
    //* mit hard-line
    // ball.style.background = `linear-gradient(50deg, ${superBall.backgroundColor} 0%, ${superBall.backgroundColor} 50%, ${superBall.textColor} 50%, ${superBall.textColor} 100%)`;

    if (ballField) {
      ball?.addEventListener("click", () => {
        document.body.style.background = `linear-gradient(230deg,${superBall.backgroundColor}, ${superBall.textColor})`;
      });

      if (title) {
        document.body.style.color = superBall.textColor;
      }
    }
  }
};
document.body.style.background = "white";
//?
createSuperBall("superBall1", "purple", "yellow");
createSuperBall("superBall2", "blue", "magenta");
createSuperBall("superBall3", "orange", "red");
createSuperBall("superBall4", "lightgreen", "orchid");
