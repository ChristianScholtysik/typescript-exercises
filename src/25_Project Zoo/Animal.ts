import Continents from "./continents";
import EnclosureId from "./enclosureIdEnum";

class Animal {
  emoji: string;
  type: string;
  name: string;
  yearOfBirth: number;
  continents: Continents;
  specialNeeds: string;
  enclosureId: EnclosureId;

  constructor(
    emoji: string,
    type: string,
    name: string,
    yearOfBirth: number,
    continents: Continents,
    specialNeeds: string,
    enclosureId: EnclosureId
  ) {
    this.emoji = emoji;
    this.type = type;
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.continents = continents;
    this.specialNeeds = specialNeeds;
    this.enclosureId = enclosureId;
  }
}

export default Animal;
