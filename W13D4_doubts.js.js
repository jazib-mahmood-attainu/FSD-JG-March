// // class Student{
// //     constructor(name,roll){
// //         this.name = name
// //         this.roll = roll

// //     }

// //     setAge(age){
// //         this.age = age
// //     }
// // }

// // stud1 = new Student("jazib",1)
// // // stud = new Array(3)
// // // for(i = 0;i<3;i++){
// // //     n = require("prompt-sync")()("Enter name")
// // //     r = require("prompt-sync")()("Enter roll number")
// // //     stud[i] = new Student(n,r)
// // // }
// // // console.log(stud);
// // stud1.setAge(21)
// // console.log(stud1.age);

// class Temperature{
//     convertFahrenheit(celcius){
//         console.log(((celcius*9)/5)+32);
//     }

// }
// obj = new Temperature()
// obj.convertFahrenheit(0)
// console.log(stud1);

// function Student() { this.name = 'John'; this.gender = 'M'; } 
// var studObj = new Student(); 
// console.log(Student.prototype); // object 
// console.log(studObj.prototype); // undefined 
// console.log(studObj.__proto__); // object 
// console.log(typeof Student.prototype); // object 
// console.log(typeof studObj.__proto__); // object 
// console.log(Student.prototype === studObj.__proto__ ); // true
/**
 * @param {number} n
 * @return {number}
 */

 function solve(n){
    if(n==1){
        return 1
    }
    max_prod = 1
    for(let i = 1;i<n;i++){
    console.log(i,n-i,n)
    prod = i*solve(n-i)
    console.log(prod,"prod");
    max_prod = Math.max(prod,max_prod)
    
  }
  console.log("object2",n);
    return max_prod
}
var integerBreak = function(n) {
    dp = []
    for(j = 0;j<=n;j++){
        dp[j] = -1
    }
    return solve(n,1,dp)
};

console.log(solve(5))