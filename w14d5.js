// class Node{
//     constructor(val){
//         this.val = val;
//         this.left = null;
//         this.right = null;
//     }
// }

// // function postorder(root){
// //     if(root==null){
// //         return
// //     }
// //     if(root.left==null && root.right==null){
// //     console.log(root.val);
// //     }

// //     postorder(root.left)
// //     postorder(root.right)
// // }

// function NumberofNodes(root){
//     if(root==null){
//         return 0
//     }
//     if(root.left==null && root.right==null){
//     return 1
//     }
//     let lst = NumberofNodes(root.left)
//     let rst = NumberofNodes(root.right)
//     return lst+rst+1;
// }

// function depth(root){
//     if(root==null){
//         return 0
//     }
//     if(root.left==null && root.right==null){
//     return 1
//     }
//     let lst = depth(root.left)
//     let rst = depth(root.right)
//     return Math.max(lst,rst)+1;
// }

// function search(root,target){
//     if(root==null){
//         return false
//     }
//     if(root.val==target){
//         return true
//     }
//     if(root.val<target){
//         return search(root.right,target)
//     }
//     return search(root.left,target)
// }







// let root = new Node(50);
// root.left = new Node(40);
// root.right = new Node(60);

// root.left.left = new Node(35);
// root.left.right = new Node(45);

// root.right.left = new Node(55);
// root.right.right = new Node(65);

// console.log(NumberofNodes(root))
// console.log(depth(root));

// console.log(search(root,15))

// // console.log(balanced(root));


class Node {
    constructor(value) {
      this.val = value;
      this.leftChild = null;
      this.rightChild = null;
    }
  }
  
// class BinarySearchTree {
//     constructor(rootValue) {
//       this.root = new Node(rootValue);
//     }
  
//     insert(currentNode, newValue) { //50,40//null,40
//       if (currentNode === null) {
//         currentNode = new Node(newValue);//40
//       } else if (newValue < currentNode.val) {//40<50
//         currentNode.leftChild = this.insert(currentNode.leftChild, newValue); //node.val = 40
//       } else {
//         currentNode.rightChild = this.insert(currentNode.rightChild, newValue);
//       }
//       return currentNode;
//     }
//     insertBST(newValue) {
//       if (this.root == null) {
//         this.root = new Node(newValue);
//         return;
//       }
//       this.insert(this.root, newValue);
//     }
// }

