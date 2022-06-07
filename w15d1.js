function heap_sort(arr){
    arr = build_max_heap(arr);
    for(let  i = n-1 ;i>=0;i--)
    {
        temp = arr[0];
        arr[0] = arr[i]; 
        arr[i] = temp;
        max_heapify(arr,i,0) //n-1/n-2/n-3/n-4
    }
    return arr
}


function build_max_heap(arr){ //O(n)
    n = arr.length
    for(let i =Math.floor(n/2)-1;i>=0;i--){
        max_heapify(arr,n,i)
    }
    return arr
}

function max_heapify(arr,n,i){//O(height)
    let largest = i;
    // console.log(largest)
    let l = 2*i+1;
    let r = 2*i+2;
    if(l<n && arr[l]>arr[largest]){
        largest = l;
    }
    if(r<n && arr[r]>arr[largest]){
        largest = r;
    }

    if(largest!=i){
        temp = arr[i];
        arr[i] = arr[largest];
        arr[largest] = temp;
        max_heapify(arr,n,largest);
    }
}

arr = [9,33,57,2,7,1,10]
arr = build_max_heap(arr)
console.log(arr);

arr = heap_sort(arr)
console.log(arr);
// let n = arr.length
// max_heapify(arr,n,0)
// console.log(arr)


///Balanced
// var height = function(node){
//     if(node == null){
//         return 0
//     }
//     return Math.max(height(node.left),height(node.right))+1
// }
// var isBalanced = function(root) {
//     if(root == null){
//         return true
//     }
    
//     let lh = height(root.left) //3
//     let rh = height(root.right) //3
    
//     let l = isBalanced(root.left) //l = false
//     let r = isBalanced(root.right) //r = false
    
//     if(Math.abs(lh-rh)<=1 && l==true && r==true){
//         return true
//     }
    
//     return false
// };