export {};

//! Clean-Code-TS-Level-1_1
const textInputField = document.getElementById(
  "input-field"
) as HTMLInputElement;
const buttonCountUpperCaseLetters = document.getElementById("upperCase");
const buttonCountSpaces = document.getElementById("spaces");
const buttonCountVowels = document.getElementById("vowels");
const countResultOutputDiv = document.getElementById(
  "output"
) as HTMLDivElement;

function countUpperCaseLetters() {
  const textInputFieldValue = textInputField.value;
  let count = 0;
  for (let i = 0; i < textInputFieldValue.length; i++) {
    const char = textInputFieldValue[i];
    if (
      (char >= "A" && char <= "Z") ||
      char === "Ä" ||
      char === "Ö" ||
      char === "Ü"
    ) {
      count++;
    }
  }
  countResultOutputDiv.innerText = `Anzahl der Großbuchstaben: ${count}`;
}

function countSpaces() {
  const textInputFieldValue = textInputField.value;
  const count = textInputFieldValue.split(" ").length - 1;
  countResultOutputDiv.innerText = `Anzahl der Leerzeichen: ${count}`;
}

function countVowels() {
  const textInputFieldValue = textInputField.value;
  const vowelsCountResult = textInputFieldValue.match(/[aeiouäöüAEIOUÄÖÜ]/g);
  const count = vowelsCountResult ? vowelsCountResult.length : 0;
  countResultOutputDiv.innerText = `Anzahl der Vokale: ${count}`;
}

buttonCountUpperCaseLetters?.addEventListener("click", countUpperCaseLetters);
buttonCountSpaces?.addEventListener("click", countSpaces);
buttonCountVowels?.addEventListener("click", countVowels);

//!Clean-Code-TS-Level-2_1

// const getNumberText = (num: number | undefined): string =>
//   ['One', 'Two', 'Three', 'Four', 'Five'][num ? num - 1 : 0 - 1] ?? 'Unknown';

// const userInput: number = Math.ceil(Math.random() * 7);
// console.log(userInput);
// const numberText = getNumberText(userInput);
// console.log(numberText);

const numbers: string[] = ["One", "Two", "Three", "Four", "Five"];

const getNumberText = (num: number | undefined): string =>
  numbers[num ? num - 1 : 0 - 1] ?? "Unknown";

const userInputMultiplyBySeven: number = Math.ceil(Math.random() * 7);
const numberText = getNumberText(userInputMultiplyBySeven);
console.log(numberText);

//! Clean-Code-TS-Level-3_1

enum TaskType {
  Urgent = 4,
  NotUrgent = 2,
  Info = 1,
}

type Task = { name: string };

const userName: string = "Benutzer";
const todoTaskCollection: string[] = [];
let todoTaskObject: Task[] = [];

const inputForm = getTaskFromUserInput;
function getTaskFromUserInput(): string {
  return prompt("Bitte geben Sie eine Aufgabe ein:") || "";
}

function pushTaskIntoTaskCollection(task: string) {
  if (task !== "") {
    todoTaskCollection.push(task);
    console.log(todoTaskCollection);
  }
}

function pushTaskIntoTaskObject(task: string) {
  const taskObject: Task = { name: task };
  todoTaskObject.push(taskObject);
  console.log(todoTaskObject);
}

function createTask() {
  const inputForm = getTaskFromUserInput();
  pushTaskIntoTaskCollection(inputForm);
  pushTaskIntoTaskObject(inputForm);
  console.log("Aufgabe erstellt: " + inputForm + " von " + userName);
}

createTask();

//! ------------------------------------------------

// no good user input - clear the other array too
if (!todoTaskCollection.length) {
  todoTaskObject = [];
} else {
  filterThem(todoTaskCollection, "asc");
  filterThem2(todoTaskObject, "asc");
}

let resultOutside: number = 0;
function addItAllUp(): void {
  let result: number = 0;
  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
      for (let k = 0; k < 100; k++) {
        result += i + j + k;
      }
    }
  }
  console.log("Die maximale Anzahl der Aufgaben ist: " + result);
  resultOutside = result;
}

function filterThem(a: string[], b: string): string {
  const ret = a.concat();
  if (b === "rev") {
    ret.reverse();
  } else if (b === "no") {
    ret;
  } else if (b === "asc") {
    ret.sort((a, b) => a.localeCompare(b));
  } else if (b === "") {
    ret;
  }
  return ret.toString();
}

function filterThem2(a: Task[], b: string): string {
  const ret = a.concat();
  if (b === "rev") {
    ret.reverse();
  } else if (b === "no") {
    ret;
  } else if (b === "asc") {
    ret.sort((a, b) => b.name.localeCompare(a.name));
  } else if (b === "") {
    ret;
  }

  return ret.toString();
}
