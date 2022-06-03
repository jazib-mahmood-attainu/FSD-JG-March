// function fun(x,y,z){
//     return x+y+z
// }

function fun(x){
    return function(y){
        return function(z){
            return x+y+z
        }
    }
}

res = fun(3)(2)(3)
console.log(res);