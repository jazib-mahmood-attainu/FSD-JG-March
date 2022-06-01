class Node{
    constructor(data){
        this.data = data
        this.next = null

    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }

    //APIs
    //addANodeattheEnd()
    //insertNodeAtKth()
    addANodeattheEnd(val){
        let node = new Node(val);
        if(this.head==null){
            this.head = node
        }
        else{
           let cur = this.head;
            while(cur.next!=null){
                cur = cur.next;
            }
            cur.next = node
        }
    }

    printLL(){
        let cur = this.head;
        let str = []
        while(cur!=null){
            str.push(cur.data)
            cur = cur.next
        }
        console.log(str.join("->"))

    }

    isEmpty(){
        return this.head==null;
    }

    sizeofLL(){
        let cur = this.head;
        let ctr = 0
        while(cur!=null){
            ctr+=1
            cur = cur.next
        }
        return ctr
    }

    kthnodefromend(k){
        let p1 = this.head
        let p2 = this.head
        let dist_p1_p2 = 0
        while(p2!=null){
            p2 = p2.next;
            if(dist_p1_p2==k){
                p1 = p1.next
                continue
            }
            dist_p1_p2+=1;
        }
        console.log(p1.data);
    }
}

let LL1 = new LinkedList()
LL1.addANodeattheEnd(5)
LL1.addANodeattheEnd(6)
LL1.addANodeattheEnd(7)
LL1.addANodeattheEnd(8)
LL1.addANodeattheEnd(9)
LL1.addANodeattheEnd(10)
// console.log(LL1.head)

// LL1.printLL()
// console.log(LL1.isEmpty())

// LL2 = new LinkedList()
// console.log(LL2.isEmpty());


// size = LL1.sizeofLL()
// console.log(size);



LL1.kthnodefromend(4)