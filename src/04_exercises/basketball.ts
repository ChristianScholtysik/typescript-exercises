console.log("HelloWorld");

let counter1 = 0;
let counter2 = 0;
// let userInputTeamName1;
// let userInputTeamName2;

const counterField = document.getElementById("counter_home");
const counterFieldAway = document.getElementById("counter_away");
const teamName1 = document.getElementById("team1");
const teamName2 = document.getElementById("team2");

const buttonElement1 = document.getElementById("button1-count1");
const buttonElement2 = document.getElementById("button2-count2");
const buttonElement3 = document.getElementById("button3-count3");
const buttonElement4 = document.getElementById("button4-count1");
const buttonElement5 = document.getElementById("button5-count2");
const buttonElement6 = document.getElementById("button6-count3");

const buttonReset = document.getElementById("reset");
const buttonTeamName = document.getElementById("teamName");

// * Home Button +1
if (counterField && buttonElement1) {
  buttonElement1.addEventListener("click", handleCountButton1Clicked);
} else {
  console.error("counterElement oder buttonElement nicht gefunden!");
}

function handleCountButton1Clicked(event: MouseEvent) {
  event.preventDefault();
  counter1++;
  if (counterField) {
    counterField.textContent = counter1.toString();
  }
}
//* Home Button +2
if (counterField && buttonElement2) {
  buttonElement2.addEventListener("click", handleCountButton2Clicked);
} else {
  console.error("counterElement oder buttonElement nicht gefunden!");
}

function handleCountButton2Clicked(event: MouseEvent) {
  event.preventDefault();
  counter1 += 2;
  if (counterField) {
    counterField.textContent = counter1.toString();
  }
}

// * Home Button +3
if (counterField && buttonElement3) {
  buttonElement3.addEventListener("click", handleCountButton3Clicked);
} else {
  console.error("counterElement oder buttonElement nicht gefunden!");
}

function handleCountButton3Clicked(event: MouseEvent) {
  event.preventDefault();
  counter1 += 3;
  if (counterField) {
    counterField.textContent = counter1.toString();
  }
}

// * Away Button +1
if (counterFieldAway && buttonElement4) {
  buttonElement4.addEventListener("click", handleCountButton4Clicked);
} else {
  console.error("counterElement oder buttonElement nicht gefunden!");
}

function handleCountButton4Clicked(event: MouseEvent) {
  event.preventDefault();
  counter2 += 1;
  if (counterFieldAway) {
    counterFieldAway.textContent = counter2.toString();
  }
}

// * Away Button +2
if (counterFieldAway && buttonElement5) {
  buttonElement5.addEventListener("click", handleCountButton5Clicked);
} else {
  console.error("counterElement oder buttonElement nicht gefunden!");
}

function handleCountButton5Clicked(event: MouseEvent) {
  event.preventDefault();
  counter2 += 2;
  if (counterFieldAway) {
    counterFieldAway.textContent = counter2.toString();
  }
}

// * Away Button +3
if (counterFieldAway && buttonElement6) {
  buttonElement6.addEventListener("click", handleCountButton6Clicked);
} else {
  console.error("counterElement oder buttonElement nicht gefunden!");
}

function handleCountButton6Clicked(event: MouseEvent) {
  event.preventDefault();
  counter2 += 3;
  if (counterFieldAway) {
    counterFieldAway.textContent = counter2.toString();
  }
}

// * RESET
if (counterFieldAway && counterField && buttonReset) {
  buttonReset.addEventListener("click", handleCountButtonResetClicked);
} else {
  console.error("counterElement oder buttonElement nicht gefunden!");
}

function handleCountButtonResetClicked(event: MouseEvent) {
  event.preventDefault();
  counter1 = 0;
  counter2 = 0;
  if (counterField) {
    counterField.textContent = counter1.toString();
  }
  if (counterFieldAway) {
    counterFieldAway.textContent = counter2.toString();
  }
}

// * TEAMNAME
if (teamName1 && teamName2 && buttonTeamName) {
  buttonTeamName.addEventListener("click", handleCountButtonTeamNameClicked);
} else {
  console.error("counterElement oder buttonElement nicht gefunden!");
}

let userInputTeamName1;
let userInputTeamName2;

function handleCountButtonTeamNameClicked(event: MouseEvent) {
  event.preventDefault();
  userInputTeamName1 = window.prompt("Gib Team 1 ein");
  userInputTeamName2 = window.prompt("Gib Team 2 ein");

  if (teamName1 && userInputTeamName1) {
    teamName1.textContent = userInputTeamName1;
  }
  if (teamName2 && userInputTeamName2) {
    teamName2.textContent = userInputTeamName2;
  }
}
