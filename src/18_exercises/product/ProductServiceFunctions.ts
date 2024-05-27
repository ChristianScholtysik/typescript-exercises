function addProductToService(service: string, productName: string) {
  return console.log("addProductToService");
}

export default addProductToService;

export namespace AddProductToService2 {
  export function addProductToService(service: string, productName: string) {
    return console.log("addProductToService2");
  }
}
