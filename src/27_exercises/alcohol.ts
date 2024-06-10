class Alcohol {
  name: string;
  percentage: number;
  type: string;
  constructor(name: string, percentage: number, type: string) {
    this.name = name;
    this.percentage = percentage;
    this.type = type;
  }
}

class Mixer {
  name: string;
  type: string;
  carbonated: boolean;

  constructor(name: string, type: string, carbonated: boolean) {
    this.name = name;
    this.type = type;
    this.carbonated = carbonated;
  }
}

export { Alcohol, Mixer };
