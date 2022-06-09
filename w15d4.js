console.time("speed")

// dp = new Array(101);
// dp.fill(null)
// dp[0] = 0
// dp[1] = 1
// var fib = function(n) {
//     if (dp[n]!=null){
//         return dp[n]
//     }
//     dp[n] = fib(n-1)+fib(n-2)
//     return dp[n]
// };
// dp = {};
// dp[0] = 0
// dp[1] = 1
// var fib = function(n) {
//     if (dp[n]!=undefined){
//         return dp[n]
//     }
//     dp[n] = fib(n-1)+fib(n-2)
//     return dp[n]
// };

res = fib(50)
console.log(res);
console.timeEnd("speed")