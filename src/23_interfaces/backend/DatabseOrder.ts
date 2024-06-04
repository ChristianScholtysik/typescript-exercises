import IArticle from "../contracts/IArticle";
import IOrder from "../contracts/IOrder";
import OrderStatus from "../contracts/OrderStatus";

class DatabaseOrder implements IOrder {
  public number: number = 0;
  public customerNumber: number = 0;
  public articles: IArticle[] = [];
  public status: OrderStatus = OrderStatus.InProgress;
  public description: string = "";

  cancel(): boolean {
    if (this.status < OrderStatus.Delivered) {
      this.status = OrderStatus.Canceled;
      return true;
    }
    return false;
  }

  saveToDatabase() {
    console.log("Saving to database");
  }
}

export default DatabaseOrder;
