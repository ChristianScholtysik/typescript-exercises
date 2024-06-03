import Beverage from "./Beverage";

enum CoffeeType {
  Espresso,
  Latte,
  Cappuccino,
  Americano,
}
export { CoffeeType };

class Coffee extends Beverage {
  type: CoffeeType;

  constructor(name: string, price: number, type: CoffeeType) {
    super(name, price);
    this.type = type;
  }
}

export { Coffee };
