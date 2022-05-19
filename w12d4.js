// expression = ")("
// function Valid(s){
//     let op = 0,cp = 0;
//     for(let i = 0;i<s.length;i++){ //i = 0 to 5
//         if(s[i]=="("){
//             op += 1;//2
//         }
//         else
//             cp += 1;//3
        
//         if(cp>op){ //3>2
//             return false
//         }
//     }
//     return op==cp//true
// }
// res = Valid(expression) //false
// if(res){
//     console.log("Valid");
// }
// else {
//     console.log("Invalid");
// }

expr = ")("
function valid(s){
    let stack = [];
    for(let i = 0;i<s.length;i++){
        if(s[i]=="("){
            stack.push(s[i])
        }
        else
        {
            if(stack.length==0)
                return false
            stack.pop()
        }
    }
    if(stack.length==0){
        return true
    }
return false
}

res = valid(expr)
if(res){
    console.log("Valid");
}
else{
    console.log("Invalid");
}