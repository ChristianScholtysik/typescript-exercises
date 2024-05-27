function createProduct(name: string, price: number) {
  return console.log("createProduct");
}

export default createProduct;

export namespace createProduct2 {
  export function createProduct(name: string, price: number) {
    return console.log("createProduct2");
  }
}
2;
