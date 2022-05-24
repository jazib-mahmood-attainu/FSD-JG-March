///Q1
// let s = "1234"
// function atoi(s,n){
//     if(n==1)
//         return Number(s)

//     return 10*atoi(s.slice(0,n-1),n-1)+Number(s[n-1])

// }
// res = atoi(s,s.length)
// console.log(res);
// console.log(res+1);
///Q2
// let x = 1234567
// function solve(x){
//     s = x.toString()
//     if(s.length==1){
//         console.log(Number(s[0]));
//         return
//     }
//     console.log(Number(s[0]));
//     solve(Number(s.slice(1)))
// }
// solve(x)
///Q3
// s = "ABCD"
// function rev(s){
//     if (s.length==1){
//         return s
//     }
//     return s[s.length-1]+rev(s.slice(0,s.length-1))

// }

// console.log((rev(s)))

///Q4 - recursive BS

// arr = [2,5,6,8,9,10,11]
// //     0 1 2 3"4" 5  6
// function BS(arr,target,l=0,h=n-1){
//     let mid = Math.floor((l+h)/2)
//     if(l>h){
//         return -1
//     }
//     if(arr[mid]<target){
//         l = mid+1
//         return BS(arr,target,l,h)
//     }
//     else if(arr[mid]>target){
//         h = mid-1
//         return BS(arr,target,l,h)
//     }
//     else return mid
// }
// n = arr.length
// target = 9
// res = BS(arr,target)
// console.log(res);
























///W11D2
///Q1
// n = 5466458
//  function rev(n, temp){
//      if(n==0)
//         return temp
//      temp = (temp*10)+(n%10);
//      return rev(Math.floor(n/10),temp)
//  }

//  reversal = rev(n,0)
// //  console.log(reversal);
// if(n==reversal){
//     console.log("palindrome");
// }
// else{
//     console.log("not a palindrome");
// }

///Q2
// n = 1234
//  function sod(n,temp = 0){
//      if(n==0)
//         return temp
//      temp += n%10;//4+3+2+1+0
//      return sod(Math.floor(n/10),temp)
//  }

// console.log((sod(n)))
// //  console.log(reversal);
///Q3
// n = 5//15
// function sum(n){
//     if(n==0)
//     return 0
//     return n+sum(n-1)//5+4+3+2+1+0
// }

// console.log(sum(n))

///Q4
// function prod(x,y){
//     if(y==1)
//         return x
//     return x+prod(x,y-1)
// }
// console.log(prod(5,4))

///W11D4
//Q3
arr = [8,5,6,3,9,1]
// for(i = 0;i<arr.length;i++){
//     min_idx = i
//     for(j = i+1;j<arr.length;j++){
//         if(arr[j]<arr[min_idx]){
//             min_idx = j
//         }
//     [arr[min_idx],arr[i]]=[arr[i],arr[min_idx]]
//     }
// }
let i = 0
while(i<arr.length){
    min_idx = i;
    j = i+1
    while(j<arr.length){
        if(arr[j]<arr[min_idx]){
            min_idx = j
        }
        j++
    }
    [arr[min_idx],arr[i]]=[arr[i],arr[min_idx]]
    i++
}


console.log(arr);//O(n^2) ,O(1)

arr = ["z","abc"]
arr.sort()
console.log(arr);

console.log(Number("+"))