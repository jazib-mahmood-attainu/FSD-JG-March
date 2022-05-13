// A = [2,0,7,8,1,11]
// // a.sort((a,b)=>b-a)
// // console.log(a);

// function SelectionSort(A){
//     for(let i =0;i<A.length;i++){//i= 0 [2,1,7,8,0,11]
//         min_idx = i
//         for(let j =i+1;j<A.length;j++){// j =0 till n-1
//             if(A[min_idx]>A[j]){
//                 min_idx = j
//             }

//         }
//       [A[min_idx],A[i]]=[A[i],A[min_idx]] //[A[1],A[0]]=[A[0],A[1]]

//       }
//     return A
// }
// res = SelectionSort(A)
// console.log(res);
A = [2,0,1,7,8,11]
function BubbleSort(A){
    for(let i=0;i<A.length;i++){
        for(let j = 0;j<A.length-1-i;j++){
            if(A[j]>A[j+1]){
                temp = A[j]
                A[j] = A[j+1]
                A[j+1] = temp
                
            }
        }

    }
    return A
}

res = BubbleSort(A)
console.log(res);
