// for(let i = 100;i>=1;i--){
//     if(i%2==0){
//         console.log(i);
//     }
// }

let n = 6
// let limit = 15
let limit;
if(n && limit){
    for(let i = 1;i<=limit;i++){
        console.log(n,"*",i,"=",n*i);
    }
}
else {
    limit = 10;
    for(let i = 1;i<=limit;i++){
        console.log(n,"*",i,"=",n*i);
    }
}