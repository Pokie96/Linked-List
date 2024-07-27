import { Node } from "./Node.js";

class LinkedList{
    constructor(head = null, tail = null){
        this.head = head;
        this.tail = tail;
    }

    setHead(node){
        this.head = node;
    }

    getHead(){
        return this.head;
    }

    setTail(node){
        this.tail = node;
    }

    getTail(){
        return this.tail;
    }

    append(value){
        if(this.head == null){
            let node = new Node(value);
            this.setHead(node);
            this.setTail(node);
        } else{
            let node = new Node(value);
            this.getTail().next = node;
            this.setTail(node);
        }
    }
}

const myList = new LinkedList();
myList.append(2);
myList.append(3);
myList.append(4);

console.log(myList.getHead());
console.log(myList.getTail());
