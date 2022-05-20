// arr = [7,4,1,8,5,2,9,6,3]
//     0 1 2 3 4 5 6 7 8 
// max_value = arr[0]
// // max_ind = 0;
// // for(i = 0;i<arr.length;i++){
// //     if(arr[i]>arr[max_ind]){
// //         max_ind = i
// //     }
// // }
// // for(ele of arr){
// //     if(ele%2==0){
// //         console.log(ele+" is even");
// //     }
// // }

// // console.log(max_value);

///W7D2
// obj = {
//     name:"David Rayy",
//     sclass:"VI",
//     rollno:12,
//     // prop:"how"
// }

// for(prop in obj){
//     console.log(prop);
// }
// obj = {}
// for(let i = 0;i<arr.length;i++){
//     obj[i] = arr[i];
// }
// console.log(obj);
// obj = {}
// arr = ["Orange","Orange","banana","apple","apple","banana","apple","apple","apple","apple","Orange","Orange","Orange","Orange","banana"]
// for(ele of arr){
//     if( j){
//         obj[ele]+=1
//     }
//     else{
//      obj[ele] = 1
//     }
// }

// console.log(obj);

//q2
// arr = ["1","2","3","4","5","6"]
// arr2 = arr.join("")
// console.log(Number(arr2)*10);

// arr = [8,5,6,3,55]
// arr.sort((a,b)=>a-b)
// console.log(arr);
///W7D5
arr = []
l = Number(require("prompt-sync")()("Enter length of array"))
for(i = 0;i<l;i++){
    arr.push(Number(require("prompt-sync")()("Enter the element")))
}
console.log(arr,"original array");
arr2 = arr.slice(2,9)
console.log(arr2,"this is from index 2 to 8");
console.log(arr,"original array");
arr3 = arr.splice(2,7)
console.log(arr3,"is extracted elements");
console.log(arr,"original array");

s = arr.reduce((sum,ele)=>sum+ele)
console.log(s/arr.length);