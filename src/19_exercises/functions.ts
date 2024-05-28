//! Clean-Code-TS-Level-1_1

const textInputField = document.getElementById(
  "input-field"
) as HTMLInputElement;

const buttonCountUpperCaseLetters = document.getElementById("upperCase");
const buttonCountSpaces = document.getElementById("spaces");
const buttonCountVowels = document.getElementById("vowels");
const outputDiv = document.getElementById("output") as HTMLDivElement;
const inputValue = textInputField?.value;

function countUpperCaseLetters() {
  const upperCaseCount = inputValue.match("[A-ZÄÖÜ]");
  upperCaseCount ? upperCaseCount.length : 0;
  return (outputDiv.innerText = `Ànzahl der Großbuchstaben: ${upperCaseCount?.length}`);
}

function countSpaces() {
  const spaceCountResult = inputValue.match(" ");
  spaceCountResult ? spaceCountResult.length : 0;
  return (outputDiv.innerText = `Ànzahl der Leerzeichen: ${spaceCountResult?.length}`);
}

function countVowels() {
  const vowelsCountResult = inputValue.match("aeiouäöüAEIOUÄÖÜ");
  vowelsCountResult ? vowelsCountResult.length : 0;
  return (outputDiv.innerText = `Ànzahl der Vokale: ${vowelsCountResult?.length}`);
}

buttonCountUpperCaseLetters?.addEventListener("click", () => {
  countUpperCaseLetters();
});

buttonCountSpaces?.addEventListener("click", () => {
  countSpaces();
});

buttonCountVowels?.addEventListener("click", () => {
  countVowels();
});
