function LCS(a,b,m,n,dp){
    if(m==0 || n==0)
    return 0
    
    if(dp[m][n]!=null){
        return dp[m][n]
    }

    if(a[m-1]==b[n-1]){
        dp[m][n] = 1 + LCS(a,b,m-1,n-1,dp)
        return dp[m][n]
    }
    else
    return dp[m][n] = Math.max(LCS(a,b,m-1,n,dp),LCS(a,b,m,n-1,dp))
}

a = "ABCDGHzhb"
b = "AEDFHRzjb"
m = a.length
n = b.length

let dp = new Array(m+1)
for(let i = 0;i<=n;i++){//for(let i = 0;i<n+1;i++){
    dp[i] = new Array(n+1).fill(null)
}
len = LCS(a,b,m,n,dp)
console.log(len);
// console.log(dp);