import { TodoListView } from "./view/TodoListView.js"

export class App {
  // コンストラクタ
  constructor() {
    this.todoListView = new TodoListView();
  }

  // ページのロード時にアプリケーションをマウントする
  mount() {
    const formElement = document.querySelector("#js-form");
    const inputElement = document.querySelector("#js-form-input");

    // submitイベントのコールバック関数を登録
    formElement.addEventListener("submit", (event) => {
      event.preventDefault();
      this.todoListView.addTodoItem(inputElement.value);
      inputElement.value = "";
    });
  }

  // ページのアンロード時にアプリケーションをアンマウントする
  unmount() {
    const inputFormElement = document.querySelector("#js-form");

    this.todoListView.deleteAll();
    this.todoListView.unmount();

    // submitイベントのコールバック関数を解除
    inputFormElement.removeEventListener("submit");
  }
}
