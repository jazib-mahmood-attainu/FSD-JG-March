// // const myfunc = (a,b)=>(a>b)?a:b;

// // res = myfunc(8,9)// res = b//res= 9
// // console.log(res+" is bigger");

// const func = (a,b)=>(a>b)?a:b;

// res = func(10,5)
// console.log(res+" is bigger");

//w6d3
// const arr = [7,4,1,2,5,8,3,6,9]
// function myfunc(A){
//     for(let i=0;i<A.length;i++){
//         console.log(A[i]);
//     }
// }

// function myfunc2(A){
//     for(ele of A){
//         console.log(ele);
//     }
// }
// myfunc(arr)
// myfunc2(arr)
arr = []
l = Number(require("prompt-sync")()("Enter length of array "))
for(let i = 0;i<l;i++){
    arr.push(Number(require("prompt-sync")()("Enter element ")))
    
}
console.log(arr);