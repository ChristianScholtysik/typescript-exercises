function generateLottoNumber(): number {
  const number = Math.floor(Math.random() * 100) + 1;
  if (number > 49) {
    throw new Error("Number exceeds 49");
  }
  return number;
}

export default generateLottoNumber;
