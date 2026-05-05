import { formatDate, shortDescription } from "./utils.js";

export function renderRow(tbody, transaction) {
  const row = document.createElement("tr");
  row.dataset.id = transaction.id;
  row.classList.add(transaction.amount >= 0 ? "positive" : "negative");

  row.innerHTML = `
    <td>${formatDate(transaction.date)}</td>
    <td>${transaction.category}</td>
    <td>${shortDescription(transaction.description)}</td>
    <td><button class="btn-delete" data-id="${transaction.id}">✕</button></td>
  `;

  tbody.appendChild(row);
}

export function removeRow(id) {
  const row = document.querySelector(`tr[data-id="${id}"]`);
  if (row) row.remove();
}

export function renderTotal(totalEl, total) {
  totalEl.textContent = `Итого: ${total.toFixed(2)} лей`;
  totalEl.className = "total " + (total >= 0 ? "positive" : "negative");
}

export function renderDetail(detailEl, transaction) {
  detailEl.innerHTML = `
    <strong>ID:</strong> ${transaction.id}<br>
    <strong>Дата:</strong> ${formatDate(transaction.date)}<br>
    <strong>Категория:</strong> ${transaction.category}<br>
    <strong>Сумма:</strong> ${transaction.amount} лей<br>
    <strong>Описание:</strong> ${transaction.description}
  `;
}

export function clearDetail(detailEl) {
  detailEl.innerHTML = "";
}
