/* 
    Stores a list of todo objects of type 
    {
        id: string,
        title: string,
        completed: boolean
    }
*/
let todos = [];

const todoInput = document.getElementById("todoInput");

function addNewTodo(todo) {
  const id = crypto.randomUUID();
  todos.push({
    id: id,
    title: todo,
    completed: false,
  });
  displayTodos();
  // Clear input and restore focus
  todoInput.value = "";
  todoInput.focus();
}

function toggleTodoCompletion(id) {
  todos = todos.map((todo) => {
    if (todo.id === id) {
      todo.completed = !todo.completed;
    }
    return todo;
  });
  displayTodos();
}

function removeTodo(id) {
  todos = todos.filter((todo) => todo.id != id);
  displayTodos();
}

const newTodoForm = document.getElementById("newTodoForm");
newTodoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const todo = todoInput.value;
  addNewTodo(todo);
});

function displayTodos() {
  // Update the list
  // Could also build the elements/nodes using the DOM
  let html = "";
  todos.forEach((todo) => {
    html += `
        <li class="list-group-item hstack gap-3">
        <div class="form-check flex-fill">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            onchange="toggleTodoCompletion('${todo.id}')"
            id="${todo.id}"
            ${todo.completed && "checked"}
          />
          <label class="form-check-label w-100 ${
            todo.completed && "text-decoration-line-through text-muted"
          }" for="${todo.id}">${todo.title}</label>
        </div>
        <button class="btn btn-dark" onclick="removeTodo('${todo.id}')">
          <i class="bi-trash text-danger"></i>
        </button>
      </li>
        `;
  });
  document.getElementById("todosList").innerHTML = html;

  // Update the completed count
  const completedCount = todos.filter((todo) => todo.completed).length;
  document.getElementById(
    "completedTodosCount"
  ).innerText = `${completedCount} of ${todos.length}`;
}
