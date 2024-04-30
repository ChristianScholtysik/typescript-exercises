console.clear();

const age: number = 36;
const salary: number = 4345.634;

//? toString

const ageAsString: string = age.toString(); //zahl zu String umwandeln
console.log({ ageAsString });

const salaryAsString: string = salary.toString(); //zahl zu String umwandeln
console.log({ salaryAsString });

//? toFixed
const salaryToFixed = salary.toFixed(2); //gerundet auf 2 stellen nach dem Komma
console.log({ salaryToFixed });

//?toPrecision
const salaryToPrecision = salary.toPrecision(2); //Exponentialnotation
console.log({ salaryToPrecision });

//?parseInt
const birthYear = "1995"; //Zahlen als String in Number
const birthYearAsNumber: number = parseInt(birthYear);
console.log({ birthYearAsNumber });

//?parseFloat
const tax = "17.55"; //Gleitkommazahlen
const taxAsNumber: number = parseFloat(tax);
console.log({ taxAsNumber });

//? mit Number - können sowohl Ganzzahlen als auch Gleitkommazahlen konvertiert werden

const highNumberAsString = "33364.54";
const highNumber = Number(highNumberAsString);
console.log({ highNumber });

//? toExponantial
const salaryToExponential = salary.toExponential(2);
console.log({ salaryToExponential });
