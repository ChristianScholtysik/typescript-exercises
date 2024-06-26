export class FileHandler {
  readFromFile(): string {
    return "Dateiinhalt";
  }

  writeToFile(text: string): void {
    console.log(text);
  }

  getFileInfo(): void {
    console.log("Dateigröße, Dateiendung");
  }
}

export class FileReader {
  readFromFile(): string {
    return "Dateiinhalt";
  }
}

export class TextWriter {
  write(text: string): void {
    console.log(text);
  }
}

export class FileInfoPrinter {
  getFileInfo(): void {
    console.log("Dateigröße, Dateiendung");
  }
}
