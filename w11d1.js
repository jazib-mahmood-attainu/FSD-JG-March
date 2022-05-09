// function fun(n){
//     let j = n-1;
//     console.log(j);
//     arr = []
//     for(let i = 0;i<n;i++){
//         // console.log("Hello World");
//         arr.push(i)
//     }
//     // console.log(arr);
// }

// n = Number(require("prompt-sync")()("Enter value of n"))
// fun(n)
// //T(n) = O(n)
// //S(n) = O(1)
// //S(n) = O(n)

// function greet(i){
//     if(i==0){
//         return i  // base condition
//     }
//     console.log("Hello World");
//     greet(--i);
// }
// n = Number(require("prompt-sync")()("Enter value of n"))
// greet(n)

//sum of n natural numbers
function sum(n){
    if (n==1){
        return 1
    }
    return n + sum(n-1)
}

n = Number(require("prompt-sync")()("Enter value of n"))
console.log(sum(n))