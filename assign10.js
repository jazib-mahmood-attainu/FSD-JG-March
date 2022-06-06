// A = [1,1,1,2,2,2,3,3,4,4]
// //   0 1 2 3 4 5 6 7 8 9
// //lb = 3
// //ub = 5

// // function lowerBound(A,target){
// //     for(let  i =0;i<A.length;i++){
// //         if(A[i]==target){
// //             return i
// //         }
// //     }
// //     return false
// // }

// // function upperBound(A,target){
// //     let ans;
// //     for(let  i =0;i<A.length;i++){
// //         if(A[i]==target){
// //             ans =  i
// //         }
        
// //     }
// //     return ans
// // }

// function lowerBound(arr,target){
//     let l = 0;
//     let r = arr.length-1;
//     ans = false
//     while(l<=r){
//         mid = Math.floor((l+r)/2)
//         if(arr[mid]==target){
//             ans = mid;
//             r  = mid-1;
//         }
//         else if (arr[mid]>target){
//             r = mid -1;
//         }
//         else {
//             l=mid+1;
//         }
//     }
//     return ans
// }
// function upperBound(arr,target){
//     let l = 0;
//     let r = arr.length-1;
//     ans = false
//     while(l<=r){
//         mid = Math.floor((l+r)/2)
//         if(arr[mid]==target){
//             ans = mid;
//             l  = mid+1;
//         }
//         else if (arr[mid]>target){
//             r = mid -1;
//         }
//         else {
//             l=mid+1;
//         }
//     }
//     return ans
// }




// res = lowerBound(A,2)
// console.log(res);
// res = upperBound(A,2)
// console.log(res);
//Q3
A = [9,3,4,5,8,1,2,3,4,9,6,9]
function large_2large(A){
    max = Number.NEGATIVE_INFINITY;
    max2 = Number.NEGATIVE_INFINITY;
    for(let i = 0;i<A.length;i++){
        if(A[i]>max){
            max2 = max;
            max = A[i];

        }
        else if (A[i]!=max && A[i]>max2){
            max2 = A[i]
        }
    }
    console.log(max,max2);
}

large_2large(A)