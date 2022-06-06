function max_heapify(arr,n,i){
    let largest = i;
    console.log(largest)
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
let n = arr.length
max_heapify(arr,n,0)
console.log(arr)
