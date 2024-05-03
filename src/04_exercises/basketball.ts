let counter1 = 0;

const counterField = document.getElementById("counter_home");
console.log(counterField);
const buttonElement1 = document.getElementById("button1-count1");
console.log(buttonElement1);

// * Überprüfung, ob beide Elemente gefunden wurden
if (counterField && buttonElement1) {
  console.log("test2");
  buttonElement1.addEventListener("click", handleCountButton1Clicked);
} else {
  console.error("counterElement oder buttonElement nicht gefunden!");
}

function handleCountButton1Clicked(event: MouseEvent) {
  console.log("test");
  event.preventDefault();
  counter1++;
  if (counterField) {
    counterField.textContent = counter1.toString();
  }
}
