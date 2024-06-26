//! OOP-SOLID-TS-Level-1_1
// Lernziel: Single Responsibility Principle anwenden

// - Erstelle eine Klasse FileHandler
// - Die Klasse hat drei Methoden
//     - readFromFile: string
//     gibt den Text “Dateiinhalt” zurück
//     - writeToFile: string
//         - mit Parameter text: string

//         → schreibt den Text aus dem Parameter auf die Konsole

//     - getFileInfo: string
//     → schreibt den Text “Dateigröße, Dateiendung” auf die Konsole
// - Analysiere die Klasse und identifiziere die Verantwortlichkeiten
// - Teile die Funktionalität der Klasse so auf, dass jede Klasse nur eine Verantwortlichkeit hat
// - Achte dabei auf gute Klassennamen

import {
  FileHandler,
  FileInfoPrinter,
  FileReader,
  TextWriter,
} from "./contracts/FileHandler";

const fileReader = new FileReader();
const textWriter = new TextWriter();
const fileInfoPrinter = new FileInfoPrinter();

const fileContent = fileReader.readFromFile();
console.log("Gelesener Dateiinhalt:", fileContent);

textWriter.write("Hallo Welt!");

fileInfoPrinter.getFileInfo();

//! OOP-SOLID-TS-Level-2_1

// Lernziel: Open Closed Principle anwenden

// - Erstelle eine Klasse namens IceCream, die verschiedene Eissorten repräsentiert.
// - Jede Eissorte hat eine Methode getDescription, die eine einfache Beschreibung der Eissorte zurückgibt (z.B., "Ich bin eine Vanille-Eiskugel.") und den jeweiligen Preis (2.2)

//     ```tsx
//     class IceCream {
//       getVanillaPrice(): number {
//       return 2.2;
//       }

//       getVanillaDescription(): string {
//         return "Ich bin eine Vanille-Eiskugel.";
//       }

//       getChocolateDescription(): string {
//         return "Ich bin eine Schokoladen-Eiskugel.";
//       }
//       ...
//      }
//     ```

// - Analysiere die IceCream-Klasse und identifiziere ihre Verantwortlichkeiten.
// - Überlege, wie die IceCream-Klasse verändert werden kann, um das Anlegen neuer Eissorten (wie Schokolade, Erdbeere, usw.) zu unterstützen, ohne den vorhandenen Code in IceCream zu ändern.
// - Verwende das Open-Closed Principle, um die IceCream-Klasse zu erweitern

//!OOP-SOLID-TS-Level-2_2
// Lernziel: Interface Segregation Principle anwenden

// - Erstelle ein Interface IMediaPlayer
//     - fileName: string
//     - length: number
//     - playAudio(): void
//     - recordAudio(): void
//     - playVideo(): void
//     - recordVideo(): void
// - Analysiere das gegebene Interface MediaPlayer, das verschiedene Methoden für die Wiedergabe und Aufzeichnung von Audio- und Videodateien definiert.
// - Überlege, ob das Interface-Segregation-Prinzip in dieser Situation angewendet werden kann, um die Struktur des Interfaces zu verbessern.
// - Entwirf neue abgeleitete Interfaces, die spezifische Verantwortlichkeiten für die Audiowiedergabe, die Audioaufzeichnung, die Videowiedergabe und die Videoaufzeichnung definieren.
// - Implementiere neue Klassen, die von den abgeleiteten Interfaces erben und nur die entsprechenden Methoden implementieren.
// - Teste den überarbeiteten Code, um sicherzustellen, dass er ordnungsgemäß funktioniert und die Trennung der Interfaces verbessert wurde.
