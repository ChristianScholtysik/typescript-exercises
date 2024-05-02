console.clear();

Math.PI;
console.log(Math.PI);

//* Math.round
console.log(Math.round(3.4)); //abrunden
console.log(Math.round(3.5)); //aufrunden
console.log(Math.round(3.57687867868));

//* Math.floor
console.log(Math.floor(3.9999)); //abrunden auf die nächstkleinerre Zahl
console.log(Math.floor(3.0));

//* Math.ceil
console.log(Math.ceil(3.000001));
console.log(Math.ceil(7.83));

//*Math.random -- Zufallszahlen werden generiert
console.log(Math.random());

//*Zufallszahl zwischen 1 und 10
const randomSmallerThanOne = Math.random();
const randomFloatToTen = randomSmallerThanOne * 10;
console.log("Zufall mal 10: ", randomFloatToTen);
console.log("Aufgerundet: ", Math.ceil(randomFloatToTen));
console.log("Aufgerundet: ", Math.floor(randomFloatToTen));

//* Zufallszahl zwischen 1 und 150
const randomSmallerThanOne2 = Math.random();
const randomFloatToOneFifty = randomSmallerThanOne * 150;
console.log("Zufall mal 150: ", randomFloatToOneFifty);
console.log("Aufgerundet: ", Math.ceil(randomFloatToOneFifty));
console.log("Aufgerundet: ", Math.floor(randomFloatToOneFifty));

const randomTo150 = Math.floor(Math.random() * 151);
console.log(randomTo150);
