export class Node{

    constructor(value = null, next = null){
        this.value = value;
        this.next = next;
    }

    getValue(){
        return this.value;
    }
}
