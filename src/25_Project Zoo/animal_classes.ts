import Animal from "./Animal";
import Continents from "./continents";
import EnclosureId from "./enclosureIdEnum";

// Specific Animal Classes
// Mammals
class Lion extends Animal {
  constructor(
    name: string,
    yearOfBirth: number,
    continent: Continents,
    specialNeeds: string,
    enclosureId: EnclosureId
  ) {
    super(
      "🦁",
      "Lion (Mammal)",
      name,
      yearOfBirth,
      continent,
      specialNeeds,
      enclosureId
    );
  }
}

class Elephant extends Animal {
  constructor(
    name: string,
    yearOfBirth: number,
    continent: Continents,
    specialNeeds: string,
    enclosureId: EnclosureId
  ) {
    super(
      "🐘",
      "Elephant (Mammal)",
      name,
      yearOfBirth,
      continent,
      specialNeeds,
      enclosureId
    );
  }
}

class Bear extends Animal {
  constructor(
    name: string,
    yearOfBirth: number,
    continents: Continents,
    specialNeeds: string,
    enclosureId: EnclosureId
  ) {
    super(
      "🐻",
      "Bear (Mammal)",
      name,
      yearOfBirth,
      continents,
      specialNeeds,
      enclosureId
    );
  }
}

class Monkey extends Animal {
  constructor(
    name: string,
    yearOfBirth: number,
    continents: Continents,
    specialNeeds: string,
    enclosureId: EnclosureId
  ) {
    super(
      "🐒",
      "Monkey (Mammal)",
      name,
      yearOfBirth,
      continents,
      specialNeeds,
      enclosureId
    );
  }
}

class Dolphin extends Animal {
  constructor(
    name: string,
    yearOfBirth: number,
    continents: Continents,
    specialNeeds: string,
    enclosureId: EnclosureId
  ) {
    super(
      "🐬",
      "Dolphin (Mammal)",
      name,
      yearOfBirth,
      continents,
      specialNeeds,
      enclosureId
    );
  }
}

class Snake extends Animal {
  constructor(
    name: string,
    yearOfBirth: number,
    continents: Continents,
    specialNeeds: string,
    enclosureId: EnclosureId
  ) {
    super(
      "🐍",
      "Snake (Reptile)",
      name,
      yearOfBirth,
      continents,
      specialNeeds,
      enclosureId
    );
  }
}

class Turtle extends Animal {
  constructor(
    name: string,
    yearOfBirth: number,
    continents: Continents,
    specialNeeds: string,
    enclosureId: EnclosureId
  ) {
    super(
      "🐢",
      "Turtle (Reptile)",
      name,
      yearOfBirth,
      continents,
      specialNeeds,
      enclosureId
    );
  }
}

class Crocodile extends Animal {
  constructor(
    name: string,
    yearOfBirth: number,
    continents: Continents,
    specialNeeds: string,
    enclosureId: EnclosureId
  ) {
    super(
      "🐊",
      "Crocodile (Reptile)",
      name,
      yearOfBirth,
      continents,
      specialNeeds,
      enclosureId
    );
  }
}

class Parrot extends Animal {
  constructor(
    name: string,
    yearOfBirth: number,
    continents: Continents,
    specialNeeds: string,
    enclosureId: EnclosureId
  ) {
    super(
      "🐦",
      "Parrot (Bird)",
      name,
      yearOfBirth,
      continents,
      specialNeeds,
      enclosureId
    );
  }
}

class Eagle extends Animal {
  constructor(
    name: string,
    yearOfBirth: number,
    continents: Continents,
    specialNeeds: string,
    enclosureId: EnclosureId
  ) {
    super(
      "🦅",
      "Eagle (Bird)",
      name,
      yearOfBirth,
      continents,
      specialNeeds,
      enclosureId
    );
  }
}

class Macaw extends Animal {
  constructor(
    name: string,
    yearOfBirth: number,
    continents: Continents,
    specialNeeds: string,
    enclosureId: EnclosureId
  ) {
    super(
      "🦜",
      "Macaw (Bird)",
      name,
      yearOfBirth,
      continents,
      specialNeeds,
      enclosureId
    );
  }
}

class Fish extends Animal {
  constructor(
    name: string,
    yearOfBirth: number,
    continents: Continents,
    specialNeeds: string,
    enclosureId: EnclosureId
  ) {
    super(
      "🐠",
      "Fish (Fish)",
      name,
      yearOfBirth,
      continents,
      specialNeeds,
      enclosureId
    );
  }
}

class Trout extends Animal {
  constructor(
    name: string,
    yearOfBirth: number,
    continents: Continents,
    specialNeeds: string,
    enclosureId: EnclosureId
  ) {
    super(
      "🐟",
      "Trout (Fish)",
      name,
      yearOfBirth,
      continents,
      specialNeeds,
      enclosureId
    );
  }
}

class Shark extends Animal {
  constructor(
    name: string,
    yearOfBirth: number,
    continents: Continents,
    specialNeeds: string,
    enclosureId: EnclosureId
  ) {
    super(
      "🦈",
      "Shark (Fish)",
      name,
      yearOfBirth,
      continents,
      specialNeeds,
      enclosureId
    );
  }
}

class Octopus extends Animal {
  constructor(
    name: string,
    yearOfBirth: number,
    continents: Continents,
    specialNeeds: string,
    enclosureId: EnclosureId
  ) {
    super(
      "🐙",
      "Octopus (Mollusk)",
      name,
      yearOfBirth,
      continents,
      specialNeeds,
      enclosureId
    );
  }
}

class Squid extends Animal {
  constructor(
    name: string,
    yearOfBirth: number,
    continents: Continents,
    specialNeeds: string,
    enclosureId: EnclosureId
  ) {
    super(
      "🦑",
      "Squid (Mollusk)",
      name,
      yearOfBirth,
      continents,
      specialNeeds,
      enclosureId
    );
  }
}

class Frog extends Animal {
  constructor(
    name: string,
    yearOfBirth: number,
    continents: Continents,
    specialNeeds: string,
    enclosureId: EnclosureId
  ) {
    super(
      "🐸",
      "Frog (Amphibian)",
      name,
      yearOfBirth,
      continents,
      specialNeeds,
      enclosureId
    );
  }
}

class Lizard extends Animal {
  constructor(
    name: string,
    yearOfBirth: number,
    continents: Continents,
    specialNeeds: string,
    enclosureId: EnclosureId
  ) {
    super(
      "🦎",
      "Lizard (Reptile)",
      name,
      yearOfBirth,
      continents,
      specialNeeds,
      enclosureId
    );
  }
}

class Swan extends Animal {
  constructor(
    name: string,
    yearOfBirth: number,
    continents: Continents,
    specialNeeds: string,
    enclosureId: EnclosureId
  ) {
    super(
      "🦢",
      "Swan (Bird)",
      name,
      yearOfBirth,
      continents,
      specialNeeds,
      enclosureId
    );
  }
}

class Duck extends Animal {
  constructor(
    name: string,
    yearOfBirth: number,
    continents: Continents,
    specialNeeds: string,
    enclosureId: EnclosureId
  ) {
    super(
      "🦆",
      "Duck (Bird)",
      name,
      yearOfBirth,
      continents,
      specialNeeds,
      enclosureId
    );
  }
}

class Clownfish extends Animal {
  constructor(
    name: string,
    yearOfBirth: number,
    continents: Continents,
    specialNeeds: string,
    enclosureId: EnclosureId
  ) {
    super(
      "🤡",
      "Clownfish (Fish)",
      name,
      yearOfBirth,
      continents,
      specialNeeds,
      enclosureId
    );
  }
}

class Tiger extends Animal {
  constructor(
    name: string,
    yearOfBirth: number,
    continents: Continents,
    specialNeeds: string,
    enclosureId: EnclosureId
  ) {
    super(
      "🐅",
      "Tiger (Mammal)",
      name,
      yearOfBirth,
      continents,
      specialNeeds,
      enclosureId
    );
  }
}

class Rhinoceros extends Animal {
  constructor(
    name: string,
    yearOfBirth: number,
    continents: Continents,
    specialNeeds: string,
    enclosureId: EnclosureId
  ) {
    super(
      "🦏",
      "Rhinoceros (Mammal)",
      name,
      yearOfBirth,
      continents,
      specialNeeds,
      enclosureId
    );
  }
}

class Alligator extends Animal {
  constructor(
    name: string,
    yearOfBirth: number,
    continents: Continents,
    specialNeeds: string,
    enclosureId: EnclosureId
  ) {
    super(
      "🐊",
      "Alligator (Reptile)",
      name,
      yearOfBirth,
      continents,
      specialNeeds,
      enclosureId
    );
  }
}

class Cockatoo extends Animal {
  constructor(
    name: string,
    yearOfBirth: number,
    continents: Continents,
    specialNeeds: string,
    enclosureId: EnclosureId
  ) {
    super(
      "🦜",
      "Cockatoo (Bird)",
      name,
      yearOfBirth,
      continents,
      specialNeeds,
      enclosureId
    );
  }
}

class Pufferfish extends Animal {
  constructor(
    name: string,
    yearOfBirth: number,
    continents: Continents,
    specialNeeds: string,
    enclosureId: EnclosureId
  ) {
    super(
      "🐡",
      "Pufferfish (Fish)",
      name,
      yearOfBirth,
      continents,
      specialNeeds,
      enclosureId
    );
  }
}

class Panda extends Animal {
  constructor(
    name: string,
    yearOfBirth: number,
    continents: Continents,
    specialNeeds: string,
    enclosureId: EnclosureId
  ) {
    super(
      "🐻",
      "Panda (Mammal)",
      name,
      yearOfBirth,
      continents,
      specialNeeds,
      enclosureId
    );
  }
}

class Camel extends Animal {
  constructor(
    name: string,
    yearOfBirth: number,
    continents: Continents,
    specialNeeds: string,
    enclosureId: EnclosureId
  ) {
    super(
      "🐫",
      "Camel (Mammal)",
      name,
      yearOfBirth,
      continents,
      specialNeeds,
      enclosureId
    );
  }
}

class Toucan extends Animal {
  constructor(
    name: string,
    yearOfBirth: number,
    continents: Continents,
    specialNeeds: string,
    enclosureId: EnclosureId
  ) {
    super(
      "🐦",
      "Toucan (Bird)",
      name,
      yearOfBirth,
      continents,
      specialNeeds,
      enclosureId
    );
  }
}

class Flamingo extends Animal {
  constructor(
    name: string,
    yearOfBirth: number,
    continents: Continents,
    specialNeeds: string,
    enclosureId: EnclosureId
  ) {
    super(
      "🦢",
      "Flamingo (Bird)",
      name,
      yearOfBirth,
      continents,
      specialNeeds,
      enclosureId
    );
  }
}

export {
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
};
