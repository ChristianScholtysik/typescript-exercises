//! Dom-Elements-TS-Level-1_9
// - Lernziel: addEventListener(), selectedIndex und remove() verstehen und anwenden.
// - **Bitte halte dich an den Typescript-Standard.**
// - Dieses Mal sollst du eine Function schreiben, die beim Anklicken des Buttons die jeweilige Farb-Option aus der Liste entfernt.
// - HTML und CSS ist vorgegeben. Siehe Code-Snippet.
// - Nutze:
//     - [addEventListener()](https://www.w3schools.com/jsref/met%5Fdocument%5Faddeventlistener.asp) für den Klick auf den Button
//     - [selectedIndex()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/selectedIndex) um dir das ausgewählte Element aus dem Select zu holen
//     - [remove()](https://www.w3schools.com/jsref/met%5Felement%5Fremove.asp) um über den Index das Element zu löschen

//? Elemente aus HTML holen
const button = document.getElementById("button");
const selectedElement = document.getElementById(
  "farbeAuswahlen"
) as HTMLSelectElement;

//?AddEventListener
button?.addEventListener("click", deleteSelectedColor);

//? function, die beim Anklicken des Buttons die jeweilige Farb-Option aus der Liste entfernt.
function deleteSelectedColor(event: Event) {
  event.preventDefault();
  const selectedColor = selectedElement?.selectedIndex;
  console.log(selectedColor);
  selectedElement.remove(selectedColor);
}

//! Dom-Elements-TS-Level-2_2
// - Beim Anklicken des Buttons sollen die Werte aus dem Formular in der Konsole ausgegeben werden.
// - Der Code ist vorgegeben, siehe Code-Snippet.
// - Definiere einen Typ SimplePerson
// - Lege in der jetzt zusätzlich ein Objekt vom Typ SimplePerson an, das die Werte aus dem Formular erhält
// - Lass dir das Objekt auf der Konsole ausgeben

//? Type definieren
type SimplePerson2 = {
  firstName: string;
  lastName: string;
  land: string;
};

//? Elemente holen
const form = document.getElementById("form1") as HTMLFormElement;

//? event listener
form?.addEventListener("submit", (event: Event) => {
  event.preventDefault();
  submitForm2();
});

//? function
function submitForm2() {
  const vorname = document.getElementById("vorname") as HTMLInputElement;
  const nachname = document.getElementById("nachname") as HTMLInputElement;
  const land = document.getElementById("land") as HTMLSelectElement;

  const person: SimplePerson2 = {
    firstName: vorname.value,
    lastName: nachname.value,
    land: land.value,
  };
  console.log(person);
}

//! Dom-Elements-TS-Level-2_4
// - Schreibe eine Funktion, die beim Anklicken des Buttons die ausgewählte Farboption auf den Hintergrund des <body> anwendet.
// - **Bitte halte dich an den Typescript-Standard.**
// - Verwende den Code aus dem Code-Snippet.
// - Verwende folgende Befehle für die Aufgabe:
//     - addEventListener(“click”)
//     - event.preventDefault();
//     - .value oder [selectedIndex](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/selectedIndex).

//? Elemente holen

const selectBackgroundColor = document.getElementById(
  "farbeAuswahlen2"
) as HTMLSelectElement;
const backgroundButton = document.getElementById("button2") as HTMLInputElement;

//? EventListener

backgroundButton.addEventListener("click", (event: Event) => {
  event.preventDefault();
  console.log("clicked");
  addBackgroundColor();
});

//? function

function addBackgroundColor() {
  const colorValue = selectBackgroundColor.selectedIndex;
  const background = selectBackgroundColor.options[colorValue].value;
  console.log(background);
  document.body.style.backgroundColor = background;
}

//! Dom-Elements-TS-Level-2_10
// - Schreibe drei Funktionen, die beim Anklicken des Buttons den Style ändern.
// - **Bitte halte dich an den Typescript-Standard.**
// - Der HTML und CSS-Code ist vorgegeben (siehe Code-Snippet).
// - Nutze für die Aufgabe:
//     - classList
//     - transition-property
//     - transition-duration
//     - text-shadow

//? Elemente holen

const smallButton = document.getElementById("small-btn") as HTMLInputElement;
const mediumButton = document.getElementById("middle-btn") as HTMLInputElement;
const bigButton = document.getElementById("big-btn") as HTMLInputElement;
const textElement = document.getElementById("element") as HTMLElement;

//? Eventlistener

smallButton.addEventListener("click", () => {
  if (textElement.style.color === "red" && textElement.style.border) {
    textElement.style.color = "";
    textElement.style.border = "";
  } else {
    textElement.style.color = "red";
    textElement.style.border = "2px solid black";
  }
});

mediumButton.addEventListener("click", () => {
  if (textElement.style.color === "green" && textElement.style.border) {
    textElement.style.color = "";
    textElement.style.border = "";
  } else {
    textElement.style.color = "green";
    textElement.style.border = "6px solid black";
  }
});

bigButton.addEventListener("click", () => {
  if (textElement.style.color === "green" && textElement.style.border) {
    textElement.style.color = "";
    textElement.style.border = "";
  } else {
    textElement.style.color = "green";
    textElement.style.border = "16px solid green";
  }
});

//! Dom-Elements-TS-Level-3_1
// - Lernziel: Verwendung von Event-Listeners, Änderung von DOM-Elementen, Speicherung von Werten in Arrays und Aktualisierung der Anzeige.
// - Erstelle eine Todo-Liste, die es dir ermöglicht, Aufgaben hinzuzufügen, anzuzeigen, als "erledigt" zu markieren und zu löschen.
// - Hinzufügen von Todos:  Schreibe eine Function, um Aufgaben zur Liste hinzuzufügen, wenn der "Add"-Button geklickt wird.
// - Anzeigen von Todos:  Aktualisiere die Anzeige der Todo-Liste im DOM, sobald neue Aufgaben hinzugefügt werden.
// - Markieren von Todos als "erledigt":  Verwende eine Checkbox, um Todos als "erledigt" markieren zu können.
// - Löschen von Todos:  Implementiere die Möglichkeit, Todos aus der Liste zu löschen.

//? Elemente holen
const inputFieldTodo = document.getElementById(
  "input-todo"
) as HTMLInputElement;
const todoButton = document.getElementById("todo-btn") as HTMLInputElement;
const deleteButton = document.getElementById("delete-btn") as HTMLInputElement;
const todoList = document.getElementById("todo-list");

//*function
function addTodoItem() {
  const todoItem = document.createElement("input") as HTMLInputElement;
  todoItem.type = "checkbox";
  todoItem.value = inputFieldTodo.value;
  const todoItemValue = todoItem.value;

  console.log(todoItem);
  console.log(todoItemValue);

  const label = document.createElement("label");
  label.textContent = inputFieldTodo.value;

  todoList?.appendChild(todoItem);
  todoList?.appendChild(label);
  todoList?.appendChild(document.createElement("br"));

  inputFieldTodo.value = "";

  todoItem.addEventListener("change", function () {
    if (todoItem.checked) {
      label.style.textDecoration = "line-through";
    } else {
      label.style.textDecoration = "none";
    }
  });
}

//? eventListener
// todoButton.addEventListener("click", () => {});
todoButton.addEventListener("click", addTodoItem);
