// Wir wollen heute eine Zooverwaltung umsetzen 🙂
// - Folgende Klassenhierarchie mit drei Ebenen ist unsere Basis
// - Wähle dir mindestens 7 konkrete Klassen für Tierarten aus, die du umsetzt, z. B.
// 🦁 Lion (Mammal)
// 🐘 Elephant (Mammal)
// 🐻 Bear (Mammal)
// 🐒 Monkey (Mammal)
// 🐬 Dolphin (Mammal)
// 🐍 Snake (Reptile)
// 🐢 Turtle (Reptile)
// 🐊 Crocodile (Reptile)
// 🐦 Parrot (Bird)
// 🦅 Eagle (Bird)
// 🦜 Macaw (Bird)
// 🐠 Fish (Fish)
// 🐟 Trout (Fish)
// 🦈 Shark (Fish)
// 🐙 Octopus (Mollusk)
// 🦑 Squid (Mollusk)
// 🐸 Frog (Amphibian)
// 🦎 Lizard (Reptile)
// 🦢 Swan (Bird)
// 🦆 Duck (Bird)
// 🤡 Clownfish (Fish)
// 🐅 Tiger (Mammal)
// 🦏 Rhinoceros (Mammal)
// 🐊 Alligator (Reptile)
// 🦜 Cockatoo (Bird)
// 🐡 Pufferfish (Fish)
// 🐻 Panda (Mammal)
// 🐫 Camel (Mammal)
// 🐦 Toucan (Bird)
// 🦢 Flamingo (Bird)
// - jedes Tier (Animal) hat folgende Eigenschaften: emoji, name, yearOfBirth, continents, specialNeeds, enclosureId.
// - Überlege dir sinnvolle Datentypen für die Eigenschaften
// - Definiere eine Klasse "Enclosure", die ein Gehege im Zoo darstellt
// - Enclosure hat die Eigenschaften id, name und builtInYear (erbaut im Jahr).
// - Ein Tier kann nur in einem Gehege leben (animal.enclosureId)
// - Nutze gerne ein Enum, um die Ids für Gehege (enclosure) festzulegen
// enum EnclosureId {
//   SavannahHabitat,
//   JungleHabitat,
//   AquaticHabitat,
//   ReptileHouse
// }

// class Enclosure {
// 	id: EnclosureId
// 	...
// }

// class Animal {
//   enclosureId: EnclosureId
// }

// - Tipp: Du kannst auch erstmal alle Eigenschaften einer Klassen public machen und am Ende nochmal sinnvolle Einschränkungen überlegen
// - Erstelle jetzt eine HTML-Seite für die Zooverwaltung
// - Lege eine ts-Datei. an, die mit dem HTML verbunden ist
// - Lege dort zunächst in einer Function mindestens 4 feste Instanzen von Enclosure mit Id an und speichere sie in einem Array
// - Implementiere dort eine weitere Function, die mindestens 14 konkrete Tiere mit Namen etc. aus verschiedenen Tierarten erstellt, die in verschiedenen Gehegen leben
// - Die HTML-Seite besteht aus einer Liste von Gehegen und einem Formular, um ein neues Tier anzulegen
// - Jedes der Gehege soll mit den zugeordneten Tieren angezeigt werden
// Für jedes Tier sollen Emoji, Name und Alter (berechnet aus yearOfBirth), Kontinent(e) und spezielle Bedürfnisse angezeigt werden.

// - Erstelle ein Formular zum Anlegen eines neuen Tieres mit folgenden Feldern
// - Feld animalType = Tierart ist ein Auswahlfeld mit Emoji und Namen
//     → du kannst die Optionen für die Auswahl direkt manuell im HTML angeben und musst sie nicht dynamisch ermitteln
//         - Basierend auf der Tierart werden continents und enclosure im Hintergrund ermittelt
//         - sie werden dann direkt darunter, z. B. in zwei Paragraphs angezeigt
//     - Feld name zur Erfassung des Tiernamens
//     - Feld yearOfBirth zur Erfassung des Geburtsjahres
//     - Feld specialNeeds zur Erfassung der speziellen Bedürfnisse (Textfeld)
//     - Es gibt einen Button “Create Animal”
//     - Beim Klick wird eine Instanz der ausgewählten Klasse, z. B. Dolphin angelegt
//     - Stelle sicher, dass alle Pflichtfelder befüllt werden und sinnvolle Werte eingegeben wurden
//     - das Tier wird in einem Array allAnimals, in dem auch die anfangs angelegten Tiere liegen, gespeichert
//     - Nach dem erfolgreichen Anlegen, wird auch die Liste der Gehege aktualisiert, d. h. das neu angelegte Tier wird dort angezeigt

// # ✨ Bonus

// - Füge eine weitere Seite hinzu, die alle Tiere mit allen Eigenschaften (einschließlich Gehege) in einer Art Tabelle darstellt
// - Füge dort die Funktion hinzu, dass man Tiere löschen oder bearbeiten kann
// - Stelle sicher, dass die Seite gut auf verschiedenen Bildschirmgrößen bedienbar ist
