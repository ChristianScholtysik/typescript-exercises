//! Bom-TS-Level-2_1

// - Schreibe eine Function, die beim Laden der Seite die Zahlen runter zählt. Schau dir dazu die Ergebnisvorschau an.
// - **Bitte halte dich an den Typescript-Standard.**
// - HTML und CSS ist vorgegeben (siehe Code-Snippet).
// - Nutzen kannst du:
//     - setInterval()
//     - clearInterval()
//     - getElementsByClassName() oder getElementById()
//     - if/else if.

function startCountdownfromTen(): void {
  const countdownElement = document.getElementById("count") as HTMLElement;
  let count = 10;

  const intervalId = setInterval(() => {
    countdownElement.textContent = count.toString();
    count -= 1;

    if (count === 0) {
      clearInterval(intervalId);
      countdownElement.textContent = "0";
    }
  }, 1000);
}

window.onload = startCountdownfromTen;
