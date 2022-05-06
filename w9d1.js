// [a,b,...r] = [10,20,30,40,50]

// console.log(a);
// console.log(b);
// console.log(r);

// ;[a,b] = [b,a]
// console.log(a);


// ({a,b,...r} = { a:10,  b:20,  c:30, d:30});
// console.log(a);
// console.log(b);
// console.log(r);

// x = [1,2];
// [y=5,z=10,a=15] = x;
// console.log(y);
// console.log(z);
// console.log(a);

// function fun(){
//     x = 1
//     y = 2
//     z = 3
//     return [x,y,z]
// };


// [a,b,c] = fun();//[1,2,3]
// console.log(a);
// console.log(c);


n = 5
ctr = 0
for (let i = 0;i<n;i++){
    console.log("i:",i);
    for (let j = 0;j<n;j++){
        ctr+=1
        console.log("j:",j);
    }
}

console.log(ctr);