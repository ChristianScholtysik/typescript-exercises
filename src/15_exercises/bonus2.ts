//! Dom-Elements-TS-Level-1_3
// - Schreibe eine Function, die beim Anklicken der Buttons jeweils den Inhalt der Elemente anzeigt. Schau dir das Ergebnis in der Ergebnisvorschau an.
// - **Bitte halte dich an den Typescript-Standard.**
// - Den HTML- und CSS-Code findest du im Code-Snippet.
// - Nutze:
//     - firstElementChild
//     - lastElementChild
//     - nextElementSibling
//     - previousElementSibling
//     - innerHTML
//     - querySelectorAll
//     - querySelector
//     - addEventListener

// //? Elemente holen

const divWrapper = document.querySelector(".unten");
const list = document.getElementById("myList");
const output = document.querySelector("output");

const listElements = list?.children;

//? Function
function clickButtonElement() {
  if (listElements) {
    const firstListElement = listElements[0];
    const secondListElement = listElements[1];
    const sixthListElement = listElements[5];
    const seventhListElement = listElements[6];

    const childElements = divWrapper?.children;

    if (childElements) {
      const firstElementChild = childElements[0];
      const lastElementChild = childElements[2];
      const firstElementChildSibling = childElements[4];
      const lastElementChildSibling = childElements[6];

      firstElementChild.addEventListener("click", () => {
        const result = document.createElement("p");
        result.textContent = firstListElement.textContent;
        output?.appendChild(result);
      });

      lastElementChild.addEventListener("click", () => {
        const result = document.createElement("p");
        result.textContent = secondListElement.textContent;
        output?.appendChild(result);
      });

      firstElementChildSibling.addEventListener("click", () => {
        const result = document.createElement("p");
        result.textContent = sixthListElement.textContent;
        output?.appendChild(result);
      });

      lastElementChildSibling.addEventListener("click", () => {
        const result = document.createElement("p");
        result.textContent = seventhListElement.textContent;
        output?.appendChild(result);
      });
    }
  }
}

clickButtonElement();
