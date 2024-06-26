interface ITea {
  name: string;
  type: string;
  temperature: number;
  brewingTime: number;
}

type PartialTea = Partial<ITea>;

function prepareTea(tea: PartialTea): void {
  if (!tea.name || !tea.brewingTime) {
    console.error("Error: 'name' and 'brewingTime' are both required.");
    return;
  }
  console.log(
    `Preparing ${tea.name} - will be ready in ${tea.brewingTime} minutes.`
  );
}

const fullTea: ITea = {
  name: "Green Tea",
  type: "Green",
  temperature: 80,
  brewingTime: 3,
};

prepareTea(fullTea);

const partialTea: PartialTea = {
  name: "Black Tea",
  brewingTime: 5,
};

prepareTea(partialTea);

const invalidPartialTea: PartialTea = {
  type: "Herbal",
  temperature: 100,
};

prepareTea(invalidPartialTea);
