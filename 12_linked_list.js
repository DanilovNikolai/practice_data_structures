//! Создание Linked List (связанных списокв)

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(data) {
    const node = new Node(data);

    if (this.tail) {
      this.tail.next = node;
    }

    if (!this.head) {
      this.head = node;
    }

    this.tail = node;
  }

  prepend(data) {
    const node = new Node(data, this.head);

    this.head = node;

    if (!this.tail) {
      this.tail = node;
    }
  }

  toArray() {
    const result = [];

    if (this.head) {
      let current = this.head;

      while (current) {
        result.push(current);
        current = current.next;
      }
    }

    return result;
  }

  insertAfter(after, newData) {
    const found = this.find(after);
    console.log(found);

    if (!found) {
      return;
    }

    found.next = new Node(newData, found.next);
    console.log(found.next);
  }

  find(data) {
    if (!this.head) {
      return;
    }

    let current = this.head;

    while (current) {
      if (current.data === data) {
        return current;
      }
      current = current.next;
    }
  }

  remove(data) {
    if (!this.head) {
      return;
    }

    while (this.head && this.head.data === data) {
      this.head = this.head.next;
    }

    let current = this.head;

    while (current.next) {
      if (current.next.data === data) {
        //remove
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }

    if (this.tail.data === data) {
      this.tail = current;
    }
  }
}

const list = new LinkedList();

list.prepend("Hi");
list.append("My");
list.append("name");
list.append("is");
list.append("Nikolai");
list.append("Danilov");

list.prepend("42");
list.append("24");

console.log(list.toArray());
console.log(list.find("Nikolai"));
console.log(list.insertAfter("is", "Baboon"));

list.remove("42");
list.remove("24");
console.log(list.toArray());