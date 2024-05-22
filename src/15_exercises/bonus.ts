//! Events-TS-Level-2_2
// - Schreibe eine kleine App, die dir die Taste ("key"), den Unicode Tastencode ("keyCode") und den "Code" anzeigt, sobald du eine Taste auf deinem Keyboard drückst.
// - [Hier](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code) findest du die nötigen Informationen.

//? Elemente holen

// const keyOutput = document.getElementById("key-output");
// const codeOutput = document.getElementById("code-output");
// const keyCodeOutput = document.getElementById("keycode-output");
// const resultOutput = document.getElementById("result-output");

//? eventListener
window.addEventListener(
  "keydown",
  (event) => {
    const keyOutput = document.getElementById("key-output");
    const codeOutput = document.getElementById("code-output");
    const keyCodeOutput = document.getElementById("keycode-output");
    const resultOutput = document.getElementById("result-output");
    if (keyCodeOutput && keyOutput && codeOutput && resultOutput) {
      resultOutput.textContent = `${event.keyCode}`;
      keyOutput.textContent = `${event.key}`;
      codeOutput.textContent = `${event.code}`;
      keyCodeOutput.textContent = `${event.keyCode}`;

      resultOutput?.appendChild(resultOutput);
      window.scrollTo(0, document.body.scrollHeight);
    }
  },
  true
);
