var findKthPositive = function(arr, k) {
    let left = 0, right = arr.length;
    while(left<right){
        const mid = left + Math.floor((right-left)/2);
        console.log(left,mid,right);
        if((arr[mid]-mid-1)>=k) 
            right = mid;
        else
            left = mid+1;
    }
    
    return left+k
};


console.log(findKthPositive([1,2,3],1))