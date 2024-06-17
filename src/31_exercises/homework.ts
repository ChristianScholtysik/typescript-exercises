//! Promises-TS-Level-1_4
export {};
// - Wir bauen auf [Promises-TS-Level-1_3](https://www.notion.so/Promises-TS-Level-1_3-1a6924c792be45128d78760f608b5b37?pvs=21) auf
// - Erst wenn alle drei Promises resolved werden, sollen die Texte auf der Seite im Paragraph erscheinen
// - Nutze dafür Promise.all
// - Zusätzlich soll “Homework done” angehängt werden

const exercise1 = new Promise<string>((resolve) => {
  setTimeout(() => {
    resolve("Exercise 1 done.");
  }, 20000);
});

const exercise2 = new Promise<string>((resolve) => {
  setTimeout(() => {
    resolve("Exercise 2 done.");
  }, 30000);
});

const exercise3 = new Promise<string>((resolve) => {
  setTimeout(() => {
    resolve("Exercise 3 done.");
  }, 40000);
});

const paragraph = document.getElementById("status2") as HTMLParagraphElement;

if (paragraph) {
  paragraph.textContent = "Starting...";

  Promise.all([exercise1, exercise2, exercise3]).then((messages) => {
    paragraph.textContent = messages.join(" ") + " Homework done";
  });
} else {
  console.error("Error: not found");
}
