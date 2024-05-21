// //!DOM-TS_Level-1_4

// // - Lernziel:
// //     - Dom-Manipulation unter Verwendung einer Function.
// //     - Datum und Uhrzeit anzeigen.
// //     - Werte aus einem Inputfeld im HTML ausgeben.
// // - Erstelle ein Input-Feld und einen Button im HTML.
// // - Erstelle eine Function, die die Eingabe aus einem Textfeld ausliest und dann diesen Text mit dem aktuellen Zeitstempel (nutze dafür new Date()) im HTML-Dokument anzeigt.
// // - Die Funktion soll aufgerufen werden, wenn auf den Button “Text hinzufügen” geklickt wird
// // - Verwende .innerHTML, um dort jeweils den Text und das Datum hinzuzufügen

// //? Alle Elemente aus dem HTML holen
// const inputFieldElement = document.getElementById(
//   "input-field"
// ) as HTMLInputElement;
// const inputButtonElement = document.getElementById("input-button");
// const resultDivElement = document.getElementById("result-output");

// //? Daten darstellen mit einer function

// function renderTextOutput() {
//   if (resultDivElement && inputFieldElement && inputButtonElement) {
//     inputFieldElement.value = "";
//     const actualDate = new Date();
//     inputButtonElement.addEventListener("click", () => {
//       resultDivElement.innerHTML = `${actualDate}: ${inputFieldElement.value}`;
//     });
//   }
// }
// renderTextOutput();

// //! DOM-TS-Level-1_2
// // - Lernziel: Mit TypeScript die Struktur und den Inhalt einer Webseite ändern (DOM-Manipulation).
// // - Verwende den vorgegebenen HTML-Code (siehe Code-Snippet)
// // - Hole dir mit document.getElementById(“info”) das Element und nutze dann .innerHTML
// //     - Erstelle eine h1 mit dem Text “Hello World”.
// //     - Füge noch eine h2 hinzu mit dem Text “How are you?”. Siehe dir anschließend das Ergebnis im Browser an.
// // - Jetzt arbeitest du weiter mit dem Code und fügst im HTML noch ein <div> mit der ID “container” ein.
// // - Nutze wieder document.getElementById('container')
// // - Erstelle einen <p>-Tag mit dem Text “This is a paragraph” und füge ihn zum container hinzu
// // - Füge ein weiteres Element vom Typ input hinzu. Das Input-Element soll vom Typ text sein

// const infoDiv = document.getElementById("info");
// const containerDiv = document.getElementById("container");
// if (infoDiv && containerDiv) {
//   infoDiv.innerHTML = "<h1>Hello World!</h1>";
//   infoDiv.innerHTML += "<h2>How are you?</h2>";
//   containerDiv.innerHTML += "<p>This is a paragraph</p>";
//   const inputElement = document.getElementById("input") as HTMLInputElement;
//   if (inputElement) {
//     inputElement.setAttribute("type", "text");
//     containerDiv.appendChild(inputElement);
//   }
// }

// //! DOM-TS-Level-1_3
// // - Erstelle im Code drei <figure> -Elemente für eine Galerie.
// // - Sie sollen Child-Element der section “gallery” sein
// // - Nutze den vorgegebenen HTML-Code.

// const galleryElement = document.getElementById("gallery");
// interface Image {
//   url: string;
// }
// if (galleryElement) {
//   const images: Image[] = [
//     { url: "./raoul-droog-yMSecCHsIBc-unsplash.jpg" },
//     { url: "./raoul-droog-yMSecCHsIBc-unsplash.jpg" },
//     { url: "./raoul-droog-yMSecCHsIBc-unsplash.jpg" },
//   ];
//   function renderImages() {
//     images.forEach((image) => {
//       const figure = document.createElement("figure");
//       const img = document.createElement("img");
//       img.src = image.url;
//       img.style.width = "300px";
//       figure.appendChild(img);
//       galleryElement?.appendChild(figure);
//     });
//   }

//   renderImages();
// }

// //! Dom-Elements-TS-Level-1_1

// // - Lernziel: die dynamische Erstellung von HTML-Elementen und ihre Integration in das DOM mithilfe der createElement-Methode.
// // - **Bitte halte dich an den Typescript-Standard.**
// // - Erstelle eine einfache Website auf der dynamisch eine Einkaufsliste erzeugt werden soll.
// // - Beim Klicken auf den Button sollte der eingegebene Text aus dem Input-Feld der Liste hinzugefügt werden.
// // - Das Input-Feld soll nach jedem Hinzufügen geleert werden.
// // - Das HTML ist vorgegeben (siehe Code-Snippet).
// // - Du kannst folgendes nutzen:
// //     - createElement
// //     - appendChild
// //     - getElementById
// //     - textContent
// //     - EventListener

// // # ✨ Bonus

// // - Leider kann man auch leere Eingaben der Liste hinzufügen.
// // - Passe deinen Code so an, dass vorher geprüft wird, ob die Eingabe gültig ist und somit leere Eingaben auch nicht hinzugefügt werden können.
// // - Schneide vorne und hinten Leerzeichen beim eingegebenen Text ab
// // - Du kannst folgendes nutzen:
// //     - Conditionals
// //     - string-Methods

// //? Alle Elemente aus dem HTML holen
// const inputElement = document.getElementById("inputText") as HTMLInputElement;
// const addButton = document.getElementById("add-button");
// const errorMessage = document.getElementById("error-message") as HTMLDivElement;

// //? Daten darstellen mit einer Function
// function createShoppingList() {
//   if (inputElement && addButton) {
//     addButton.addEventListener("click", () => {
//       const inputElementValue = inputElement.value;

//       const shoppingList = document.getElementById("myList");
//       if (shoppingList) {
//         // const shoppingListItem = document.createElement("li");
//         errorMessage.textContent = "";
//         if (inputElementValue === "") {
//           console.log("Bitte gib etwas ein");

//           console.log({ inputElement });

//           errorMessage.textContent = "Bitte gib etwas ein";
//           console.log(errorMessage);
//         } else {
//           shoppingList.innerHTML += `<li>${inputElementValue}</li>`;
//           inputElement.value = "";

//           // errorMessage.textContent = "";
//         }
//       }
//     });
//   }
// }
// createShoppingList();

// //! Dom-Elements-TS-Level-1_2
// // - Schreibe eine Funktion, die beim Anklicken der Buttons die Hintergrundfarben aller Elemente ändert.
// // - **Bitte halte dich an den Typescript-Standard.**
// // - HTML- und CSS-Code findest du im Code-Snippet.
// // - Nutze zum Beispiel:
// //     - getElementsByClassName
// //     - for-loop
// //     - oder length
// // # ✨ Bonus

// // - Wenn man nochmal auf den Button klickt, ändert sich die Hintergrundfarbe wieder zurück.

// //? Alle Elemente holen

// const colorChangeButton = document.getElementById("color-change-button");

// //?
// function colorChange(): void {
//   if (colorChangeButton) {
//     colorChangeButton.addEventListener("click", () => {
//       const allColorChangeElements = document.getElementsByClassName("example");

//       for (let index = 0; index < allColorChangeElements.length; index++) {
//         const element = allColorChangeElements[index] as HTMLElement;
//         element.classList.toggle("example2");
//       }
//     });
//   }
// }

// colorChange();

//! DOM-TS_Level-1_4

// Ziel:
// - DOM-Manipulation mit einer Funktion.
// - Anzeige von Datum und Uhrzeit.
// - Auslesen und Anzeigen von Werten aus einem Eingabefeld im HTML.

//? HTML Elemente auswählen
const inputFieldElement = document.getElementById(
  "input-field"
) as HTMLInputElement;
const inputButtonElement = document.getElementById("input-button");
const resultDivElement = document.getElementById("result-output");

//? Funktion zur Darstellung der Eingabe mit Zeitstempel
function renderTextOutput() {
  // Sicherstellen, dass alle Elemente existieren
  if (resultDivElement && inputFieldElement && inputButtonElement) {
    // Event-Listener für den Button hinzufügen
    inputButtonElement.addEventListener("click", () => {
      // Aktuelles Datum und Uhrzeit abrufen
      const actualDate = new Date();
      // Eingabetext und Zeitstempel im Ergebnis-Div anzeigen
      resultDivElement.innerHTML = `${actualDate}: ${inputFieldElement.value}`;
      // Eingabefeld leeren
      inputFieldElement.value = "";
    });
  }
}

// Funktion aufrufen
renderTextOutput();

//! DOM-TS-Level-1_2

// Ziel: Mit TypeScript die Struktur und den Inhalt einer Webseite ändern (DOM-Manipulation).

//? HTML Elemente auswählen
const infoDiv = document.getElementById("info");
const containerDiv = document.getElementById("container");

//? Inhalte zu den ausgewählten Elementen hinzufügen
if (infoDiv && containerDiv) {
  // Hinzufügen von Überschriften
  infoDiv.innerHTML = "<h1>Hello World!</h1>";
  infoDiv.innerHTML += "<h2>How are you?</h2>";

  // Paragraph hinzufügen
  containerDiv.innerHTML += "<p>This is a paragraph</p>";

  // Input-Feld erstellen und hinzufügen
  const inputElement = document.createElement("input");
  inputElement.setAttribute("type", "text");
  containerDiv.appendChild(inputElement);
}

//! DOM-TS-Level-1_3

// Ziel: Drei <figure>-Elemente für eine Galerie erstellen und zur "gallery"-Section hinzufügen.

//? HTML Element auswählen
const galleryElement = document.getElementById("gallery");

//? Bilddaten für die Galerie
interface Image {
  url: string;
}

if (galleryElement) {
  const images: Image[] = [
    { url: "./raoul-droog-yMSecCHsIBc-unsplash.jpg" },
    { url: "./raoul-droog-yMSecCHsIBc-unsplash.jpg" },
    { url: "./raoul-droog-yMSecCHsIBc-unsplash.jpg" },
  ];

  //? Funktion zur Erstellung und Darstellung der Bilder
  function renderImages() {
    images.forEach((image) => {
      const figure = document.createElement("figure");
      const img = document.createElement("img");
      img.src = image.url;
      img.style.width = "300px";
      figure.appendChild(img);
      galleryElement?.appendChild(figure);
    });
  }

  // Bilder rendern
  renderImages();
}

//! DOM-Elements-TS-Level-1_1

// Ziel: Dynamische Erstellung einer Einkaufsliste bei Klick auf den Button.

//? HTML Elemente auswählen
const inputElement = document.getElementById("inputText") as HTMLInputElement;
const addButton = document.getElementById("add-button");
const errorMessage = document.getElementById("error-message") as HTMLDivElement;

//? Funktion zur Erstellung der Einkaufsliste
function createShoppingList() {
  if (inputElement && addButton) {
    addButton.addEventListener("click", () => {
      const inputElementValue = inputElement.value.trim();

      const shoppingList = document.getElementById("myList");
      if (shoppingList) {
        errorMessage.textContent = "";

        // Überprüfung, ob das Eingabefeld leer ist
        if (inputElementValue === "") {
          errorMessage.textContent = "Bitte gib etwas ein";
        } else {
          // Neues Listenelement hinzufügen
          shoppingList.innerHTML += `<li>${inputElementValue}</li>`;
          // Eingabefeld leeren
          inputElement.value = "";
        }
      }
    });
  }
}

// Funktion aufrufen
createShoppingList();

//! DOM-Elements-TS-Level-1_2

// Ziel: Hintergrundfarben aller Elemente ändern, wenn die Buttons angeklickt werden.

//? HTML Element auswählen
const colorChangeButton = document.getElementById("color-change-button");

// Funktion zur Farbänderung der Elemente
function colorChange(): void {
  if (colorChangeButton) {
    colorChangeButton.addEventListener("click", () => {
      const allColorChangeElements = document.getElementsByClassName("example");

      // Durch alle Elemente iterieren und die Hintergrundfarbe ändern
      for (let index = 0; index < allColorChangeElements.length; index++) {
        const element = allColorChangeElements[index] as HTMLElement;
        element.classList.toggle("example2");
      }
    });
  }
}

// Funktion aufrufen
colorChange();
