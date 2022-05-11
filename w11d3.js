// // function solve(n){
// //     if(n==0){
// //         return 1
// //     }

// //     if(n<0){
// //         return 0
// //     }
// //     return solve(n-1)+solve(n-2)
// // }

// // n = 5
// // res = solve(n)
// // console.log(res);

// function ladder(start,total){
//     if(start==total)  {
//         return 1
//     }

//     if(start>total){
//         return 0
//     }
    
//     return ladder(start+1,total)+ladder(start+2,total)
// }
// n = 5
// res =ladder(0,n)
// console.log(res);

// /**
//  * @param {number[][]} mat
//  * @param {number} k
//  * @return {number[]}
//  */

//  function ub(arr){
//     target = 1
//     l = 0;
//     r = arr.length - 1;
//     res = -1
//     while (l<=r){
//         mid = Math.floor((l+r)/2)
//         if(arr[mid]>1){
//             l = mid+1 
//         }
//         else if(arr[mid]<1){
//             r = mid - 1 
//         }
//         else if(arr[mid]==1)
//             {res =  mid 
//             l = mid+1}
//         }
//     return res
//     }

// var kWeakestRows = function(mat, k) {
//     len = mat.length
//     soldiers = []
//     for(let i = 0;i<len;i++){
//         ind = ub(mat[i])
//         soldiers.push(ind+1)
//     }
    
//     obj = {    }
//     for(let i = 0;i<soldiers.length;i++){
//         if(!(soldiers[i] in obj))
//         obj[soldiers[i]] = [i]
//         else
//             obj[soldiers[i]].push(i)
//     }
//     // console.log(obj)
//     res = []
//     for(i in obj){
//         for(ele of obj[i]){
//             res.push(ele)
//         }
//     }
//     // console.log(res)
//     return res.slice(0,k)
// };


// obj2 = {
//     zb:5,
//     cd:6,
//     af:7
// }

// const SortedWeak = Object.keys(obj2).sort().reduce((obj, key) => { obj[key] = obj2[key]; return obj;},{});
// console.log(SortedWeak);

function solve(n,i){
    if(i==n.length){
        return
    }
    console.log(n[i]);
    solve(n,i+1)

}


n = 1234567

solve(String(n),0)