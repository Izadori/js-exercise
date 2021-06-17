import { EventEmitter } from "../EventEmitter.js";
import { TodoListModel } from "../model/TodoListModel.js";
import { element, render } from "./html-util.js";

export class TodoListView extends EventEmitter {
  // コンストラクタ
  constructor() {
    super();
    this.model = new TodoListModel();
    this.mount();
  }

  // Viewのマウント
  mount() {
    this.addEventListener("change", () => {
      this.onChange();
    });
  }

  // Viewのアンマウント
  unmount() {
    this.removeEventListener("change");
  }

  // Viewの更新
  onChange() {
    const todoList = document.querySelector("#js-todo-list");
    const todoCount = document.querySelector("#js-todo-count");

    render(this.createElement(), todoList);
    todoCount.textContent = `ToDoの数: ${this.model.getItemCount()}`;
  }

  // Viewに表示する要素の生成
  createElement() {
    const listElement = element`<ul />`;
    const items = this.model.getAllItems();

    items.forEach((item) => {
      const childItem = item.completed
        ? element`<li>
            <input type="checkbox" class="checkbox" checked>
            <s>${item.title}</s>
            <button class="delete">x</button>
          </li>`
        : element`<li>
            <input type="checkbox" class="checkbox">
            ${item.title}
            <button class="delete">x</button>
          </li>`;

      const checkboxElement = childItem.querySelector(".checkbox");
      checkboxElement.addEventListener("click", () => {
        this.updateTodoItem({ id: item.id, completed: !item.completed });
      });

      const deleteButtonElement = childItem.querySelector(".delete");
      deleteButtonElement.addEventListener("click", () => {
        this.deleteTodoItem({ id: item.id });
      });

      listElement.appendChild(childItem);
    });

    return listElement;
  }

  // Viewの更新のトリガ
  emitChange() {
    this.emit("change", () => {
      this.onChange();
    });
  }

  // ToDoリストの追加
  addTodoItem(todo) {
    if (todo === "") {
      return;
    }

    this.model.add(todo);
    this.emitChange();
  }

  // ToDoリストの更新
  updateTodoItem({ id, completed }) {
    this.model.update({ id, completed });
    this.emitChange();
  }

  // ToDoリストの削除
  deleteTodoItem({ id }) {
    this.model.delete({ id });
    this.emitChange();
  }

  // ToDoリストの全削除
  deleteAll() {
    const checkboxElements = document.querySelectorAll(".checkbox");
    checkboxElements.forEach((item) => {
      item.removeEventListener("click");
    });

    const deleteButtonElements = document.querySelectorAll(".delete");
    deleteButtonElements.forEach((item) => {
      item.removeEventListener("click");
    });

    this.model.deleteAll();
    this.emitChange();
  }
}
