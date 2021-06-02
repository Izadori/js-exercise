import { element } from "./html-util.js";
import { TodoItemView } from "./todoItemView.js";

export class TodoListView {
  /**
   * `todoItems`に対応するTodoリストのHTML要素を作成して返す
   * @param {TodoItemModel[]} todoItems TodoItemModelの配列
   * @param {function({id:string, completed: boolean})} onUpdateTodo チェックボックスの更新イベントリスナー
   * @param {function({id:string})} onDeleteTodo 削除ボタンのクリックイベントリスナー
   * @returns {Element} TodoItemModelの配列に対応したリストのHTML要素
   */
  createElement(todoItems, { onUpdateTodo, onDeleteTodo }) {
    const todoListElement = element`<ul />`;

    todoItems.forEach(item => {
      const todoItemView = new TodoItemView();
      todoListElement.appendChild(
        todoItemView.createElement(item, { onUpdateTodo, onDeleteTodo })
      );
    });

    return todoListElement;
  }

  deleteElement(todoItems) {
    todoItems.forEach(item => {
      item.deleteElement();
    });
  }
}
