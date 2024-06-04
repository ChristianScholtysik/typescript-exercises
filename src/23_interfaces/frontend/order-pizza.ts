import OrderStatus from "../contracts/OrderStatus";
import Article from "./Article";
import OrderToCreate from "./OrderToCreate";

const customerNumberInput = document.getElementById(
  "customer-number"
) as HTMLInputElement;
const pizzaSelect = document.getElementById("pizza-select") as HTMLInputElement;
const orderButton = document.getElementById("order-button");

orderButton?.addEventListener("click", (event: Event) => {
  event.preventDefault();
  if (customerNumberInput && pizzaSelect) {
    // ? aus input den Wert als String holen und in Nummer umwandeln
    const customerNumber = Number(customerNumberInput.value);
    const pizzaNumber = Number(pizzaSelect.value);
    // ? eindeutige Nummer anhand des Zeitstempels erzeugen
    const uniqueOrderNumber = Date.now();
    const newPizzaOrder = new OrderToCreate(
      uniqueOrderNumber,
      customerNumber,
      OrderStatus.Created
    );
    // pizzaNumber in Artikeln
    const pizza = new Article(pizzaNumber, 1);
    newPizzaOrder.articles.push(pizza);
    console.log(newPizzaOrder);
    simulateSendToBackend();
  }
});

function simulateSendToBackend() {
  console.log("Sending order to server");
}
