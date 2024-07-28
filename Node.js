export class Node{

    constructor(value = null, next = null){
        this.value = value;
        this.next = next;
    }

    /**
     * Returns the value of the node
     * @returns - The value of the Node
     */
    getValue(){
        return this.value;
    }

    /**
     * Sets the next property of this node to the given node
     * @param {*} node - The node that we want this node to point to
     */
    setNext(node){
        this.next = node;
    }
}
