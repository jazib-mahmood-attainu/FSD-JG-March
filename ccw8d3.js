function fun(a){
    return function(b){
        return function (c){
            return (a+b)/c
        }
    }
}

// f1 = fun(1)
// f2 = f1(2)
// s = f2(3)
s = fun(1)(2)(3)
console.log(s);