//!  Module-Namensräume-TS-2_2

// - Erstelle eine Datei books.ts
// - In der Datei sollen mehrere Namensräume erstellt werden: Fiction, NonFiction und ScienceFiction
// - Jeder Namensraum soll Funktionen enthalten, um Bücher hinzuzufügen, zu entfernen und anzuzeigen → addBook(name: string), removeBook(name: string), displayAllBooks()
// - Die Bücher werden in einem Array books gespeichert
// - Jeder Namensraum soll eine Konstante für die maximale Anzahl von Büchern in dieser Kategorie enthalten
// - Ist die maximale Anzahl an Büchern erreicht, kann kein weiteres Buch hinzugefügt werden.
// Es erscheint dann eine Fehlermeldung, wenn man die addBook-Funktion aufruft
// - Kann bei removeBook das Buch nicht gefunden werden, wird eine Fehlermeldung ausgegeben
// - Füge in der Datei app.ts zu jedem Genre (Fiction, NonFiction, ScienceFiction) Bücher hinzu und lösche welche
// - Zwischendurch soll immer wieder der aktuelle Stand mit displayBooks ausgegeben werden

import { Fiction, NonFiction, ScienceFiction } from "./books";

// Fiction Bücher hinzufügen und anzeigen
Fiction.addBook("Faust");
Fiction.addBook("To Kill a Mockingbird");
Fiction.displayAllBooks();

// Fiction Buch entfernen und anzeigen
Fiction.removeBook("Faust");
Fiction.displayAllBooks();

// NonFiction Bücher hinzufügen und anzeigen
NonFiction.addBook("Darm mit Charme");
NonFiction.addBook("Die Wanderhure");
NonFiction.displayAllBooks();

// NonFiction Buch entfernen und anzeigen
NonFiction.removeBook("Darm mit Charme");
NonFiction.displayAllBooks();

// ScienceFiction Bücher hinzufügen und anzeigen
ScienceFiction.addBook("Dune");
ScienceFiction.addBook("Die Wanderhure");
ScienceFiction.addBook("Die Rache der Wanderhure");
ScienceFiction.addBook("Das Vermächtnis der Wanderhure");
ScienceFiction.addBook("Die Wanderhure Reloaded");
ScienceFiction.addBook("Die Wanderhure 5.0");
ScienceFiction.addBook("Die Wanderhure-Resurection Day");
ScienceFiction.addBook("Die Wanderhure is coming");
ScienceFiction.addBook("Die Wanderhure - Extreme");
ScienceFiction.addBook("Die Wanderhuren-Verschwörung");
ScienceFiction.addBook("Die Wanderhure schlägt zurück");
ScienceFiction.displayAllBooks();

// ScienceFiction Buch entfernen und anzeigen
ScienceFiction.removeBook("Dune");
ScienceFiction.displayAllBooks();
