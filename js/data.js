// Стартовый массив с объектами задач
let todos = [
  { id: 1, text: "создать индивидуальную работу", completed: false },
  { id: 2, text: "Сдать индивидуальную работу по JS", completed: true }
];

export function getTodos() {
  return todos;
}

export function addTodo(taskText) {
  const newTodo = {
    id: Date.now(), // Уникальный ID на основе времени
    text: taskText,
    completed: false
  };
  todos.push(newTodo);
  return newTodo;
}

export function deleteTodo(id) {
  todos = todos.filter(todo => todo.id !== id);
}

export function toggleTodoStatus(id) {
  const todo = todos.find(todo => todo.id === id);
  if (todo) {
    todo.completed = !todo.completed;
  }
}