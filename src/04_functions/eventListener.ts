const counterElement = document.getElementById("counter");
let counter = 0;

// if (counterElement) {
//   function handleCountButtonClicked(event: MouseEvent): void {
//     event.preventDefault();
//     counter++;
//     if (counterElement) {
//       counterElement.textContent = counter.toString();
//     }
//   }

function handleCountButtonClicked(event: MouseEvent): void {
  event.preventDefault();
  counter++;
  if (counterElement) {
    counterElement.textContent = counter.toString();
  }
}

const buttonElement = document.getElementById("button-count");
if (buttonElement) {
  buttonElement.addEventListener("click", handleCountButtonClicked);
}

//   const buttonElement = document.getElementById("btn-count");
//   if (buttonElement) {
//     buttonElement.addEventListener("click", (event) => {
//       event.preventDefault();
//       counter++;
//       counterElement.textContent = counter.toString();
//     });
//   }
//}
