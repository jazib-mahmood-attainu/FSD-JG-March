// // // // obj1 = {
// // // //     a:2,
   
// // // // }

// // // // obj2 = {
// // // //     a:3,
   

// // // // }

// // // // const m = function(p1,p2,p3){
// // // //     console.log(this.a+p1+p2+p3);
// // // // }

// // // // f = m.bind(obj2)
// // // // m.call(obj2,2,3,4)
// // // // m.apply(obj2,[2,3,4])
// // // // f(2,3,4)

// // // // function sum(a){
// // // //     return function (b){
// // // //         return function (c){
// // // //             return function(){
// // // //                return a+b+c
// // // //             }
// // // //         }
// // // //     }
// // // // }

// // // // console.log(sum(2)(3)(4)())

// // // // console.log(res);


// function sum(a) 
// { function sum2(b) 
//     { function sum3(c)
//         {
//              return a+b+c //1+2+undefined - nan
//         }

//         return sum3; 
//     }
//     return sum2

// } 

// // // console.log(sum(1)(2)()); 

// // i = Date()//GMT+currentlocation
// // console.log(i);
// // i = new Date();//GMT
// // console.log(i);

// // // i = Date(year,month,date,hours,minutes,seconds,milliseconds)
// i = new Date(2020,0,24,10,26,54,15)//-5:30
// console.log(i);

// // i = new Date(1000*60*60*24*-1);
// // // console.log(i);
// // console.log(i.toLocaleTimeString())//+5:30
// // console.log(i.toISOString());
// // console.log(Date.now());
// // j = new Date(1650474561224)
// // console.log(j)


// function myfun(){
//     console.log("Hello")
// }
// var a = setInterval(myfun,500)
// clearInterval(a)

obj1 = {
    a:2
}

obj2 = {
    a:3
}

f = function (){
    console.log(this.a)
}

func = f.bind(obj2)
func()

a = 2
b = 3
d = 4
e = 5
s = `hello
 ${a}`
console.log(s);
c = `hello ${a>b?d:d>e?5:6}`
console.log(c);

let person = 'Mike';
let age = 28;

function myTag(strings, personExp, ageExp) {
  let str0 = strings[0]; // "That "
  let str1 = strings[1]; // " is a "
  let str2 = strings[2]; // "."
    console.log(strings,personExp,ageExp);
  let ageStr;
  if (ageExp > 99){
    ageStr = 'centenarian';
  } else {
    ageStr = 'youngster';
  }

  // We can even return a string built using a template literal
  return `${str0}${personExp}${str1}${ageStr}${str2}`;
}

let output = myTag`That ${ person } is a ${ age }.`;

console.log(output);

function tag(strings) {
    console.log(strings.raw);
  }
  
  tag`string text line 1 \n string text line 2`;

  let str = String.raw`Hi\n${2+3}!`;
// "Hi\\n5!"

str.length;
// 6
console.log(str);
Array.from(str).join(',');
// "H,i,\\,n,5,!"