class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.lase = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return this.size++;
  }
  pop() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.size === 1) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

// push, pop O(1)의 시간복잡도를 사져야하기 때문에 linked list의 로직과는 다르다.
// 맨 뒤에서 추가, 제거를 하는 대신에 맨 앞에서 추가, 제거를 할 것이다.
// -> 빠르니까
