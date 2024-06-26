//! Utility-Types-TS-Level-1_1

// Lernziel: Anwendung von partial

// - Lege eine neue Datei book.ts an
// - Erstelle dort ein Interface IBook mit folgenden Eigenschaften
//     - author: string
//     - name: string
//     - publishingYear: string
//     - shortDescription?: string
//     - numberOfPages: number
// - Lege eine neue Datei an partial-book.ts an
// - Erstelle dort einen neuen Type PartialBook basierend auf IBook
// - Lege eine Variable partialBook vom Typ PartialBook an und vergebe nur die Eigenschaften author und name
// - Lege dann ein neues Interface IPartialBook basierend auf IBook an

// // Code-Beispiel
// interface IPartialPerson extends Partial<IPerson> {}
// ```

// - Lege eine Variable partialBook2 vom Typ IPartialBook an und vergeben nur die Eigenschaft name

//! Utility-Types-TS-Level-1_2

// Lernziel: Anwendung von omit

// - Baut auf [Utility-Types-TS-Level-1_1](https://www.notion.so/Utility-Types-TS-Level-1_1-5a1eb5390d4b4d9f9d6bf45586b78bdd?pvs=21) auf
// - Lege eine neue Datei an basic-book.ts an
// - Erstelle dort einen neuen Type BasicBook basierend auf IBook
// - BasicBook soll folgende Eigenschaften nicht haben
//     - publishingYear: string
//     - shortDescription: string
// - Lege eine Variable basicBook vom Typ BasicBook an und vergebe nur die nötigen Eigenschaften
// - Lege dann ein neues Interface IBasicBook basierend auf IBook an, bei dem ebenfalls publishingYear und shortDescription fehlen
// - Lege eine Variable basicBook2 vom Typ IBasicBook an und vergebe nur die nötigen Eigenschaften

//! Utility-Types-TS-Level-1_3
// Lernziel: Anwendung von pick

// - Baut auf [Utility-Types-TS-Level-1_1](https://www.notion.so/Utility-Types-TS-Level-1_1-5a1eb5390d4b4d9f9d6bf45586b78bdd?pvs=21) auf
// - Lege eine neue Datei an book-description.ts an
// - Erstelle dort einen neuen Type BookDescription basierend auf IBook
// - BasicBook soll folgende Eigenschaften von IBook übernehmen haben
//     - name: string
//     - shortDescription: string
// - Lege eine Variable bookDescription vom Typ BookDescription an und vergebe nur die nötigen Eigenschaften
// - Lege dann ein neues Interface IBookDescription basierend auf IBook an - ebenfalls name und shortDescription von IBook übernommen
// - Lege eine Variable bookDescription2 vom Typ IBookDescription an und vergebe nur die nötigen Eigenschaften

//! Utility-Types-TS-Level-1_5

// Lernziel: Anwendung von Readonly

// - Baut auf [Utility-Types-TS-Level-1_1](https://www.notion.so/Utility-Types-TS-Level-1_1-5a1eb5390d4b4d9f9d6bf45586b78bdd?pvs=21) auf
// - Lege eine neue Datei an readonly-book.ts an
// - Erstelle dort einen neuen Type ReadOnlyBook basierend auf IBook
// - Alle Eigenschaften von IBook sind readonly ⇒ schreibgeschützt
// - Lege eine Variable readonlyBook vom Typ ReadOnlyBook an und vergeben alle nötigen Eigenschaften und Werte
// - Versuche nachträglich Werte zu setzen
// - Lege dann ein neues Interface IReadOnlyBook basierend auf IBook an ⇒ alle Eigenschaften sind auch hier schreibgeschützt
// - Lege eine Variable readonlyBook2 vom Typ IReadOnlyBook an und vergebe alle nötigen Eigenschaften und Werte
// - Versuche nachträglich Werte zu setzen

//! Utility-Types-TS-Level-1_6
// Lernziel: Anwendung von Exclude

// - Lege eine neue Datei an colors.ts an
// - Erstelle dort einen neuen Type BasicColors mit den möglichen Werten:
// RED, BLUE, GREEN, YELLOW, BLACK, WHITE
// - Erstelle einen weiteren Type RealColors auf Basis von BasicColors mit Exclude
// - Werte RED, BLUE, GREEN, YELLOW
// - Lege eine Funktion showColors mit einem Parameter vom Typ RealColors an
// - Gib dort die Farbe auf der Konsole aus
// - Versuche ‘BLACK’ zu übergeben
// - Übergebe einen gültigen Wert

//! Utility-Types-TS-Level-2_1

// Lernziel: Anwendung von partial

// - Lege eine neue Datei tea.ts an
// - Erstelle dort ein Interface ITea mit folgenden Eigenschaften: name, type, temperature, brewingTime
// - Erstelle dann einen Type PartialTea, das ebenfalls diese Eigenschaften enthält, die aber alle optional sind
// - Schreibe eine Funktion prepareTea, die ein PartialTea-Objekt akzeptiert und auf der Konsole ausgibt “Preparing [tea.name] - will be ready in [tea.brewingTime]”
// - Gib einen Fehler auf der Konsole aus, falls name und brewingTime nicht gesetzt sind und brich die Funktion ab
// - Lege ein Objekt vom Typ ITea an und übergebe es der Methode prepareTea
// - Lege ein Objekt vom Typ PartialTea an und übergebe es der Methode prepareTea
