import IArticle from "../contracts/IArticle";
import IOrder from "../contracts/IOrder";
import OrderStatus from "../contracts/OrderStatus";

// * mit implements sage ich, dass die Klasse
// * OrderToCreate sich an den Vertrag IOrder hält
// * d. h. das Interface implementiert
class OrderToCreate implements IOrder {
  number: number;
  customerNumber: number;
  // ? Anfangswert von articles ist ein leeres Array
  articles: IArticle[] = [];
  status: OrderStatus;
  description: string = "";

  constructor(number: number, customerNumber: number, status: OrderStatus) {
    this.number = number;
    this.customerNumber = customerNumber;
    this.status = status;
  }
  cancel(): boolean {
    if (OrderStatus.Created) {
      return false;
    }
    this.status = OrderStatus.Canceled;
    return true;
  }
}

export default OrderToCreate;
