// class Node{
//     constructor(val){
//         this.val = val;
//         this.left = null;
//         this.right = null;
//     }
// }

// function postorder(root){
//     if(root==null){
//         return
//     }
    

//     postorder(root.left)
//     postorder(root.right)
//     if(root.val%2==1)
//     {console.log(root.val)}
// }












// let root = new Node(50);
// root.left = new Node(40);
// root.right = new Node(60);

// root.left.left = new Node(35);
// root.left.right = new Node(45);

// root.right.left = new Node(55);
// root.right.right = new Node(65);
// postorder(root);


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




function reverseLL(head){
    if(head==null || head.next==null){
        return head;
    }

    cur = reverseLL(head.next);
    head.next.next = head;
    head.next = null;

    return cur
}

let head1 = new Node(2,null)
addNodeAtEnd(head1,13)
addNodeAtEnd(head1,23)
addNodeAtEnd(head1,31)

printLL(head1)


head1 = reverseLL(head1)
printLL(head1)