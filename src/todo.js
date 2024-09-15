// OOP
// Create a class that represents a Todo object

class Todo {
    // static private property
    static #nextId = 1;
    // # + variable name to make the field private to the class
    #id;
    #text;
    #completed;
  
    constructor(id, text, completed = false) {
      this.#id = Todo.#nextId++;;
      this.#text = text;
      this.#completed = completed;
    }
  
    toggle() {
      this.#completed = !this.#completed;
    }
  
    get id() {
      return this.#id;
    }
  
    get text() {
      return this.#text;
    }
  
    get completed() {
      return this.#completed;
    }
  
    set text(newText) {
      this.#text = newText;
    }
  }

export default Todo;


//   const todo = new Todo(1, "Buy milk");
//   console.log(todo);
//   console.log(todo.id);
//   console.log(todo.text);
//   console.log(todo.completed);
  
//   // todo.id = 2; 
//   // call setter implicitly
//   todo.text = "Buy eggs";
//   todo.toggle();
//   // todo.completed = false;
  
//   console.log(todo);
//   console.log(todo.id);
//   console.log(todo.text);
//   console.log(todo.completed);