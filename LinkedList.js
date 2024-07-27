import { Node } from "./Node.js";

class LinkedList{
    constructor(head = null, tail = null){
        this.head = head;
        this.tail = tail;
    }

    /**
     * Sets the head property to the node parameter
     * @param {*} node - The node to be set as the head
     */
    setHead(node){
        this.head = node;
    }

    /**
     * Returns the first node in the list
     * @returns Node at the head of the LinkedList
     */
    getHead(){
        return this.head;
    }

    /**
     * Sets the tail property to the node parameter
     * @param {*} node - The node to be set as the tail
     */
    setTail(node){
        this.tail = node;
    }

    /**
     * Returns the last node in the list
     * @returns Node at the tail of the LinkedList
     */
    getTail(){
        return this.tail;
    }

    /**
     * Adds a new node containing value to the end of the list
     * @param {*} value - The value to be contained within the node
     */
    append(value){
        let node = new Node(value);
        if(this.head == null){
            this.setHead(node);
            this.setTail(node);
        } else{
            this.getTail().next = node;
            this.setTail(node);
        }
    }

    /**
     * Adds a new node containing value to the start of the list
     * @param {*} value - The value to be contained within the node
     */
    prepend(value){
        let node = new Node(value);
        if(this.head == null){
            this.setHead(node);
            this.setTail(node);
        } else{
            let previousHead = this.getHead();
            node.next = previousHead;
            this.setHead(node);  
        }
    }

    /**
     * Returns the total number of nodes in the list
     * @returns The number of nodes contained within the LinkedList
     */
    getSize(){
        if(this.getHead() == null){
            return 0;
        } else{
            let size = 1;
            let node = this.getHead();
            while(node.next != null){
                size++;
                node = node.next;
            }
            return size;
        }
    }
}

const myList = new LinkedList();
myList.append(2);
myList.append(3);
myList.append(4);
myList.prepend(1);
myList.prepend("Head");
myList.append(5);
myList.append(6);

console.log(myList.getHead());
console.log(myList.getTail());
console.log(myList.getSize());
