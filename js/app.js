import { getTodos, addTodo, deleteTodo, toggleTodoStatus } from './data.js';

// Элементы DOM
const todoForm = document.getElementById('todo-form');
const taskInput = document.getElementById('task-input');
const errorText = document.getElementById('error-text');
const taskList = document.getElementById('task-list');
const searchInput = document.getElementById('search-input');
const filterButtons = document.querySelectorAll('.filter-btn');

// Текущие значения фильтра и поиска
let currentFilter = 'all';
let searchQuery = '';

// Главная функция отрисовки интерфейса
function render() {
  // Очищаем список перед новой отрисовкой
  taskList.innerHTML = '';

  const allTodos = getTodos();

  // 1. Применяем фильтрацию по статусу
  let filteredTodos = allTodos.filter(todo => {
    if (currentFilter === 'active') return !todo.completed;
    if (currentFilter === 'completed') return todo.completed;
    return true; // для 'all'
  });

  // 2. Применяем поиск по тексту (регистронезависимый)
  if (searchQuery.trim() !== '') {
    filteredTodos = filteredTodos.filter(todo =>
      todo.text.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  // 3. Создаем HTML-элементы на основе отфильтрованного массива
  filteredTodos.forEach(todo => {
    const li = document.createElement('li');
    li.className = `task-item ${todo.completed ? 'completed' : ''}`;

    // Создаем текст задачи
    const span = document.createElement('span');
    span.className = 'task-text';
    span.textContent = todo.text;
    // Клик по тексту меняет статус задачи
    span.addEventListener('click', () => {
      toggleTodoStatus(todo.id);
      render();
    });

    // Создаем кнопку удаления
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.innerHTML = '&times;'; // Символ крестика
    // Клик по крестику удаляет задачу
    deleteBtn.addEventListener('click', () => {
      deleteTodo(todo.id);
      render();
    });

    // Собираем элемент списка воедино
    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}

// Обработчик отправки формы (Добавление задачи + Валидация)
todoForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Предотвращаем перезагрузку страницы

  const text = taskInput.value.trim();

  // Простая валидация
  if (text === '') {
    errorText.textContent = 'Поле не может быть пустым!';
    taskInput.style.borderColor = '#e74c3c';
    return;
  }

  // Если валидация прошла, сбрасываем ошибки
  errorText.textContent = '';
  taskInput.style.borderColor = '#e2e8f0';

  // Добавляем задачу в массив данных и очищаем поле ввода
  addTodo(text);
  taskInput.value = '';

  render(); // Перерисовываем список
});

// Обработчик динамического поиска (срабатывает при каждом вводе символа)
searchInput.addEventListener('input', (event) => {
  searchQuery = event.target.value;
  render();
});

// Обработчик клика по кнопкам фильтрации
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Меняем активный класс на кнопках
    document.querySelector('.filter-btn.active').classList.remove('active');
    button.classList.add('active');

    // Обновляем фильтр и перерисовываем
    currentFilter = button.getAttribute('data-filter');
    render();
  });
});

// Первая отрисовка приложения при загрузке страницы
render();