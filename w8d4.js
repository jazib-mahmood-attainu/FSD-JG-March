
// function myFunc(){
//     console.log("Hello \n world");//newline
// }

// var myVar2 = setInterval(myFunc, 100);


// let age = 29
let n = "Jazib"
// console.log(n,"is",age,"years old");
// s = `${n} is ${age} 
//     years old`//template literal/string
// console.log(s);

// let age = 29
// if (age>18){
//     console.log(n,"is an adult")
// }
// else{
//     console.log(n,"is underage")
// }

// s = `${n} is ${require("prompt-sync")()("enter value for age")>18?"an adult": "underage"}` // Jazib is an adult
// console.log(s);
// console.log(`hello`);


// function myFunc(strings, p2, p3,p4){ //-> strings = ['asdfsdfsdf sdfsd dg ','.']
    
//     return (`${strings[0]}${p2}${strings[1]}${p3}${strings[2]} ${p4} `)
// }
// temp = 29
// city = "Hyderabad"
// coffee = 54
// res = myFunc`Temperature is ${temp} degree, in ${city}.${coffee}`// myFunc()


// console.log(res);

// let a = 5;
// var b = 7;
// [a, b] = [b ,a];console.log(a,b);
// a = 8[1,2,3];console.log(a);

obj = {
    a:2,
    b:3,
    m: function (){
        console.log(this.a);
        function sum(){
                console.log(this.a);
            
        } sum();
    }
}


f = obj.m()
// f2 = f()
