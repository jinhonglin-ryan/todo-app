import "../style.css";

// Data (holds the "state" of the application)
const todos = [
    "Buy coffee",
    "Buy sugar",
    "Buy jam"
];

// Functions (classes) that operate on data, usually update the state or render UI base on state
function renderTodos() {
    const todoListSection = document.getElementById("todo-list");
    // todoListSection.innerHTML = "";

    for(let i = 0; i < todos.length; i ++ ) {
        const todo = todos[i];

        const todoItemDiv = document.createElement("div");

        const todoTextDiv = document.createElement("div");
        todoTextDiv.classList.add("p-4", "todo-item");
        todoTextDiv.textContent = todo;

        const todoEditDiv = document.createElement("input");
        todoEditDiv.classList.add("hidden", "todo-edit")
        todoEditDiv.setAttribute("value", todo)

        todoItemDiv.appendChild(todoTextDiv)
        todoItemDiv.appendChild(todoEditDiv)
        todoListSection.appendChild(todoItemDiv)
    }
}

// renderTodos();

// wait till the document finished loading, and then call renderTodos
document.addEventListener("DOMContentLoaded", renderTodos)

