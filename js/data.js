// Стартовый массив с объектами задач
let todos = [
  { id: 1, text: "создать индивидуальную работу", completed: false },
  { id: 2, text: "Сдать индивидуальную работу по JS", completed: true }
];

// Функция возвращает текущий массив задач
export function getTodos() {
  return todos;
}

// Функция добавления новой задачи
export function addTodo(taskText) {
  const newTodo = {
    id: Date.now(), // Уникальный ID на основе времени
    text: taskText,
    completed: false
  };
  todos.push(newTodo);
  return newTodo;
}

// Функция удаления задачи по ID
export function deleteTodo(id) {
  todos = todos.filter(todo => todo.id !== id);
}

// Функция переключения статуса (выполнено / не выполнено)
export function toggleTodoStatus(id) {
  const todo = todos.find(todo => todo.id === id);
  if (todo) {
    todo.completed = !todo.completed;
  }
}