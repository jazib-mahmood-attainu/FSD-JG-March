//Linear Search
/*
arr = ["apple","banana","kiwi","orange","kiwi"]
target = "kiwi"

for (let i=0;i<arr.length;i++){
    if(arr[i]==target){
        console.log("present at index",i);
    }
}
*/




//Binary Search
arr = [2,5,9,9,9,13,17,22,31,100]
//     0 1 2 3 4  5  6  7  8  9
target = 9

const BinarySearch = function (arr,target){
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


ind = BinarySearch(arr,target)
if(ind==-1){
    console.log("number not present");
}
else{
    console.log(`The number is present at index ${ind}`);
}


