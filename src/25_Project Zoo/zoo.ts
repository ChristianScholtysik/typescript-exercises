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
const resultFieldElement = document.getElementById("resultSectionElement");
const savanna = document?.querySelector(".savanna");
const jungle = document?.querySelector(".jungle");
const ocean = document?.querySelector(".ocean");
const desert = document?.querySelector(".desert");

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
    console.log("Added to aquatic:", animal);
  } else if (animal.enclosureId === EnclosureId.JungleHabitat) {
    jungleHabitatAnimals.push(animal);
    console.log("Added to jungleHabitatAnimals:", animal);
  } else if (animal.enclosureId === EnclosureId.SavannahHabitat) {
    savannahHabitatAnimals.push(animal);
    console.log("Added to savannaHabitatAnimals:", animal);
  } else if (animal.enclosureId === EnclosureId.ReptileHouse) {
    reptileHouseAnimals.push(animal);
    console.log("Added to reptileHabitatAnimals:", animal);
  }
  allAnimals.push(animal);
  console.log(allAnimals);

  updateHabitats();
});

const allAnimals: Animal[] = [];
const savannahHabitatAnimals: Animal[] = [];
const jungleHabitatAnimals: Animal[] = [];
const aquaticHabitatAnimals: Animal[] = [];
const reptileHouseAnimals: Animal[] = [];

function updateHabitats() {
  const savanna = document?.querySelector(".savanna");
  const jungle = document?.querySelector(".jungle");
  const ocean = document?.querySelector(".ocean");
  const desert = document?.querySelector(".desert");

  if (savanna && EnclosureId.SavannahHabitat) {
    savanna.innerHTML = "";
    savannahHabitatAnimals.forEach((animal: Animal) => {
      const emoji = document.createElement("div");
      emoji.innerHTML = animal.emoji;
      emoji.className = "Emoji2";
      savanna.appendChild(emoji);
    });
  }
  if (jungle && EnclosureId.JungleHabitat) {
    jungle.innerHTML = "";
    jungleHabitatAnimals.forEach((animal: Animal) => {
      const emoji = document.createElement("div");
      emoji.innerHTML = animal.emoji;
      emoji.className = "Emoji";
      jungle.appendChild(emoji);
    });
  }

  if (desert) {
    desert.innerHTML = "";
    reptileHouseAnimals.forEach((animal: Animal) => {
      const emoji = document.createElement("div");
      emoji.innerHTML = animal.emoji;
      emoji.className = "Emoji2";
      desert.appendChild(emoji);
    });
  }
  if (ocean) {
    ocean.innerHTML = "";
    aquaticHabitatAnimals.forEach((animal: Animal) => {
      const emoji = document.createElement("div");
      emoji.innerHTML = animal.emoji;
      emoji.className = "Emoji2";
      ocean.appendChild(emoji);
      emoji.addEventListener("click", (event: Event) => {
        event.preventDefault();
        onEmojiClick();
      });
      function onEmojiClick() {
        if (resultFieldElement) {
          resultFieldElement.innerHTML = "";
        }
        const currentYear = new Date().getFullYear();
        const birthYear = animal.yearOfBirth;
        const age = currentYear - birthYear;

        const card = document.createElement("div");
        card.className = "ResultCard";
        const emojiText = document.createElement("h1");
        emojiText.innerText = ` ${animal.emoji} `;
        card.appendChild(emojiText);
        const infoText = document.createElement("h3");
        infoText.innerText = `Name: ${animal.name}, Year of Birth: ${animal.yearOfBirth}`;
        card.appendChild(infoText);
        const ageText = document.createElement("p");
        ageText.innerText = `Age: ${age} years`;
        card.appendChild(ageText);
        const continentText = document.createElement("p");
        continentText.innerText = `Special Needs: ${animal.specialNeeds}, Continent: ${animal.continents}`;
        card.appendChild(continentText);
        resultFieldElement?.appendChild(card);
        console.log(
          `Name:${animal.name}, Year of Birth: ${animal.yearOfBirth}, Special Needs: ${animal.specialNeeds}, Continent: ${animal.continents}`
        );
      }
    });
  }
}
