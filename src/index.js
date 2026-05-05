import { generateId } from "./utils.js";
import {
  addTransaction,
  removeTransaction,
  calculateTotal,
  transactions,
} from "./transactions.js";
import { renderRow, removeRow, renderTotal, renderDetail } from "./ui.js";

const form = document.getElementById("transaction-form");
const tbody = document.getElementById("transaction-body");
const totalEl = document.getElementById("total");
const detailEl = document.getElementById("detail");
const errorEl = document.getElementById("form-error");


form.addEventListener("submit", (e) => {
  e.preventDefault();

  const amount = parseFloat(document.getElementById("amount").value);
  const category = document.getElementById("category").value;
  const description = document.getElementById("description").value.trim();

  if (!category || !description || isNaN(amount) || amount === 0) {
    errorEl.textContent = "Заполните все поля. Сумма не может быть равна 0.";
    return;
  }

  errorEl.textContent = "";

  const transaction = {
    id: generateId(),
    date: new Date().toISOString(),
    amount,
    category,
    description,
  };

  addTransaction(transaction);
  renderRow(tbody, transaction);
  renderTotal(totalEl, calculateTotal());

  form.reset();
});

document.getElementById("transaction-table").addEventListener("click", (e) => {
  // Удаление транзакции
  const deleteBtn = e.target.closest(".btn-delete");
  if (deleteBtn) {
    const id = deleteBtn.dataset.id;
    removeTransaction(id);
    removeRow(id);
    renderTotal(totalEl, calculateTotal());
    return;
  }

  const row = e.target.closest("tr[data-id]");
  if (row) {
    const id = row.dataset.id;
    const transaction = transactions.find((t) => t.id === id);
    if (transaction) renderDetail(detailEl, transaction);
  }
});
