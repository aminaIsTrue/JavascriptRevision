// // const bills = [125, 555, 44];

// // function calcTip(bill) {
// //   return bill >= 50 && bill <= 300 ? (bill * 15) / 100 : (bill * 20) / 100;
// // }

// // const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// // const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];

// // console.log(bills);
// // console.log(tips);
// // console.log(total);
// //we create the node that we will use for the Linkedlist

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// //Linked list is a Node that a constructor and perform specific operations
// class LinkedList {
//   //what linked list need is node.value, node.next, head, tail, and the length of the linked list
//   constructor(value) {
//     const newNode = new Node(value);
//     this.head = newNode;
//     this.tail = newNode;
//     this.length = 1;
//   }

//   //Add a value to the end of the linked list
//   push(value) {
//     //create the node that we want to add to the linked list
//     const newNode = new Node(value);

//     //adding to an empty linked list : means the head of the linked list is pointing to null(to false!)
//     if (!this.head) {
//       // we create a new linked list
//       this.head = newNode;
//       this.tail = newNode;
//     }
//     //adding to non-empty linked list
//     else {
//       //tail.next is pointing to the last node of the linkedlist
//       //we assigh the new node to the be the next the last node in the linked list
//       this.tail.next = newNode;
//       //the tail of the last node points to the new node
//       this.tail = newNode;
//     }
//     this.length++;
//     return this;
//   }
//   // remove a node from the end of the linked list
//   pop() {
//     // case 1:linked list is empty
//     if (this.length == 0) {
//     }
//     // case 2: linked list has just 1 node
//     else if (this.length == 1) {
//       this.head = null;
//       this.tail = null;
//       this.ength = 0;
//       return this.value;
//     }
//     //case 3:linked list has more than 1 node
//     else {
//       //find the node that points to null
//       //1-create a node that points to the head to iterate through it
//       let node = this.head;
//       //2-create a node that keeps track of the last position
//       let trackingNode = this.head;
//       do {
//         trackingNode = node;
//         node = node.next;
//       } while (node.next);

//       this.tail = trackingNode;
//       trackingNode.next = null;
//       this.length--;
//       return node.value;
//     }
//   }
// }

// let NewLinkedList = new LinkedList(5);
// NewLinkedList.push(6);
// NewLinkedList.push(7);
// NewLinkedList.push(8);
// NewLinkedList.pop();
