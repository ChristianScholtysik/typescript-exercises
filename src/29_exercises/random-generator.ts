function randomNumber(): string {
  const num = Math.random() * 100;
  return num.toString();
}

function randomText(): string {
  const texts = ["Hallo", "Welt", "ich", "habe ", "keine", "Lust"];
  const randomIndex = Math.floor(Math.random() * texts.length);
  return texts[randomIndex];
}

function randomBoolean(): string {
  const bool = Math.random() >= 0.5;
  return bool.toString();
}

function randomEmoji(): string {
  const emojis = ["🧚‍♀️", "🍄‍🟫", "🚀", "🌟", "🐱"];
  const randomIndex = Math.floor(Math.random() * emojis.length);
  return emojis[randomIndex];
}
//? ---------------------
const headlineElement = document.getElementById("headline");
const randomButton = document.getElementById(
  "randomButton"
) as HTMLInputElement;

const randomFunctions = [randomBoolean, randomEmoji, randomNumber, randomText];

function updateHeadline(callback: () => string): void {
  if (headlineElement) {
    headlineElement.textContent = callback();
  }
}

//* Event Listener
randomButton?.addEventListener("click", () => {
  const zufall =
    randomFunctions[Math.floor(Math.random() * randomFunctions.length)];

  updateHeadline(zufall);
});
