/*
Objectuves
- 정의
- list vs array
    - array: 각 data element들은 위치가 지정되어 index 지정된다
    - linkedList: next elemant를 index없이 그냥 다수의 elemant들을 가진다.
     head, tail, length로 구성
     각 node는 value와 (다른 노드 또는 null을 가리키는)pointer로 구성
    
- linked-list class 정의
*/

// 단일 연결 리스트는 각 노드가 다음 노드로 오직 단일 방향으로만 연결
// 즉, 링크드리스트는 노드의 집합

// piece of data - value, reference to next node - next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// let first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how are you")

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var newNode = new Node(val);
    // 헤드가 있는지
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode; // 현재 tail 다음에 newNode를 추가하고
      this.tail = newNode; // tail 마커를 newNode를 가리키도록 한다.
    }
    this.length++;
    return this;
  }
  // traverse: current가 존재하는 한까지 반복 - 이해를 위한 인스턴스. linkedList에서 사실 필요없는 함수
  traverse() {
    var current = this.head;
    while (current) {
      console.log(current.val); // "HELLo" "GOODBYE" "!" undefiend
      current = current.next;
    }
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    let current = this.head;
    this.head = current.next;
    this.length--;
    if (this.length === 0) {
      // 없어도 되긴 함 tail을 Node가 아닌 null로 만들려고
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  // unshift(val) {
  //     let newNode = new Node(val);
  //     let current = this.head;
  //     if (!this.head) {
  //         this.head = newNode;
  //         this.tail = newNode;
  //     } else {
  //         this.tail = current;
  //         this.head = newNode;
  //         this.head.next = current;
  //     }

  //     this.length++;
  //     return this;
  // }
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  // index 또는 위치를 의미하는 숫자를 인자로 받아서 주어진 노드를 반환
  // ⭐️주어진 숫자 만큼 리스트를 따라간 후, 해당 위치의 노드를 반환한다.
  get(index) {
    if (index < 0 || index > this.length) return null;

    let counter = 0;
    let current = this.head;

    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  // changeing value of a node based on it's position in this linked-list
  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    const newNode = new Node(val);
    let prev = this.get(index - 1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index > this.length - 1) return false;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const previousNode = this.get(index - 1);
    const removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;
    return removed;
  }
  // print함수는 효율보다는 순수하게 reverse()내부에서 어떤 일이 진행되고있는지 파악하기 위함
  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
  // 주의할 점은 그냥 덮어쓰면 안되고 next node를 임시로 저장해서 둘 변수를 하나 더 만들어야한다.
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

let list = new SinglyLinkedList();

list.push('100');
list.push('201');
list.push('250');
list.push('350');
