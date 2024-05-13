console.clear();
// - Nehmen wir an, wir wollen automatisiert 100 Dateinamen für Bilder in unserem Ordner erstellen. Wir erstellen dazu ein Array mit standardisierten Dateinamen – wie in der Ergebnisvorschau.
// - Deklariere dafür die Function createImageNames.
// - Deklariere im Funktionskörper die Variable returnArray als leeres Array.
// - Schreibe eine for-Schleife.
// - Du kannst Conditionals Statements (if, else) nutzen, wenn du den Dateinamen zusammenbaust, um zu ermittelt wie viel Nullen vor der Zahl stehen müssen. Alternativ kannst du die String-Methode [padStart()](https://www.w3schools.com/jsref/jsref_string_padstart.asp) einsetzen.
// - Nutze push() um den jeweiligen Dateinamen ins Array zu schreiben
// - Gib das Array mit return aus der Funktion zurück
// - Lasse dir das Ergebnis auf der Konsole ausgeben

function createImageNames2(): string[] {
  const returnArray = [];
  for (let index = 1; index <= 100; index++) {
    //image_001.jpg
    //conditional:
    let fileName = "";
    if (index < 10) {
      fileName = "image_00" + index + ".jpg";
    } else if (index < 99 && index > 10) {
      fileName = "image_0" + index + ".jpg";
    } else fileName = "image_" + index + ".jpg";

    //console.log(fileName);
    returnArray.push(fileName);
  }
  //! immer nach der Schleife das Ergebnis zurückgeben -returnen
  return returnArray;
}
const allFileNames = createImageNames2();
console.log({ allFileNames });

//-----------------------------with Pads ----------------------------
function createImageNamesWithPads(): string[] {
  const returnArray = [];
  for (let index = 1; index <= 100; index++) {
    //image_001.jpg
    //padStart():
    let fileName = "image_" + index.toString().padStart(3, "0") + ".jpg";
    //console.log(fileName);
    returnArray.push(fileName);
  }
  //! immer nach der Schleife das Ergebnis zurückgeben -returnen
  return returnArray;
}
const allFileNamesWithPads = createImageNamesWithPads();
console.log({ allFileNamesWithPads });
//!_____________________________________________________________________
// - Lernziel: Textausgabe je nach Eingabe der User:innen erstellen unter Verwendung von Bedingungen und Schleifen.
// - In deinem HTML ist ein Inputfeld zu sehen, in das User:innen eine Zahl eingeben können. So wird die Anzahl des Buchstabens "o" festgelegt.
// - Schreibe eine Funktion, mit der du am Ende in deinem HTML das Wort "Loop" ausgibst, mit der eingegebenen Anzahl an Os aus dem Input-Feld.
// - **Bitte halte dich an den Typescript-Standard.
console.clear();
//? Alle Elemente aus dem HTML holen
const countInputElement = document.getElementById(
  "count-input"
) as HTMLInputElement;
const loopButton = document.getElementById("loop-button");
const loopOutput = document.getElementById("loop-output");

//? EventListener für Button
function handleLoopButtonClicked(event: Event) {
  event.preventDefault();
  console.log("Button clicked");
  //?Anzahl aus dem Input Feld holen
  if (countInputElement.value) {
    //?Wort zusammenbauen
    const count = Number(countInputElement.value);
    console.log(count);
    let oString = "";
    for (let index = 0; index < count; index++) {
      oString = oString + "o";
    }

    console.log("L" + oString + "p");
    //? Wort im output Feld ausgeben
    if (loopOutput) {
      loopOutput.style.color = "green";
      loopOutput.innerHTML = "L" + oString + "p";
      //* Alernative:
      //*   loopOutput.innerHTML="L" + 'o'.repeat(count) + "p";
    }
  }
}
if (loopButton) {
  loopButton?.addEventListener("click", handleLoopButtonClicked);
  loopButton.addEventListener("click", (event: Event) => {
    event.preventDefault();
    //Logik.....
  });
}
