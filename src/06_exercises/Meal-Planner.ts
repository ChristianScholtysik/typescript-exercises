console.clear();

const week1Array: string[] = ["essen", "essen"];
const week2Array: string[] = ["essen2", "essen2"];
const week3Array: string[] = ["essen3", "essen3"];
const week4Array: string[] = ["essen4", "essen4"];

const week1 = document.getElementById("week1");

const week2 = document.getElementById("week2");
const week3 = document.getElementById("week3");
const week4 = document.getElementById("week4");

const submitBtn = document.getElementById("addMeal");
const inputField = document.getElementById("mealName");
const weekSelector = document.getElementById("weekSelector");
const mealList = document.getElementById("mealList");
const allWeeksDiv = document.getElementById("allWeeks");

function chooseWeek1(event: MouseEvent) {
  event.preventDefault();
  if (weekSelector === week1) {
    console.log(week1Array);
    // mealList.textContent = week1Array.toString();
  }
  if (weekSelector === week2) {
    return console.log(week2Array);
  }
  if (weekSelector === week3) {
    return console.log(week3Array);
  }
  if (weekSelector === week4) {
    return console.log(week4Array);
  }
}

// if (submitBtn && inputField && weekSelector && list) {
//   submitBtn.addEventListener("click", MealInput);
//   weekSelector.addEventListener("change", changeWeek);
// } else {
//   console.error("nicht gefunden!");
// }

// function changeWeek() {
//   if (week1) {
//     week1Array;
//   }
// }

// function MealInput(event: MouseEvent) {
//   event.preventDefault();
