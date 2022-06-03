/*
This code,
is to find the biggest number,
out of three variables.
*/

let a = 5;
let b = 6;
let c = 15;
condition = b>a;
condition2 =  b>c;
condition3 = a>c;
if (condition){//b > a
    
    if(condition2){ // b > c 
        console.log("b is bigger than c and a both");
    }
    else{ // c > b > a
        console.log("c is bigger than b and a both");
    }
}
else{// a>b
    if(condition3){ // a > c
        console.log("a is bigger than c and b both");
    }
    else{ // c > a > b
        console.log("c is bigger than b and a both");
    }
}

