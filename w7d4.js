// arr = ["Orange","Orange","Orange","Orange","apple"]
// obj = { }
// for (ele of arr){//ele = apple
//     if (ele in obj){
//         obj[ele] += 1;//obj.ele => obj["ele"]
//     }
//     else {
//         obj[ele] = 1;
//     }
// }

// console.log(obj);

// a = [8,5,6,3,19,9,8,3,9,1,8]
// a.sort(function (a,b){ return a-b;})

// console.log(a);

// function myfunc(val){
//     return val+10;
// }
// const a2 = a.map(myfunc)


// a = [8,5]
// priy = a.map(Number)

// console.log(a);
// console.log(priy);

// arr = [21,15,16,18,22,35,41]

// function myfunc(item){
//     //1. if (item>18)
//     //     return true
//     // else
//     //     return false
//     //2. return item>18?true:false
//     //3.
//     return item>18
// }
arr = ["ab","ac","cat","dog","ball"]
function myfunc(item,ind,b){
    console.log(item);
    console.log(ind);
    console.log(b);
    if (item[0]=="a"){
        return true
    }
    else
    return false
}
arr2 = arr.filter(myfunc);
console.log(arr2);

// s = "1,2,3,4,5,6,7"
// a = s.split(",")
// a = a.map(Number)
// console.log(a);
// for (ele of a){
//     console.log(ele);
// }

//shoaib
// var color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "]; function Ordinal(n) { var o = ["th","st","nd","rd"], x = n%100; return x+(o[(x-20)%10]||o[x]||o[0]); } for(n = 0; n < color.length; n++){ var ordinal = n + 1; var output = (Ordinal(ordinal) + " choice is " + color[n] + "."); console.log(output); } 
a = [1,22,3]
// a.sort()
console.log(a.sort());
