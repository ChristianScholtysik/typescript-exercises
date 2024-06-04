// import IIceCreamService from "./IIceCreamService";

// class IceCreamParlor implements IIceCreamService {
//     flavors: string[] = [];

// listflavors(): string[] {
//     return this.flavors;
//   }

//   orderIceCream(flavor: string, scoops: number): string {
//    console.log(
//       `You ordered ${scoops} scoops of ${flavor}. The price is ${price}`
//     );
//   }

//   addNewFlavor(flavor: string}: void {
//     this.flavors.push(flavor)
// }

//   removeFlavor(flavor: string): void {
//     for (let index = 0; index < this.flavors.length; index++) {
//         if (flavor === this.flavors[index]) {
//             this.flavors.splice(index, 1)
//         }

//     }
//   }

//   isFlavorAvailable(flavor: string): boolean {
//     for (let index = 0; index < this.flavors.length; index++) {
//         if(flavor === this.flavors[index]) {
//             return true
//         }
//     }
//     return false;
// }
//   getFlavorPrice(flavor: string): number {
//     return Number(flavor)
//   }

// export default IceCreamParlor;
import IIceCreamService from "./IIceCreamService";

class IceCreamParlor implements IIceCreamService {
  flavors: string[] = [];
  listFlavors(): string[] {
    return this.flavors;
  }
  orderIceCream(flavor: string, scoops: number): string {
    return `Thanks for ordering ${scoops} scoops of ${flavor}!`;
  }
  addNewFlavor(flavor: string): void {
    this.flavors.push(flavor);
  }
  removeFlavor(flavor: string): void {
    for (let index = 0; index < this.flavors.length; index++) {
      if (flavor === this.flavors[index]) {
        this.flavors.splice(index, 1);
      }
    }
  }
  isFlavorAvailable(flavor: string): boolean {
    for (let index = 0; index < this.flavors.length; index++) {
      if (flavor === this.flavors[index]) {
        return true;
      }
    }
    return false;
  }
  getFlavorPrice(flavor: string): number {
    return Number(flavor);
  }
}

export default IceCreamParlor;
