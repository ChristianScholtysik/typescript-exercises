export const DISCOUNT = 5.8;
export function calculatePrice(salesPrice: number): number {
  return salesPrice - (salesPrice * DISCOUNT) / 100;
}
