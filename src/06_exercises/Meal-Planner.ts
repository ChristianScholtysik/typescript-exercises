console.clear();

const week1Array: string[] = [];
const week2Array: string[] = [];
const week3Array: string[] = [];
const week4Array: string[] = [];

const week1 = document.getElementById("week1");
const week2 = document.getElementById("week2");
const week3 = document.getElementById("week3");
const week4 = document.getElementById("week4");

const submitBtn = document.getElementById("btn");
const inputField = document.getElementById("inputField");
const weekSelector = document.getElementById("week");
const list = document.getElementById("currentWeek");

if (submitBtn && inputField && weekSelector && list) {
  submitBtn.addEventListener("click", MealInput);
  weekSelector.addEventListener("change", changeWeek);
} else {
  console.error("nicht gefunden!");
}

function changeWeek() {
  if (week1) {
    week1Array;
  }
}

function MealInput(event: MouseEvent) {
  event.preventDefault();

  //   if (inputField) {
  //     const meal = inputField.split(",");
  //     currentWeek.forEach((meal) => {
  //       const listItem = document.createElement("li");
  //       listItem.textContent = meal;
  //       mealList.appendChild(listItem);
  //     });
  //     console.log("To-Do items:", toDoItems);
  //   } else {
  //     console.log("No input");
  //   }
}
