const st = {
    name:"Ali",
    height:"5,5",
    city:"GZB",
        
}
//st.city=> st["city"]=>GZB
//st.prop=>st["prop"]=


console.log(st)
if ("bg" in st){
    console.log(st["bg"]);
}

else{
    st["bg"] = "O+ve";
}

console.log(st)

console.log("bg" in st)













arr = [8,5,6,3]
console.log(arr.push(1,9,7))
console.log(arr)
//[ 8, 5, 6, 3, 1, 9, 7 ]
const str_arr = arr.toString()
console.log(str_arr)
//"8,5,6,3,1,9,7"
const s = arr.join("")
console.log(s)
i = arr.reverse()
console.log(i.reverse())
console.log(i)
console.log(arr);

arr1 = [1,2,3]
arr2 = [4,5,6]
i = arr1.concat(arr2)
console.log(i);
console.log(arr1);
console.log(arr2);

arr3 = [8,5,6,3,8,8,3,8,1,3]
//      0 1 2 3 4 5 6 7 8 9
i = arr3.lastIndexOf(8,5)
console.log(i);

arr = ["a","d","z","a","c","a"]
console.log(arr.sort())
console.log(arr)


arr = [5,4,2,44,1,10,3]

// function myfunc(a,b){
//     return a-b;
// }
arr.sort(function (a,b){
    return a-b
})

console.log((arr));

arr = [8,5,6,3,9,8,3,9,1,8]
max= arr[0]
for(let i=0; i<arr.length;i++){
    if (arr[i]>max){
        max = arr[i];
        ind = i;
    }
}
console.log(max,ind);

n = Number(require("prompt-sync")()("enter size of array"))
arr = []
for(let i =0;i<n;i++){
    arr[i] = Number(require("prompt-sync")()("enter element"))
    
}
console.log(arr);
for(let i =0;i<n;i++){
   console.log(arr[i]+4);
    
}

// console.log("8"+4);
ar = [8,5,6,3,9,8,3,9,1,8]
obj = {}
for(let i = 0;i<ar.length;i++){
    obj[i]=ar[i];
}
console.log(obj);