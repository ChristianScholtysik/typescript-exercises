export function addNumbers(
  a: number,
  b: number,
  callback: (sum: number) => void
) {
  let sum = a + b;
  callback(sum);
}

// addNumbers(5, 7, (sum) => {
//   console.log(`Die summer ist ${sum}`);
// });

//! callback-TS-Level-1_2

// - Wir bauen auf [callback-TS-Level-1_1](https://www.notion.so/callback-TS-Level-1_1-afa08e7024364c608b4d14715644522c?pvs=21) auf
// - Schreibe ein Funktion showAlert(sum: number)
// - Die Funktion öffnet ein Alert-Window und zeigt dort das Ergebnis an
// - Übergib showAlert als Callback-Funktion an addNumbers

export function showAlert(sum: number) {
  window.alert(`Die summe ist ${sum}`);
}

export function addNumbers2(
  a: number,
  b: number,
  callback: (sum: number) => void
): void {
  let sum = a + b;
  callback(sum);
}
