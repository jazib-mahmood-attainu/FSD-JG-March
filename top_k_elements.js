/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
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
function build_max(val){
    n = val.length;
    for(let i = Math.floor(val.length/2)-1;i>=0;i--){
        max_heapify(val,n,i);
    }
    return val
}
var topKFrequent = function(nums, k) {
    HT = {}
    res = []
    for(ele of nums){
        if(HT[ele]==undefined) HT[ele] = 1;
        else HT[ele]+=1;
    }
    
    val = Object.values(HT)
    mh = build_max(val)
    
    for(let j = 0;j<k;j++){
    res.push(mh[0])
    mh[0] = mh[mh.length-1]
    mh.pop()
    max_heapify(val,n,0);}
    console.log(res)
    let res2 = []
    //write your code here  
    //

    return res2;
    
}