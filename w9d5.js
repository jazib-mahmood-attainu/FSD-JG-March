M = [//  0 1 2
        [1,2,3], //0th row
        [4,5,6], //1st row
        [7,8,9], //2nd row
        
    ];//3x3

n = M.length //rows
m = M[0].length //columns

// 1.
//principal diagonal for square matrix
// for(let i = 0;i<n;i++){
//     console.log(M[i][i]);
// }

// 2.
//principal diagonal for any matrix

// min = (x,y)=>(x<y)? x:y    

// for(let i = 0;i<min(n,m);i++){
//     console.log(M[i][i]);
// }

// anti diagonal for any matrix
// for(let i = 0;i<n;i++){
//     j = m-1-i
//     console.log(M[i][j]);
// }

//I'm prinitng all the elements
for(let i = 0;i<n;i++){
    txt = ""
    for(let j=0;j<m;j++){
        txt+=M[i][j]+" "
    }
    console.log(txt);
}