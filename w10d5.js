arr = [2,5,9,9,9,9,17,22,31,100]
//     0 1 2 3 4 5  6  7  8  9
target = 9

const BinarySearchLB = function (arr,target){
    l = 0;
    r = arr.length - 1;
    res = -1
    while (l<=r){//2<=1
        mid = Math.floor((l+r)/2)
        if(arr[mid]<target){//5<9
            l = mid+1 //increment
        }
        else if(arr[mid]>target){
            r = mid - 1 //decrement
        }

        else if(arr[mid]==target)
            {res =  mid  //res = 1
            r = mid-1}
        }
    return res
    }


const BinarySearchUB = function (arr,target){
    l = 0;
    r = arr.length - 1;
    res = -1
    while (l<=r){//2<=1
        mid = Math.floor((l+r)/2)
        if(arr[mid]<target){//5<9
            l = mid+1 //increment
        }
        else if(arr[mid]>target){
            r = mid - 1 //decrement
        }

        else if(arr[mid]==target)
            {res =  mid  //res = 1
            l = mid+1}
        }
    return res
    }

lb = BinarySearchLB(arr,target)
if(lb==-1){
    console.log("number not present");
}

 


ub = BinarySearchUB(arr,target)
if(ub==-1){
    console.log("number not present");
}

console.log(`lower bound: ${lb}
upper bound: ${ub}`)

// for(let i =lb;i<=ub;i++){
//     console.log(i);
// }


var findPeakElement = function(nums) {
    if(nums.length<2){
        return 0
    }
    if(nums[0]>nums[1]){
        return 0
    }
    if(nums[nums.length-1]>nums[nums.length-2]){
        return nums.length-1
    }
    
    for(let i = 1;i<nums.length-1;i++){
        if(nums[i-1]<nums[i] && nums[i]>nums[i+1]){
            return i
        }
    }
};//peak element ->https://leetcode.com/problems/find-peak-element/

//samecode binary search
var findPeakElement = function(nums){

    let l = 0
    let r = nums.length-1


    while(l<=r){
        mid = Math.floor((l+r)/2)
        if((mid-1<0||nums[mid]>nums[mid-1]) && ((mid+1>=nums.length)||nums[mid]>nums[mid+1])){
            return mid
        }
        if(mid-1>= 0 && nums[mid-1]>=nums[mid]){
            r = mid-1
        }
        else if(mid+1 < nums.length && nums[mid+1]>=nums[mid]){
            l = mid+1
        }
    }
    return mid
    
};