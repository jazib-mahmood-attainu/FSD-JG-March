const a = [5,6,9,1,"hello"]

console.log(a);
a[2] = 11;
a[a.length] = 12;
console.log(a);
// console.log(a.length);
// console.log(a[a.length-1]);

for(let i = 0;i<=a.length-1;i++)
    console.log(a[i]+10);
console.log("*****************")
for (i of a){
    console.log(i);
}

a.push(15)
console.log(a)
a.pop()
console.log(a)


b = [8,5,6,3]
for (i of b){           //[8,5,6,3]
    console.log(i);//8 5 6 3
}




n = require('prompt-sync')()("Enter length of array");
c = []
for(let i = 0;i<=n-1;i++){
    console.log("Enter",i,"th value ");
    val = require('prompt-sync')()("Enter");
    c.push(val);
}

console.log(c);
// console.log(a);
// a[7] = 15
// console.log(a);

// let f = function fact(n){ if (n==1) return n;return n*fact(n-1)}
// console.log(f(5))
