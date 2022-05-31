class Node{
    constructor(data,next){
        this.data = data
        this.next = next
    }
}

function addNodeAtEnd(head,val){
    let node1 = new Node(val,null)//node with value 23
    let cur  = head
    while(cur.next!=null){
        cur = cur.next
    }
    cur.next = node1;
}

function printLL(head){
    let cur = head;
    ctr = 0
    while(cur!=null){
        console.log(cur.data);
        ctr += 1
        cur = cur.next
    }
    console.log("**********************size = ",ctr)
}

function mergeLL(head1,head2){
    let head3 = new Node(null,null);
    let cur = head3;
    while(head1!=null && head2!=null)
    {   
        
        if(head1.data<head2.data){
        cur.next = head1;
        head1 = head1.next
        }
        else 
        {
        cur.next = head2;
        head2 = head2.next
    }
    cur = cur.next;


}
    if(head1==null){
        cur.next = head2;
    }

    if(head2==null){
        cur.next = head1;
    }
    head3 = head3.next 
    return head3
}


function reverseLL(head){
    let prev = null;
    cur = head;
    while(cur!=null){
        nxt = cur.next;
        cur.next = prev;
        prev = cur;
        cur = nxt;
    }

    return prev
}

let head1 = new Node(2,null)
addNodeAtEnd(head1,13)
addNodeAtEnd(head1,23)
addNodeAtEnd(head1,31)

printLL(head1)

let head2 = new Node(4,null)//7,15,34,45
addNodeAtEnd(head2,7)
addNodeAtEnd(head2,15)
addNodeAtEnd(head2,34)
addNodeAtEnd(head2,45)
printLL(head2)

head3 = mergeLL(head1,head2)

printLL(head3)

head3 = reverseLL(head3)
printLL(head3)