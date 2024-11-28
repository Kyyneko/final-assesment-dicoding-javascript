class Inventory {
  constructor() {
    this.items = [];
  }

  // Method untuk menambahkan item ke dalam inventory
  addItem(item) {
    this.items.push(item);
  }

  // Method untuk menghapus item berdasarkan id
  removeItem(id) {
    this.items = this.items.filter((item) => item.id !== id);
  }

  // Method untuk menampilkan daftar item
  listItems() {
    return this.items.map((item) => item.displayDetails()).join("\n");
  }
}

export default Inventory;
