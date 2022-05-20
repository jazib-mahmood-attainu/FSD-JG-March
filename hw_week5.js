// x =15

// for(let n = 1;n<=x;n++)
// {if(n%3==0 && n%5==0){
//     console.log("FizzBuzz");
// }
// else if(n%3==0){
//     console.log("Fizz");
// }
// else if(n%5==0){
//     console.log("Buzz");
// }
// else{
//     console.log(n);
// }

// }

// n = 10
// sum = 0
// for(let i =1;i<=n;i++){
//     sum += i;//sum=sum+i=0+1=>1+2=>3+3=>6
// }
// console.log(sum);
// n = 10
// sum = (n* (n+1))/2
// console.log(sum);

//W5D2
//  x = 50

//  function func(x){
//  console.log('x is', x)
//  x = 2
//  console.log('Changed local x to', x) }

//  func(x)
//  console.log('x is now', x)

///W5D3
x = Number(require('prompt-sync')()("Enter a value"))
// ctr = 0
// for(let i = 1;i<=x;i++){
//     if(x%i==0){
//         ctr += 1
//     }
// }
// if(ctr == 2){
//     console.log("my number is prime");
// }
// else {
//     console.log("number is not prime");
// }

//Q2
z = x
y = x
let ctr = 0
while(y>0){
    y = Math.floor(y/10)
    ctr += 1
}
console.log(ctr,"is no of digits");
d = ctr
sum = 0
while(z>0){
    ld = z%10;
    sum += ld**d;
    z = Math.floor(z/10)
}

if(sum == x){
    console.log("Armstrong number");

}
else {
    console.log("Not armstrong");
}