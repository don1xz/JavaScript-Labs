export let transactions = []; // здесь let а не const сделал

export function addTransaction(transaction) {
  transactions.push(transaction);
}


export function removeTransaction(id) {
  transactions = transactions.filter((t) => t.id !== id);
}

export function calculateTotal() {
  return transactions.reduce((sum, t) => sum + t.amount, 0);
}
