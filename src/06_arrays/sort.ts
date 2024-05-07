console.clear();

const colors: string[] = ["red", "yellow", "green", "blue", "pink"];
const newPrices: number[] = [111, 20, 66, 5, 1200, 7];

//? Reverse: Reihenfolge umdrehen
// colors.reverse();
// console.log({ colors });
// newPrices.reverse();
// console.log({ newPrices });

//? Sort: das array sortieren

console.log(colors.sort());
console.log(newPrices.sort());

//? newPrices aufsteigend sortierend
function sortAscending(a: number, b: number) {
  return a - b;
}
console.log(newPrices.sort(sortAscending));

//? newPrices absteigend sortierend
function sortDescending(a: number, b: number) {
  return b - a;
}
console.log(newPrices.sort(sortDescending));

//? colors aufsteigend sortieren

function sortAscendingString(a: string, b: string) {
  return a.localeCompare(b);
}
console.log(colors.sort(sortAscendingString));

//? colors absteigend sortieren

function sortDescendingString(a: string, b: string) {
  return b.localeCompare(a);
}
console.log(colors.sort(sortDescendingString));

//? mit callback
colors.sort((a: string, b: string) => {
  return a.localeCompare(b);
});
