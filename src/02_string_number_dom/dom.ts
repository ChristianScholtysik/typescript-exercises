console.clear();

console.log("in dom ts");

const contentElement = document.getElementById("content");
if (contentElement) {
  contentElement.innerHTML = "Hello World";
  contentElement.style.color = "red";
}

const darkBox = document.querySelector(".darkBox");
if (darkBox) {
  darkBox.innerHTML = "Hello Universe";
}

// window.alert("Achtung");

// const ageUserInput = window.prompt("how old are you?");
// console.log(ageUserInput);

// const confirmed = window.confirm("Ich habe die DSGVO gelesen");
// console.log({ confirmed });
