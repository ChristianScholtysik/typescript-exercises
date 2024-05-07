console.clear();

//* Kopieren
let priceOfShoes = 69.9;
let priceOfBackpack = priceOfShoes;
console.log(priceOfBackpack);

//* Kopieren von array
const fruits: string[] = ["Annanas", "Banane", "Pfirsich", "Kirsche"];
console.log("vor kopieren: ", fruits);
// const deliciousFruits = fruits;
// deliciousFruits.pop();
// console.log(fruits);
// console.log(deliciousFruits);
//? Kopieren mit slice ohne PArameter kopiert das ganze Array
const realCopyWithSlice: string[] = fruits.slice();
realCopyWithSlice.pop();
console.log(fruits);
console.log(realCopyWithSlice);

//? Kopieren mit Concat ohne PArameter kopiert den ganzen Array

const copyWithConcat: string[] = fruits.concat();
copyWithConcat.shift();
console.log(fruits);
console.log(copyWithConcat);

//? spread-Operator ... kopiert alle Elemente
const copyWithSpreadOperator: string[] = [...fruits];
copyWithSpreadOperator.push("Birne");
console.log(fruits);
console.log(copyWithSpreadOperator);

//? zwei Arrays miteinander verknüpfen

const vegetables: string[] = ["Erbsen", "Bohnen", "Blumenkohl"];
const fruitsAndVegetables = fruits.concat(vegetables);
console.log(fruitsAndVegetables);

const fruitsAndVeggiesWithSpread: string[] = [...fruits, ...vegetables];
console.log(fruitsAndVeggiesWithSpread);
