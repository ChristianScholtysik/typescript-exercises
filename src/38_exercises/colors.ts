type BasicColors = "RED" | "BLUE" | "GREEN" | "YELLOW" | "BLACK" | "WHITE";

type RealColors = Exclude<BasicColors, "BLACK" | "WHITE">;

function showColors(color: RealColors): void {
  console.log(`The selected color is ${color}`);
}

showColors("RED");
showColors("BLUE");
showColors("GREEN");
showColors("YELLOW");
