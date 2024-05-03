function addTwenty(zahl: number): void {
  const additionResult = zahl + 20;
  console.log({ additionResult });
}

console.clear;
console.log("TypeScript");

addTwenty(10);
addTwenty(2424);
// addTwenty(false);
// addTwenty('Text')

function addThirty(zahl: number): number {
  const result = zahl + 30;
  return result;
}

const resultThirty = addThirty(170);
console.log({ resultThirty });

function addFourty(zahl1: number, zahl2: number, zahl3: number): number {
  return zahl1 + zahl2 + zahl3 + 40;
  console.log("Hallo Hallo"); //-> unreachable code
}

const resultFourty = addFourty(44, 66, 77);
console.log({ resultFourty });

function getOnlineMessage(isOnline: boolean): string {
  // if (isOnline){
  //     return 'User ist online'
  // } else {
  //   return 'User ist offline'
  // }
  return isOnline ? "user is online" : "user is offline";
}
