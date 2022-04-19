arr = [8,5,6,3]
// function myfunc(a){
//     console.log(a+10);
// }
console.log(arr)
let i = arr.shift();
console.log(arr)
console.log(i)

console.log(arr)
arr.unshift(7,9,1);
console.log(arr)

arr2 = [8,5,6,3,9,1]
console.log(arr2)
i = arr2.splice(2,3)

console.log(arr2)
console.log(i)
arr2.unshift()
console.log(typeof arr2)

s = "hello"
console.log(isNaN(s))

function func1(){
    function func2(){
        console.log("inner");
    }
    return

    console.log("hello");
}

arr = [1,2,3,4,5,6,7,8]
//     0 1 2 3 4
j = arr.slice(2)
console.log(arr)
console.log(j)
i = arr.splice(2)
console.log(arr)
console.log(i)
console.log(arr.length)



// arr.forEach(myfunc);
// myfunc(arr)


// function func2(b,cb){
//     console.log(b);
//     cb(1)//func1(1)


// }
// z = 2
// func2(z,func1);


// func1(1);


// delete arr[2];
// console.log(arr);