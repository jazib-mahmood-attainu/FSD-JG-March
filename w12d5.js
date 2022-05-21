// A = [2,1,7,4,6,8,1,9]
A = [5,4,3,2,1,10]
// B = [7,7,8,6,8,9,9,-1]
B = []
stack = []

for(let i =0;i<A.length;i++){
    B[i] = -1;
}
for(let i =0;i<A.length;i++){
    
    while(stack.length!=0 && A[i]>A[stack[stack.length-1]]){
        top = stack.pop();//pop
        B[top] = A[i];
    }
    stack.push(i);
}


console.log(B);