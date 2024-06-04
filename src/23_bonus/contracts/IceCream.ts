class IceCream {
  flavor: string;
  price: number;
  scoops?: number;
  constructor(flavor: string, price: number) {
    this.flavor = flavor;
    this.price = price;
  }
}

export default IceCream;
