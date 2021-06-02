export class TodoListModel {
  constructor() {
    this.items = [];
    this.id = 0;
  }

  // ToDoリストのアイテムを返す
  getAllItems() {
    return this.items;
  }

  // ToDoリストのアイテムを返す
  getItemCount() {
    return this.items.length;
  }

  // リストにToDoを追加
  add(title) {
    this.items.push({
      title: title,
      id: this.id++,
      completed: false
    });
  }

  // リストの完了状態の変更
  update({ id, completed }) {
    const item = this.items.find(item => item.id === id);

    if(!item) {
      return;
    }

    item.completed = completed;
  }

  // リストの削除
  delete({id}) {
    const item = this.items.find(item => item.id === id);

    if(!item) {
      return;
    }

    this.items = this.items.filter(item => item.id !== id);
  }

  // リストの全削除
  deleteAll() {
    this.items = [];
  }
}
