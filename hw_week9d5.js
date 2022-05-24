// // mat = [
// //     [1,2,3,4],//10
// //     [5,6,7,8],//26
// //     [9,10,11,12]//42
// //     ]
// // sum_col =[]

// // r = mat.length
// // c = mat[0].length

// // for(let i =0;i<r;i++){
// //     sum = 0
// //     for(let j = 0;j<c;j++){
// //         // if(i==0||i==r-1||j==0||j==c-1)
// //         sum+=mat[i][j]
        
// //     }
// //     sum_col.push(sum)
// // }
// // // for(let i = 0; i < r ; i++){
// // //     for(let j = c-1; j>=0 ;j--){
// // //         console.log(i,j);
// // //         sum+=mat[i][j]
// // //     }
// // // }
// // // if(r<c){
// // //     small = r;
// // // }
// // // else{
// // //     small = c
// // // }
// // // for(let i = 0;i<small;i++){
// // //     sum+=mat[i][c-1-i]
// // // }
// // console.log(sum_col);

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
//  var search = function(nums, target) {
//     let l = 0,h = nums.length-1;
//     if(l==h){return 0}
//     while(l<h){
//         let mid = Math.floor((l+h)/2);
//         console.log(mid,nums[mid])
//         if(target<nums[mid]){
//             h = mid-1;
//         }
//         else if(target>nums[mid]){
//             l = mid+1
//         }
//         else
//             return mid
//     }
//    return -1 
// };

// console.log(search([5]))

var mySqrt = function(x) {
    let start = 0
    let end = x
    let mid = 0
    while(start<end){
        mid = Math.ceil((start+end)/2)
        if(mid**2<=x && (mid+1)**2>x){
            return mid
        }
        if(mid**2<x) start = mid
        else end = mid
    }
    return mid
};

console.log(mySqrt(1))