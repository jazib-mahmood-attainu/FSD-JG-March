

function no_of_digits(n){
    ctr = 0;
    while(n>=1){
        n = n/10;//1634=>163.4=>16.34=>1.634=>0.1634
        ctr++;

    }
    return ctr;
}

function Armstrong(x,p){
    let sum = 0;

    while(x>0){
        l = x%10;
        sum += l**p;
        x = Math.floor(x/10);//
    }
    return sum
}

let i = Number(require("prompt-sync")()("Enter the number"))//original number
if (i && i>=0 ){
    let p = no_of_digits(i)
    console.log("number of digits in",i,"is",p)
    let sum = Armstrong(i,p)

    if(sum==i){
        console.log("Armstrong")
    }
    else{
        console.log("not Armstrong",sum,i)
    }



}

else{
    console.log("wrong input")
}