class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function postorder(root){
    if(root==null){
        return
    }
    
    postorder(root.left)
    postorder(root.right)
    console.log(root.val);
}


let root = new Node(50);
root.left = new Node(40);
root.right = new Node(60);

root.left.left = new Node(35);
root.left.right = new Node(45);

root.right.left = new Node(55);
root.right.right = new Node(65);

postorder(root)