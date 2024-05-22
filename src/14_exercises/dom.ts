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

//*Bonus ----------------------------------------------
//!DOM-TS-Level-1_5
//? Lernziel: URL der aktuellen Seite im HTML ausgeben lassen.
//? Schreibe eine Function showURL(), die ausgeführt wird, wenn du auf den Button "Zeige mir die URL!" klickst.
//? Filtere über die Function die URL der Seite heraus und lasse sie dir unterhalb des Buttons anzeigen.
// ? **Bitte halte dich an den Typescript-Standard.**

//? HTML Elemente auswählen
const urlButton = document.getElementById("url-button") as HTMLElement;
const urlOutput = document.getElementById("url-output");

//? Funktion zur Anzeige der URL

// Definiere eine Funktion namens showURL
function showURL() {
  const currentURL = window.location.href;

  // Überprüfen, ob das Element urlOutput existiert
  if (urlOutput) {
    urlOutput.innerHTML = `${currentURL}`;
  }
}

// Überprüfen, ob das Element urlButton existiert
if (urlButton) {
  // Der Ereignislistener löst die Funktion showURL aus, wenn der Button geklickt wird
  urlButton?.addEventListener("click", showURL);
}

//! Dom-Elements-TS-Level-2_3
// ? Weiter geht es mit der [getElementsByTagName-Methode]
// ? Schreibe eine Function, die beim Anklicken des “Change me”-Buttons die Button- und Hintergrundfarbe der einzelnen Elemente ändert.
// ? Nutze folgende Farben:
//     - #f6c89f
//     - #ffe7d1
//     - #4b8e8d
//     - #396362
//     - #666
//     - #333
const changeButton = document.getElementById("change-button") as HTMLElement;
console.log({ changeButton });
const home = document.getElementById("home") as HTMLElement;
const contact = document.getElementById("contact") as HTMLElement;
const news = document.getElementById("news") as HTMLElement;
// const nav = document.getElementById("nav") as HTMLElement;

//?Speichern der Stile in Variablen

const originalHomeStyle = {
  backgroundColor: home.style.backgroundColor,
  padding: home.style.padding,
  color: home.style.color,
};

const originalContactStyle = {
  backgroundColor: contact.style.backgroundColor,
  padding: contact.style.padding,
  color: contact.style.color,
};

const originalNewsStyle = {
  backgroundColor: news.style.backgroundColor,
  color: news.style.color,
};

const originalButtonStyle = {
  backgroundColor: changeButton.style.backgroundColor,
};

if (changeButton) {
  changeButton.addEventListener("click", changeColors);
}

//? Funktion zum Ändern der Farben und Stile
function changeColors() {
  if (home.style.backgroundColor === originalHomeStyle.backgroundColor) {
    // Setzen Sie neue Stile
    home.style.backgroundColor = "#f6c89f";
    home.style.padding = "1rem";
    home.style.color = "#666";
    contact.style.backgroundColor = "#ffe7d1";
    contact.style.padding = "1rem";
    contact.style.color = "#666";
    news.style.backgroundColor = "#4b8e8d";
    news.style.color = "#666";
    changeButton.style.backgroundColor = "#396362";
  } else {
    // Setzen Sie die ursprünglichen Stile zurück
    home.style.backgroundColor = originalHomeStyle.backgroundColor;
    home.style.padding = originalHomeStyle.padding;
    home.style.color = originalHomeStyle.color;
    contact.style.backgroundColor = originalContactStyle.backgroundColor;
    contact.style.padding = originalContactStyle.padding;
    contact.style.color = originalContactStyle.color;
    news.style.backgroundColor = originalNewsStyle.backgroundColor;
    news.style.color = originalNewsStyle.color;
    changeButton.style.backgroundColor = originalButtonStyle.backgroundColor;
  }
}
