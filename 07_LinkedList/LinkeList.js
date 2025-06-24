class Node{
  constructor(data){
    this.data = data;
    this.next = null;
  }

  // traversing the linked list
  printList(){
    if(head == null) return;
    let temp = head;
    while(temp != null){
      console.log(temp.data);
      temp = temp.next;
    }
  }
  printRecursively(node){
    if(node == null) return;
    console.log(node.data);
    this.printRecursively(node.next);
  }
  insertAtBeginning(data){
    if(head == null){
      head = new Node(data);
    }else{
      let temp = new Node(data);
      temp.next = head;
      head = temp;
    }
  }
  insertAtEnd(data){
    if(head == null){
      head = new Node(data);
    }else{
      let temp = head;
      while(temp.next != null){
        temp = temp.next;
      }
      temp.next = new Node(data);
    }
  }
  insertAt(index, data){
    if(index < 0) return;
    if(head == null) return;
    let temp = head;
    for(let i = 0; i < index - 1 && temp != null; i++){
      temp = temp.next;
    }
    let newNode = new Node(data);
    newNode.next = temp.next;
    temp.next = newNode;
  }
  deleteFirst(){
    if(head == null) return;
    head = head.next;
  }
  deleteLast(){
    if(head == null) return;
    let temp = head;
    while(temp.next.next != null){
      temp = temp.next;
    }
    temp.next = null;
  }
  search(data){
    curr = head;;
    pos = 1
    while(curr != null){
      if(curr.data == data) return pos;
      curr = curr.next;
      pos++;
    }
    return -1;
  }
  searchRecursive(head, data){
    if(head == null) return -1;
    if(head.data == data) return 1;
    let pos = this.searchRecursive(head.next, data);
    if(pos == -1) return -1;
    return pos + 1;
  }
  sortedInsert(head, data){
    let curr = head;
    let newNode = new Node(data);
    if(head == null || head.data >= data){
      newNode.next = head;
      head = newNode;
    }else{

      while(curr.next != null && curr.next.data < data){
        curr = curr.next;
      }
      newNode.next = curr.next;
      curr.next = newNode;
    }
  }

}


let temp1 = new Node(10);
let temp2 = new Node(20);
let temp3 = new Node(30);
temp1.next = temp2;
temp2.next = temp3;
let head = temp1;

temp1.printList();
console.log("");

temp1.printRecursively(head);
head.insertAtBeginning(5);
console.log("  ");

head.printList();
head.insertAtEnd(40);
console.log("");

head.printList();

console.log("");

head.deleteFirst();
head.printList();
console.log("");

head.sortedInsert(head, 25);
head.printList();

export default Node;
