l = ["BJP","BJP","BJP","AAP","BJP","AAP","BJP","BJP","AAP","BJP","AAP","BJP","BJP"]
obj = {
    
}
console.log(obj["BJP"]);

for (ele of l){
    obj[ele] = (obj[ele]==undefined)? 1 : obj[ele]+1;
}

console.log(obj);

a = [8,5,6,3,9,1]
// b = 0
// for(let i = 0;i<a.length;i++){
//     b += a[i];
// }
// console.log("sum is",b);

// a = [8,5,6,3,9,1]

// function myfunc(b,val){
//     return b+val
// }

// res = a.reduce(myfunc)
// console.log(res);


// a = ["hello"," ","world"]
// function myfunc(t,v){

// return t+v

// }

// r = a.reduce(myfunc)

// console.log(r);

// function myfunc(item){
//     console.log(item+10);
// }
// a = [8,5,6,3,9]
// console.log((a.forEach(myfunc)));
    
// v = Number('12341234123412341234n')

a = [1,2,3]
res = a.reduce((t,v)=>t+v)
console.log(res/a.length);