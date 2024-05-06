console.clear();

let toDoItem: string;
let atTheBack: boolean;

const toDoItems: string[] = [];

function addItem(toDoItem: string, atTheBack: boolean) {
  if (atTheBack === true) {
    toDoItems.push(toDoItem);
  } else {
    toDoItems.unshift(toDoItem);
  }
  return;
}

addItem("Wäsche waschen", true);
console.log(toDoItems);
addItem("Fitness", false);
console.log(toDoItems);
addItem("Einkaufen", true);
console.log(toDoItems);
addItem("Steuererklärung machen", false);
console.log(toDoItems);

//! removeItem

function removeItem(atTheBack: boolean) {
  if (atTheBack === true) {
    toDoItems.pop();
  } else {
    toDoItems.shift();
  }
  return;
}

//!addItemAt
function addItemAt(toDoItem: string, index: number) {
  toDoItems.splice(index, 0, toDoItem);
  return;
}
addItemAt("Pizza bestellen", 2);
addItemAt("Auto waschen", 3);
addItemAt("Blumenstrauss besorgen", 0);
console.log(toDoItems);

//! RemoveItemAt
function removeItemAt(indexToRemove: number) {
  const deletedItemAt = toDoItems.splice(0, indexToRemove);
  console.log("removeItemAt: ", deletedItemAt);
}

removeItemAt(1);
console.log("remove list:", toDoItems);

//! PrintList
function printList(): void {
  console.log(toDoItems);
}

printList();

//*Bonus

function printPretty() {
  console.log(toDoItems.join("**"));
}
printPretty();

//!!BonusBonus
const buttonAdd5Items = document.getElementById("btn");
const listOl = document.getElementById("list");
if (buttonAdd5Items) {
  buttonAdd5Items.addEventListener("click", askForUserInput);
} else {
  console.error("nicht gefunden!");
}

function askForUserInput(event: MouseEvent) {
  event.preventDefault();
  const userInput = window.prompt("Enter 5 to-dos separated by commas");
  if (userInput) {
    const items = userInput.split(",").map((item) => item.trim());
    items.forEach((item) => {
      toDoItems.unshift(item);
      const listItem = document.createElement("li");
      listItem.appendChild(document.createTextNode(item));
      listOl.appendChild(listItem);
    });
    console.log("To-Do items:", toDoItems);
  } else {
    console.log("No input");
  }
}
// console.log(toDoItems);
// toDoItems.slice();
console.log("Array", toDoItems);
