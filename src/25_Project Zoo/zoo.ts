//! OOP-Projekt-TS-Level-3_1
import Animal from "./Animal";
import Continents from "./continents";
import EnclosureId from "./enclosureIdEnum";
import {
  Elephant,
  Lion,
  Frog,
  Flamingo,
  Fish,
  Alligator,
  Bear,
  Camel,
  Clownfish,
  Cockatoo,
  Crocodile,
  Dolphin,
  Duck,
  Eagle,
  Lizard,
  Macaw,
  Monkey,
  Octopus,
  Panda,
  Parrot,
  Pufferfish,
  Rhinoceros,
  Shark,
  Snake,
  Squid,
  Swan,
  Tiger,
  Toucan,
  Trout,
  Turtle,
} from "./animal_classes";

const animalForm = document.getElementById("animalForm") as HTMLFormElement;
const animalType = document.getElementById("animalType") as HTMLSelectElement;
const name = document.getElementById("name") as HTMLInputElement;
const yearOfBirth = document.getElementById("yearOfBirth") as HTMLInputElement;
// const yearOfBirthNumber = Number(yearOfBirth.value);
const continents = document.getElementById("continents") as HTMLSelectElement;
const specialNeeds = document.getElementById(
  "specialNeeds"
) as HTMLInputElement;
const enclosureID = document.getElementById("enclosureId") as HTMLSelectElement;
const savanna = document.querySelector(".savanna");
const jungle = document.querySelector(".jungle");
const ocean = document.querySelector(".ocean");
const desert = document.querySelector(".desert");

function createAnimal(
  type: string,
  name: string,
  yearOfBirth: number,
  continents: Continents,
  specialNeeds: string,
  enclosureId: EnclosureId
): Animal {
  switch (type) {
    case "Lion":
      return new Lion(name, yearOfBirth, continents, specialNeeds, enclosureId);
    case "Elephant":
      return new Elephant(
        name,
        yearOfBirth,
        continents,
        specialNeeds,
        enclosureId
      );
    case "Bear":
      return new Bear(name, yearOfBirth, continents, specialNeeds, enclosureId);
    case "Monkey":
      return new Monkey(
        name,
        yearOfBirth,
        continents,
        specialNeeds,
        enclosureId
      );
    case "Dolphin":
      return new Dolphin(
        name,
        yearOfBirth,
        continents,
        specialNeeds,
        enclosureId
      );
    case "Snake":
      return new Snake(
        name,
        yearOfBirth,
        continents,
        specialNeeds,
        enclosureId
      );
    case "Turtle":
      return new Turtle(
        name,
        yearOfBirth,
        continents,
        specialNeeds,
        enclosureId
      );
    case "Crocodile":
      return new Crocodile(
        name,
        yearOfBirth,
        continents,
        specialNeeds,
        enclosureId
      );
    case "Parrot":
      return new Parrot(
        name,
        yearOfBirth,
        continents,
        specialNeeds,
        enclosureId
      );
    case "Eagle":
      return new Eagle(
        name,
        yearOfBirth,
        continents,
        specialNeeds,
        enclosureId
      );
    case "Macaw":
      return new Macaw(
        name,
        yearOfBirth,
        continents,
        specialNeeds,
        enclosureId
      );
    case "Fish":
      return new Fish(name, yearOfBirth, continents, specialNeeds, enclosureId);
    case "Trout":
      return new Trout(
        name,
        yearOfBirth,
        continents,
        specialNeeds,
        enclosureId
      );
    case "Shark":
      return new Shark(
        name,
        yearOfBirth,
        continents,
        specialNeeds,
        enclosureId
      );
    case "Octopus":
      return new Octopus(
        name,
        yearOfBirth,
        continents,
        specialNeeds,
        enclosureId
      );
    case "Squid":
      return new Squid(
        name,
        yearOfBirth,
        continents,
        specialNeeds,
        enclosureId
      );
    case "Frog":
      return new Frog(name, yearOfBirth, continents, specialNeeds, enclosureId);
    case "Lizard":
      return new Lizard(
        name,
        yearOfBirth,
        continents,
        specialNeeds,
        enclosureId
      );
    case "Swan":
      return new Swan(name, yearOfBirth, continents, specialNeeds, enclosureId);
    case "Duck":
      return new Duck(name, yearOfBirth, continents, specialNeeds, enclosureId);
    case "Clownfish":
      return new Clownfish(
        name,
        yearOfBirth,
        continents,
        specialNeeds,
        enclosureId
      );
    case "Tiger":
      return new Tiger(
        name,
        yearOfBirth,
        continents,
        specialNeeds,
        enclosureId
      );
    case "Rhinoceros":
      return new Rhinoceros(
        name,
        yearOfBirth,
        continents,
        specialNeeds,
        enclosureId
      );
    case "Alligator":
      return new Alligator(
        name,
        yearOfBirth,
        continents,
        specialNeeds,
        enclosureId
      );
    case "Cockatoo":
      return new Cockatoo(
        name,
        yearOfBirth,
        continents,
        specialNeeds,
        enclosureId
      );
    case "Pufferfish":
      return new Pufferfish(
        name,
        yearOfBirth,
        continents,
        specialNeeds,
        enclosureId
      );
    case "Panda":
      return new Panda(
        name,
        yearOfBirth,
        continents,
        specialNeeds,
        enclosureId
      );
    case "Camel":
      return new Camel(
        name,
        yearOfBirth,
        continents,
        specialNeeds,
        enclosureId
      );
    case "Toucan":
      return new Toucan(
        name,
        yearOfBirth,
        continents,
        specialNeeds,
        enclosureId
      );
    case "Flamingo":
      return new Flamingo(
        name,
        yearOfBirth,
        continents,
        specialNeeds,
        enclosureId
      );
    default:
      return new Animal(
        "",
        "",
        "",
        0,
        Continents.Africa,
        "",
        EnclosureId.AquaticHabitat
      );
      console.error("Error");
  }
}
animalForm?.addEventListener("submit", (event: Event) => {
  event.preventDefault();
  const animal = createAnimal(
    animalType.value,
    name.value,
    // yearOfBirthNumber.value,
    Number(yearOfBirth.value),
    Number(continents.value),
    specialNeeds.value,
    Number(enclosureID.value)
  );
  if (animal.enclosureId === EnclosureId.AquaticHabitat) {
    aquaticHabitatAnimals.push(animal);
  } else if (animal.enclosureId === EnclosureId.JungleHabitat) {
    jungleHabitatAnimals.push(animal);
  } else if (animal.enclosureId === EnclosureId.SavannahHabitat) {
    savannahHabitatAnimals.push(animal);
  } else if (animal.enclosureId === EnclosureId.ReptileHouse) {
    reptileHouseAnimals.push(animal);
  }
  allAnimals.push(animal);
  console.log(allAnimals);
  console.log(jungleHabitatAnimals);

  updateHabitats();
});

const allAnimals: Animal[] = [];
const savannahHabitatAnimals: Animal[] = [];
const jungleHabitatAnimals: Animal[] = [];
const aquaticHabitatAnimals: Animal[] = [];
const reptileHouseAnimals: Animal[] = [];

function updateHabitats() {
  if (savanna) {
    savanna.innerHTML = "";
    savannahHabitatAnimals.forEach((animal: Animal) => {
      const emoji = document.createTextNode(animal.emoji);
      savanna.appendChild(emoji);
    });
  } else if (jungle) {
    jungleHabitatAnimals.forEach((animal: Animal) => {
      const emoji = document.createTextNode(animal.emoji);
      jungle.appendChild(emoji);
    });
  } else if (desert) {
    reptileHouseAnimals.forEach((animal: Animal) => {
      const emoji = document.createTextNode(animal.emoji);
      desert.appendChild(emoji);
    });
  } else if (ocean) {
    ocean.innerHTML = "";
    aquaticHabitatAnimals.forEach((animal: Animal) => {
      const emoji = document.createTextNode(animal.emoji);
      ocean.appendChild(emoji);
    });
  }
}
