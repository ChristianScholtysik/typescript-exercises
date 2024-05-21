console.clear();

//? undefined=Variable noch nicht initialisiert/angelegt

// let sum20: number;
// console.log("Sum20 initial: ", sum20);

//? Array von Pflanzen

type Plant = { name: string; color: string };
const plants: Plant[] = [
  { name: "Rose", color: "red" },
  { name: "Ivy", color: "green" },
  { name: "Lavender", color: "purple" },
];
//? Find() gibt undefined zurück wenn kein Ergebnis gefunden wurde
const greenPlants = plants.find((plant: Plant) => plant.color === "green");
console.log(greenPlants);
const orangePlants = plants.find((plant: Plant) => plant.color === "orange");
console.log(orangePlants);
if (orangePlants) {
  console.log(orangePlants.name);
}

//? Alternativ Optional Chaining Operator ? = Elvis Operator
//? macht das Gleiche wie if
console.log(orangePlants?.name);

//* null -k ommt unter anderem bei getElementbyId, querySelector
const buttonElement20 = document.getElementById("input-email");
// buttonElement20.innerText;

if (buttonElement20) {
  buttonElement20.innerText = "Hallo ";
}
console.log(
  "der Innertext des nicht vorhandenen Buttons: ",
  buttonElement20?.innerText
);
//? Der Elvis Operator kann nur bei Zuweisungen und Ausgeban verwendet werden, kurz gesagt: auf der rechten Seite des =

const innerText = buttonElement20?.innerText;
console.log(innerText);
//? ich kann Hallo nicht ins nichts schreiben, die linke Seite ist undefined, Wenn es den Button nicht gibt
//? Die Abkürzung über den Elvis Operator geht hier leider nicht wir müssen ein if verwenden --> elvis nur rechts vom =
// buttonElement20?.innerText = "Hallo ";

//* any steht als Platzhalte für jeden beliebigen Platzhalter -- sehr sparsam verwenden

const iAmEveryThing: any = { firstName: "Michael", lastName: "Meyers" };
iAmEveryThing.city = "Chicago";
//TODO:

function returnAnything(): any {
  return "asasasas";
}
