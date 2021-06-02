import { render } from "./view/html-util.js";
import { TodoListModel } from "./model/todoListModel.js";
import { TodoItemModel } from "./model/todoItemModel.js";
import { TodoListView } from "./view/todoListView.js";

console.log("App.js: loaded");

export class App {
  constructor() {
    this.todoListView = new TodoListView();
    this.todoListModel = new TodoListModel();
  }

  /**
   * Todoを追加するときに呼ばれるリスナー関数
   * @param {string} title
   */
  handleAdd(title) {
    if(title === ""){
      return;
    }

    this.todoListModel.addTodo(new TodoItemModel({
      title: title,
      completed: false
    }));
  }

  /**
   * Todoの状態を更新したときに呼ばれるリスナー関数
   * @param {{ id:number, completed: boolean }}
   */
  handleUpdate({ id, completed }) {
    this.todoListModel.updateTodo({ id, completed });
  }

  /**
   * Todoを削除したときに呼ばれるリスナー関数
   * @param {{ id: number }}
   */
  handleDelete({id}) {
    this.todoListModel.deleteTodo({id});
  }

  mount() {
    const formElement = document.querySelector("#js-form");
    const inputElement = document.querySelector("#js-form-input");
    const containerElement = document.querySelector("#js-todo-list");
    const todoItemCountElement = document.querySelector("#js-todo-count");

    this.todoListModel.onChange(() => {
      const todoItem = this.todoListModel.getTodoItems();
      const todoListElement = this.todoListView.createElement(
        todoItem, {
          onUpdateTodo: ({ id, completed }) => { this.handleUpdate({ id, completed }); },
          onDeleteTodo: ({id}) => { this.handleDelete({id}); }
        }
      );

      render(todoListElement, containerElement);
      todoItemCountElement.textContent = `Todoアイテム数: ${this.todoListModel.getTotalCount()}`;
    });

    formElement.addEventListener("submit", (event) => {
      event.preventDefault();
      this.handleAdd(inputElement.value);
      inputElement.value = "";
    });
  }

  unmount() {
    const formElement = document.querySelector("#js-form");
    this.todoListView.deleteElement(this.todoListModel.getTodoItems());
    formElement.removeEventListener("submit");
  }
}
