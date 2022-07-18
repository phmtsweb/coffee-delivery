export function formatAmount(amount: number): string {
  return `${amount} unidade${amount > 1 ? 's' : ''}`;
}
