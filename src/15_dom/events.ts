const clickButton = document.getElementById("click-button") as HTMLInputElement;
//? In der arrow function kann ich als Parameter das Event angeben
//? event kann weggelassen werden, wenn ich gar nicht darauf zugreifen möchte
//? addEventListner beginnt mit Ereignis(hier:'click) - dann kommt die arrow function
clickButton.addEventListener("click", () => {
  console.log("Simple button was Clicked");
});

const doubleClickButton = document.getElementById("double-click-button");
//? Auf den Doppelklick reagieren
//? relevantes Ereignis dblclick
doubleClickButton?.addEventListener("dblclick", () => {
  console.log(" Button was doubleclicked");
});

const hoverDiv = document.getElementById("hover-div");
//? Wir wollen auf das Hoverne reagieren
//? mouseover Ereignis für Hovern verwenden
hoverDiv?.addEventListener("mouseover", () => {
  console.log("Mouse hovering over Div");
});

const focusInput = document.getElementById("focus-input");
//? Darauf reagieren dass der Fokus in das Inputfeld gesetzt wurde
//? focus Ereignis nutzen
focusInput?.addEventListener("focus", () => {
  console.log("focus");
});

const typeInput = document.getElementById("type-input");
//? Wir wollen reagieren wenn etwas eingegeben wird
typeInput?.addEventListener("input", () => {
  console.log("text was typed");
});
//? wir müssen in ein HTMLInputElement umwandel um auf checkbox.checked zugreifen zu können
const checkBox = document.getElementById("checkbox") as HTMLInputElement;
//? bei checkbox ist es das change element

checkBox?.addEventListener("change", () => {
  console.log("checkbox was checked/unchecked");
  console.log(checkBox.checked);
});

const selectInput = document.getElementById("select-input");
//? Wir wollen reagieren wenn ein Wert ausgewählt wurde
//? Wir können uns den wert auf 2 arten herausholen
//? Fall1: über event.target
selectInput?.addEventListener("change", (event: Event) => {
  //? Ich holew mir über event.target das Usprungsselect element und wandle es direkt ine in HTMLSELECTELEMENT um damit ich auf die speziellen eigenschaften zugreifen kann
  const select = event.target as HTMLSelectElement;
  //? der ausgewählte WErt:
  const actualValue = select.value;
  console.log("Different option was selected");
  console.log("Aktueller wert im Select ist: ", actualValue);
  //? der ausgewählte Index:
  console.log("Aktueller selectierter Index: ", select.selectedIndex);
});

//* unser Standardfall
//? Fall2: direkt auf Element zugreifen
selectInput?.addEventListener("change", (event: Event) => {
  const select = selectInput as HTMLSelectElement;

  console.log("Different option was selected");
  console.log("Aktueller wert im Select ist: ", select.value);
  //? der ausgewählte Index:
  console.log("Aktueller selectierter Index: ", select.selectedIndex);
});

const submitForm = document.getElementById("submit-form");
//? Wir wollen verhindern dass die ganze seite neugeladen wird, daher geben wir hier den Parameter event an. Nur dann können wir event.preventDefault() aufrufen

submitForm?.addEventListener("submit", (event: Event) => {
  event.preventDefault();
  console.log("Form was submitted");
});

const googleLink = document.getElementById("link");
//? Wir wollen dass beim klick auf den link NICHT zu google navigiert wird sondern nur auf der console geloggt wird. auch hier verwenden wir das click-event
googleLink?.addEventListener("click", (event: Event) => {
  event.preventDefault();
  console.log("Link was clicked");
});
