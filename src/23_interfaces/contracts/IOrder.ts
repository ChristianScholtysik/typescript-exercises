// * Interfaces werden mit dem Schlüsselwort interface angelegt, danach kommen geschweifte Klammern
import IArticle from "./IArticle";
import OrderStatus from "./OrderStatus";

// ? eine Konvention ist ein I vor den Namen zu stellen, damit man es direkt als Interface erkennt
// ? Interface-Definitionen immer in extra Dateien
interface IOrder {
  // * Eigenschaftsname : Datentyp;
  number: number;
  customerNumber: number;
  // ? ich kann auch ein Interface in der Typdefinition eines anderen verwenden
  articles: IArticle[];
  status: OrderStatus;
  description: string;

  // ? bei Methoden: Methodennamen: Arrow-Syntax
  // ? () für Parameter => Rückgabedatentyp
  // ? cancel-Methode, die hat keine Parameter (leere runde Klammern) und die gibt ein boolean zurück
  // ? zum Stornieren - true, wenn Storno geklappt hat, false wenn es nicht möglich ist/fehlgeschlagen ist
  cancel: () => boolean;
}

export default IOrder;
