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

const paragraph = document.getElementById("status") as HTMLParagraphElement;

paragraph.textContent = "Starting...";

exercise1.then((message) => {
  paragraph.textContent += ` ${message}`;
});

exercise2.then((message) => {
  paragraph.textContent += ` ${message}`;
});

exercise3.then((message) => {
  paragraph.textContent += ` ${message}`;
});
