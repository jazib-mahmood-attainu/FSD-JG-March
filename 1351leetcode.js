/**
 * @param {number[][]} grid
 * @return {number}
 */
 var bs = function(arr){
    low= 0
    high = arr.length-1
    res = arr.length
    while(low<=high){
        mid = Math.floor((low+high)/2)
        if(arr[mid]<0){
            res = mid
            high = mid-1
        }
        else 
            low = mid+1
    }
    
    return res
}

var countNegatives = function(grid) {
    ctr = 0
    for(r of grid){
        console.log(r);
        ind = bs(r)
        // console.log(ind);
        console.log(r);
        l = r.length-ind
        ctr += l
        console.log(l,ctr);
    }
    
    return ctr
    
    
};

grid = [[3,2],[1,0]]
console.log(countNegatives(grid))