class IceCreamFlavor {
  name: string = "";
  price: number = 0;
  isPopular: boolean = false;
  description?: string = "";
  lengthOfDescription: number = 0;
  scoops: number = 0;

  constructor(name: string, price: number, isPopular: boolean) {
    this.name = name;
    this.price = price;
    this.isPopular = isPopular;
  }

  get getLengthOfDescription() {
    if (this.description) {
      return console.log(this.description.length);
    }
    return console.log(0);
  }

  get totalPrice() {
    const result = this.scoops * this.price;
    return console.log(
      `Flavor ${this.name} is popular and costs ${result} Euro.`
    );
  }
}

export default IceCreamFlavor;
