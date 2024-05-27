import Color from "./special-color";

function randomColorGenerator(): Color {
  const colors = Object.values(Color) as Color[];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

export default randomColorGenerator;
