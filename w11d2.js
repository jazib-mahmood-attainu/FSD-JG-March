// function sum(n){
//     if (n==1){
//         return 1
//     }
//     return n+sum(n-1)
// }

// res=sum(5)
// console.log(res);

// function fact(n){
//     if (n==1||n==0){
//         return 1
//     }
//     return n*fact(n-1)
// }

// res=fact(0)
// console.log(res);


// function fibonacci(n){
//     if (n==1||n==0){
//         return 1
//     }
//     return fibonacci(n-1)+fibonacci(n-2)
// } 

// res = fibonacci(50)
// console.log(res);

grid = [
        [0,0,1,1],
        [1,0,0,0],
        [1,1,0,0]
    ]

function solve(x,y,grid){
    r = grid.length//rows
    c = grid[0].length//columns
    if(x>=r||y>=c){
        return 0
    }

    if(grid[x][y]==1){
        return 0
    }


    
    if(x==r-1 && y==c-1){
        return 1
    }

    return solve(x,y+1,grid)+solve(x+1,y,grid)
}


paths = solve(0,0,grid)
console.log(paths);