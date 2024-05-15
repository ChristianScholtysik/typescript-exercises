// * Math Bibiothek

const accountBalance: number = 2584.63;
//? bis zu nächsten ganzen Zahl abrunden
console.log(Math.floor(accountBalance));
//? bis zu nächsten ganzen Zahl aufrunden
console.log(Math.ceil(accountBalance));
//? echts Runden
console.log(Math.round(accountBalance));

const randomNumber1 = Math.ceil(Math.random() * 10);
console.log(randomNumber1);
//* das minimum ermitteln
const minimum = Math.min(33, 11, 44, 55);
console.log({ minimum });
//* das maximum ermitteln
const maximum = Math.max(33, 11, 44, 55);
console.log({ maximum });
//* Potenz berechnen 2hoch3=2*2*2
let power = Math.pow(2, 3);
console.log({ power });
let power2 = Math.pow(10, 4);
console.log({ power2 });

//* Wurzel (Quadratwurzel berechnen) - 25=5
let squareRoot25 = Math.sqrt(25);
console.log({ squareRoot25 });

let squareRoot121 = Math.sqrt(121);
console.log({ squareRoot121 });
