// // const a =1;
// // {
// //     const a = 5;
// // }
// // {
// //     const a = 10;
// // }
// // console.log(a);

// // function abc(){
// //     var x = "pen";
// //     function def(){    //function <function_name>
// //         console.log(x);
// //     }
// //     return def
// // }
// // var res = abc()
// // res()

// function makeAdder(x){
//     function inside(y){
//         return x+y      //x  = 5 and y = 10
//     }
//     return inside
// }

// var res = makeAdder(5)(10)(20)//inside
// console.log(res);

// var res = makeAdder(5)//inside
// var r3 = res(10)


// // console.log(r2);


// i = prompt("hello")

a = [1,2,3,4,5]
b = []
b = a
// for(let i =0; i<a.length;i++){
//     b[i]=a[i]
// }
b[0]= 99
console.log(a);
console.log(b);

function fun(a){
    console.log(a);
}(1)

// function immediateA(a) {
//     return (function immediateB(b) {
//       console.log(a); // What is logged?
//     })(1);
//   }(0);
  
// console.log(this)

obj = {
    a:2,
    b: function(){
        console.log(this.a);
    }
}

z = obj.b
z()

f = function () {
    this.b();
}

z = f.bind(obj)
z()



var obj = {
    num:2
}

var obj2  = {
    num:5
}

var addtothis = function (a,b,c) {
    return this.num + a+b+c
}


console.log(addtothis.call(obj,5,1,2));



var arr = [5,1,2]

console.log(addtothis.apply(obj,arr));

var bound = addtothis.bind(obj)

console.log(bound(5,1,2));




function makeadder(x){

    return function(y) {
    
    return x+y
    
    }
    
    }
    
    
    
console.log( makeadder(5)(2))