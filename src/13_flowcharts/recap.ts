enum PizzaSizes {
  Small,
  Medium,
  Large,
  Family,
}

enum PizzaIngredient {
  Cheese,
  Onion,
  Mushrooms,
  Salami,
}

type Pizza2 = { size: PizzaSizes; ingredients: PizzaIngredient[] };
const pizzaFunghi2: Pizza2 = {
  size: PizzaSizes.Medium,
  ingredients: [PizzaIngredient.Cheese, PizzaIngredient.Mushrooms],
};

//? Size der Pizza Funghi ausgeben
console.log("Size ist: ", pizzaFunghi2.size);
console.log("Size name is: ", PizzaSizes[pizzaFunghi2.size]);

//! Color Buttons

enum ClothingColor2 {
  Gelb = "#FFFF00",
  Orange = "#EA710A",
  Pink = " #D60AEA",
  Blau = "#2596be",
  Lila = "#780AEA",
  Grau = "#AAA9AA",
  Black = "#000000",
}

const allColors2: ClothingColor2[] = [
  ClothingColor2.Gelb,
  ClothingColor2.Orange,
  ClothingColor2.Pink,
  ClothingColor2.Blau,
  ClothingColor2.Lila,
  ClothingColor2.Grau,
];

const colorButtonsOutput = document.getElementById("colorButtons");
if (colorButtonsOutput) {
  allColors2.forEach((color: ClothingColor2) => {
    const button = document.createElement("button");
    button.innerText = color;
    button.style.backgroundColor = color;
    colorButtonsOutput.appendChild(button);
  });

  // ? Alternative
  for (let index = 0; index < Object.keys(ClothingColor2).length; index++) {
    const button = document.createElement("button");
    button.innerText = Object.keys(ClothingColor2)[index];
    button.style.backgroundColor = Object.values(ClothingColor2)[index];
    button.style.color = "white";
    colorButtonsOutput.appendChild(button);
  }
}

//!

enum BasicShape2 {
  "Square",
  "Circle",
  "Triangle",
  "Rectangle",
}

enum ExtendedShape2 {
  "Ellipse",
  " Rhombus",
  BasicShape,
}

console.log(ExtendedShape2);
console.log(BasicShape2);
