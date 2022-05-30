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

//Stretch value, MAY 28th test
function processData(input) {
    input = input.split("\n")  
    st = input[1]
    queries = input.slice(2)
    // console.log(st,queries)
    alpha = "abcdefghijklmnopqrstuvwxyz"
    HT_alpha = {}
    for(let i = 0;i<alpha.length;i++){
        if(!(alpha[i] in HT_alpha)){
            HT_alpha[alpha[i]] = i+1
        }
    }
    
    R = [HT_alpha[st[0]]]
    for(let j = 1;j< st.length;j++){
        R.push(HT_alpha[st[j]]+R[j-1])
    }
    // console.log(R)
    for(t = 0 ;t<queries.length;t++){
        si = Number(queries[t].split(" ")[0])
        ei = Number(queries[t].split(" ")[1])
        if(si!=1){
            console.log(R[ei-1]-R[si-2])
        }
        else
            console.log(R[ei-1])
    }
} 
