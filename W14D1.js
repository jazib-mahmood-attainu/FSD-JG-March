class LinkedList{
    constructor(data,next){
        this.data = data,
        this.next = next
    }
}
function addNodeAtEnd(head,val){
    cur = head;
    while(cur.next!=null){
        cur = cur.next;
    }
    cur.next = new LinkedList(val,null)
}

function printLL(head){
    cur = head
    while(cur!=null){
        console.log(cur.data);
        cur = cur.next
    }
}
function addNodeAtBeginning(head,val){
    new_node = new LinkedList(val,null)
    new_node.next = head
    head = new_node
    return head
}

head = new LinkedList(5,null)
addNodeAtEnd(head,10)
addNodeAtEnd(head,15)
addNodeAtEnd(head,17.5)
addNodeAtEnd(head,20)

head = addNodeAtBeginning(head,2)
printLL(head)

