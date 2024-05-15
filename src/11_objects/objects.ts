//* einfache Datentypen
const firstName2: string = "Suzy";
const lastName2: string = "Suman";
const ageSuzy: number = 28;
//*Listen /Array
const listOfTasks: string[] = ["wash Up", "Exercise", "Cook"];

//* Objekte / immer mit geschweiften Klammern
const suzy = {
  firstName: "Suzy",
  lastName: "Suman",
  age: 28,
  address: "Main Street 1",
};

console.log(suzy.age);
console.log(suzy.firstName);
console.log(suzy.lastName);
//? TS warnt direkt bei nichvorhandenen Eigenschaften
// console.log(suzy.address);

suzy.age = 29;
console.log(suzy.age);
//? TS warnt bei falschen Datentypen
// suzy.age='29'
//? ich kann suzy kein neues Objekt zuweisen
// suzy= {firstName: 'Susi'}
//? Ich kann alle eigenschaften von suzy ändern
suzy.lastName = "Suman Smith";
console.log(suzy.lastName);
//? ich kann nachträglich keine neue Eigenschaften vergeben im laufenden Betrieb
// suzy.postalCode = 90568

const tommy = {
  firstName: "Thomas",
  lastName: "Thomson",
  age: 55,
  //adress: "High Street 33",
  address: {
    street: "High Street",
    postalCode: 90236,
    city: "Musterstadt",
  },
};
tommy.age = 44;
console.log(tommy.age);

console.log(tommy.address.city);
tommy.address.postalCode = 558899;
console.log(tommy.address.postalCode);

//* Movies

const movieHomeAlone: Movie = {
  title: "Home Alone",
  year: 1990,
  mainCharacter: "Kevin",
  villains: ["Marv", "Harry"],
};

console.log(movieHomeAlone.villains[1]);
movieHomeAlone.villains.push("Parents");
console.log(movieHomeAlone.villains);
//? es wird per Referenz auf das Objekt zugegriffen und damit immer das Ursprungsobjekt verändert
movieHomeAlone.year = 1991;

const movieJurassicPark: Movie = {
  title: "Jurassic Park",
  year: 1993,
  mainCharacter: "Dr. Alan Grant",
  villains: ["T-Rex", "Velociraptor"],
};
console.log(movieJurassicPark.title);

const movies: Movie[] = [movieHomeAlone, movieJurassicPark];
console.log("Movie Title and Year");
movies.forEach((movie) => {
  console.log("Title: ", movie.title);
  console.log("Title: ", movie.year);
});

//? man kann auch auf eine andere Art als mit Punkt auf die Eigenschaft zugreifen => mit eckigen Klammern un dem Namen
console.log(movieJurassicPark["year"]);

//* movies nach Erscheinungsjahr sortieren
movies.sort((movieA, movieB) => {
  return movieA.year - movieB.year;
});

console.log({ movies });

//* eigenen Datentypen anlegen
const movieWanderhure = {
  titel: "Die Wanderhure",
  erschinungsjahr: 2001,
  hauptperson: " Die Wanderhure",
};

//? kann nicht in movies Array gepusht werden weil es ganz andere Eigenschaften und Datentypen hat
// movies.push(movieWanderhure);

type Movie = {
  title: string;
  year: number;
  mainCharacter: string;
  villains: string[];
};
const wanderhureNeu: Movie = {
  title: "Die Wanderhure",
  year: 2001,
  mainCharacter: "Wanderhure",
  villains: ["Batman", "Superman"],
};

movies.push(wanderhureNeu);

console.log(wanderhureNeu.villains[1]);

//? for Schleife durchs Objekt gehen
//? alle Eigenschaften des Objekts anzeigen lassen
for (const key in wanderhureNeu) {
  console.log(key);
}
//? mit Object.keys
console.log(Object.keys(wanderhureNeu));
//? mit Object.values
console.log(Object.values(wanderhureNeu));
