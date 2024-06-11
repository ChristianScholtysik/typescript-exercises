//! Bom-TS-Level-1_1
// - Schreibe eine Funktion, die nach x Sekunden einen Text anzeigt. Dafür kannst du die setTimeout()-Methode nutzen.
// - Schreibe anschließend eine weitere Funktion, die genau das Ergebnis, das unten in der Vorschau angezeigt wird, ausgibt. Nutze hierfür: setInterval(), clearInterval() und if/else.
// - **Bitte halte dich an den Typescript-Standard.**

function showMessage(message: string, delayInSeconds: number): void {
  setTimeout(() => {
    console.log(message);
  }, delayInSeconds * 1000); // Konvertiere Sekunden in Millisekunden
}

showMessage("Start, warten für 3 Sekunden...", 0);
showMessage("Erledigt, Du hast 3 Sekunden verschwendet!", 3);

function showRepeatingMessage(
  intervalInSeconds: number,
  totalTimeInSeconds: number
): void {
  let remainingTime = totalTimeInSeconds;
  const intervalId = setInterval(() => {
    if (remainingTime <= 0) {
      clearInterval(intervalId);
      console.log("Endlich Feierabend!");
    } else {
      console.log(remainingTime);
      remainingTime -= intervalInSeconds;
    }
  }, intervalInSeconds * 1000);
}

showRepeatingMessage(1, 10);

//! Bom-TS-Level-1_2
// - Lernziel: TypeScript-Eventhandling und Timer-Function.
// - **Bitte halte dich an den Typescript-Standard.**
// - Schreibe eine Function, die beim Klicken des Buttons von 100% bis 0% runterzählt.
// - HTML und CSS ist vorgegeben (siehe Code-Snippet).
// - Nutzen kannst du folgende Befehle und Methoden:  addEventListener, setInterval(), clearInterval(), if, else if und querySelector() oder getElementById().
function startCountdown(): void {
  const countdownElement = document.querySelector(".zeit") as HTMLElement;

  let percentage = 100;

  const intervalId = setInterval(() => {
    if (percentage === 0) {
      clearInterval(intervalId);
      countdownElement.textContent = "0%";
    } else {
      countdownElement.textContent = `${percentage}%`;
      percentage -= 1;
    }
  }, 1000);
}

const startButton = document.getElementById("btn");
if (startButton) {
  startButton.addEventListener("click", () => {
    startCountdown();
  });
}

//! Bom-TS-Level-1_3
// - Schreibe eine Function, die sich Daten aus dem Browser zieht und diese auf einer Seite anzeigt. Schaue dir zum besseren Verständnis die Vorschau an.
// - Schau dir dazu auch nochmal die Dokumentation von window.navigator an
// - Hole dir die Informationen über den Browser wie folgt:
//     - Browsername
//     - Betriebssystem-Architektur
//     - Browser-Version
//     - Window Auflösung
//     - Innenhöhe und -breite des Dokuments
//     - colorDepth
//     - pixelDepth

function displayBrowserInfo() {
  const browserInfoElement = document.getElementById("browserInfo");

  const browserName = window.navigator.userAgent;
  const OSArchitecture = window.navigator.platform;
  const browserVersion = window.navigator.appVersion;
  const windowResolution = `${window.innerWidth}x${window.innerHeight}`;
  const documentInnerSize = `${document.documentElement.clientWidth}x${document.documentElement.clientHeight}`;
  const colorDepth = window.screen.colorDepth;
  const pixelDepth = window.screen.pixelDepth;
  const browserInfoHTML = `
    <p><strong>Browsername:</strong> ${browserName}</p>
    <p><strong>Betriebssystem-Architektur:</strong> ${OSArchitecture}</p>
    <p><strong>Browser-Version:</strong> ${browserVersion}</p>
    <p><strong>Fensterauflösung:</strong> ${windowResolution}</p>
    <p><strong>Innenhöhe und -breite des Dokuments:</strong> ${documentInnerSize}</p>
    <p><strong>Farbtiefe:</strong> ${colorDepth} bits</p>
    <p><strong>Pixel-Tiefe:</strong> ${pixelDepth}</p>
`;

  browserInfoElement.innerHTML = browserInfoHTML;
}

displayBrowserInfo();
