// L = [1,3,5,7]
// R = [2,4,6,8]

// function merge(L,R){
//     C = L.concat(R) //O(n)
//     C.sort((a,b)=>a-b) //O(nlogn)
//     return C
// }
function merge(A,l,m,r){ //O(n) time
    n1 = m-l+1
    n2 = r-m
    L = []
    for(let i = 0;i<n1;i++){
        L[i] = A[l+i]
    }
    R = []
    for(let j = 0;j<n2;j++){
        R[j] = A[m+1+j]
    }
    //I have L and R and blank C
    i = 0
    j = 0
    k = l
    while(i<n1 && j<n2){
        if(L[i]<R[j]){
            A[k]=L[i]
            i++
        }
        else{
            A[k] = R[j]
            j++
        }
       k++ 
    } //untill one of the arrays get over

    while(j<n2){
        A[k]=R[j]
        j++
        k++
    }// when L is over but R has some numbers remaining
    while(i<n1){
        A[k]=L[i]
        i++
        k++
    }// when R is over but L has some numbers remaining
    // return A
    console.log(A,L,R,l,m,r);
}

function mergeSort(A,l,r){
    let m = Math.floor((l+r)/2)
    if(l<r){
        mergeSort(A,l,m)
        mergeSort(A,m+1,r)
        merge(A,l,m,r)
    }
    
}


A = [8,7,6,5,4,3,2,1]
l = 0
r = A.length-1
console.log(A);
mergeSort(A,l,r)
console.log(A);

