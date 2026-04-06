# Лабораторная работа №3. Основы работы с массивами, функциями и объектами
## Tcaci Eduard, группа IA2504

### *Структура транзакицй:*
`transaction_id` - уникальный идентификатор транзакции.<br>
`transaction_date` - дата транзакции.<br>
`transaction_amount` - сумма транзакции.<br>
`transaction_type` - тип транзакции (приход или расход).<br>
`transaction_description` - описание транзакции.<br>
`merchant_name` - название магазина или сервиса.<br>
`card_type` - тип карты (кредитная или дебетовая).<br>

### Функции:
`getUniqueTransactionTypes(transactions)` - возвращает массив уникальных типов транзакций. Использует Set.<br>
`calculateTotalAmount(transactions)` - вычисляет общую сумму всех транзакций.<br>
`calculateTotalAmountByDate(transactions, year?, month?, day?)` - вычисляет сумму транзакций за указанный период. Все параметры необязательны.<br>
`getTransactionByType(transactions, type)` - возвращает транзакции указанного типа (`debit` или `credit`).<br>
`getTransactionsInDateRange(transactions, startDate, endDate)` - возвращает транзакции в диапазоне дат (включительно).<br>
`getTransactionsByMerchant(transactions, merchantName)` - возвращает транзакции по названию продавца.<br>
`calculateAverageTransactionAmount(transactions)` - возвращает среднее значение суммы. Возвращает 0 для пустого массива.<br>
`getTransactionsByAmountRange(transactions, minAmount, maxAmount)` - фильтрует транзакции по диапазону суммы (включительно).<br>
`calculateTotalDebitAmount(transactions)` - возвращает суммарную сумму дебетовых транзакций.<br>
`findMostTransactionsMonth(transactions)` - возвращает номер месяца (1–12) с наибольшим количеством транзакций.<br>
`findMostDebitTransactionMonth(transactions)` - возвращает номер месяца с наибольшим количеством дебетовых транзакций.<br>
`mostTransactionTypes(transactions)` - Определяет преобладающий тип: возвращает `debit`, `credit` или `equal`.<br>
`getTransactionsBeforeDate(transactions, date)` - возвращает транзакции, совершённые строго до указанной даты.<br>
`findTransactionById(transactions, id)` - возвращает транзакцию по её `transaction_id` или `undefined`.<br>
`mapTransactionDescriptions(transactions)` - возвращает массив описаний `transaction_description` всех транзакций.<br>

### Шаг 3. Тестирование функций
Протестировал созданные функции и проверил, чтобы они работали.

### Ответы на контрольные вопросы
Методы массивов для работы с объектами:
   `map()`, `filter()`, `reduce()`, `find()`, `findIndex()`, `forEach()`, `some()`, `every()`, `sort()`.<br>
**Сравнение** дат в строковом формате:
   Строки формата YYYY-MM-DD корректно сравниваются лексикографически операторами <, >, ===, так как структура даты от старшего разряда к младшему.
**Разница** между `map()`, `filter()`, `reduce()`
   `map()` - трансформирует каждый элемент массива, возвращая новый массив той же длины.<br>
   `filter()` - отбирает элементы массива по условию, возвращая новый массив с отобранными элементами.<br>
   `reduce()` - сводит массив к одному значению, применяя функцию аккумулятора к каждому элементу.









