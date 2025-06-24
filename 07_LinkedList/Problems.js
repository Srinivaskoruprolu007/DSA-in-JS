import Node from "./LinkeList.js";

// let's create a linkedlist with 1 -> 5 -> 8 -> 9 -> 2 -> 10
let head = new Node(1);
head.next = new Node(5);
head.next.next = new Node(8);
head.next.next.next = new Node(9);
head.next.next.next.next = new Node(2);
head.next.next.next.next.next = new Node(10);

// return the middle node of the linked list
// calculate the length of the linked list and then iterate by length/2 times
function middleNode(head) {
  let len = 0;
  let temp = head;
  while (temp != null) {
    len++;
    temp = temp.next;
  }
  let mid = Math.floor(len / 2); //len / 2;
  temp = head;
  for (let i = 0; i < mid; i++) {
    temp = temp.next;
  }
  return temp;
}

// using slow and fast pointers
function middleNode_2(head) {
  let slow = head;
  let fast = head;
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

// find nth node from the end
function nthNodeFromEnd(head, n) {
  let len = 0;
  let temp = head;
  while (temp != null) {
    len++;
    temp = temp.next;
  }
  let pos = len - n;
  temp = head;
  for (let i = 0; i < pos; i++) {
    temp = temp.next;
  }
  return temp;
}

function nthNodeFromEnd_2(head, n) {
  // move a pointer n times
  let fast = head;
  let slow = head;
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }
  while (fast != null) {
    fast = fast.next;
    slow = slow.next;
  }
  return slow;
}

function reverseLL(head){
    let prev = null;
    let curr = head;
    while(curr != null){
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}
console.log(middleNode(head));
console.log(middleNode_2(head));
console.log(nthNodeFromEnd(head, 4));
console.log(nthNodeFromEnd_2(head, 4));

console.log(reverseLL(head));
