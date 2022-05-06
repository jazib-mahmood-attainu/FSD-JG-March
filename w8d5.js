// // function addition(tot,item){
// //     return tot+item
// // }

// function myFunc(...rajnikanth){ //["2",1,2,3]
//     // res = rajnikanth.reduce(addition)
//     // console.log(res);
//     // console.log(a,b);
//     console.log(rajnikanth.length);
// }


// x = 2
// y = 1
// z = 2 
// d = 3
// myFunc(x,y,z)

// function sum(x,y,z,...arr){//rest
//     console.log(arr);
//     return x+y+z;

// }
// inp = ((require("prompt-sync")()("enter values")).split(",")).map(Number)
// res = sum(...inp)// spread ...[8,5,6,3,9,8,3,9,1,8]=>sum(8,5,6,3,9,8,3,9,1,8)
// console.log(res); 

arr = ["kb","mouse","monitor"]// ...arr.slice(1,3)=>...["mouse","monitor"]=>"mouse","monitor"
arr2 = ["Cpu","Router"]
arr3 = [arr[0],...arr2,...arr.slice(1,3)]
console.log(arr3);

let obj1 = {a:2,b:3,c:4};
let obj2 = {a:5,d:6,e:7};
let obj3 = {
    ...obj1
}
obj3.a = 6
console.log(obj3);
console.log(obj1);


// s = "allright"

// function fun(...t){
// console.log(typeof t);

// }
// fun(...s)// "a","l","l","r","i","g","h","t"
