export default function tax(price, taxRate) {
  return Math.round(price * taxRate);
}