import Owner from "./Owner";

//* Klassen immer in eine neue Datei, namen grossgeschrieben, geschweifte klammern
class Dog {
  //? Eigenschaft, Property, Attribut besteht aus Namen, datentyp
  //? Ich muss immer einen anfangswert oder initialwert angeben, der beim erstellen der klasse gesetzt wird
  //?
  name: string = "";
  age: number = 0;
  owner_old: string = "";
  //? ixh kann der klasse auch eigenschaften vom typ einer anderen klasse zuweisen, damit erstelle ich beziehungen zwischen classen
  owner: Owner;
  breed: string = "";
  //? ich kann auch optionale eigenschaften mit? angeben
  favoriteFood?: string = "";

  //? Jede Klasse hat einen konstruktor, der aufgerufen wird, sobald man 'new' aufruft
  //? wenn er leer ist kann man ihn auch weglassen

  constructor(name: string, owner: Owner) {
    //? man muss immer die übergebenden werte/parameter dann den internen eigenschaften zuweisen this.Eigenschaft= übergebener Wert
    this.name = name;
    this.owner = owner;
    console.log("Dog was created");
  }
}

export default Dog;
