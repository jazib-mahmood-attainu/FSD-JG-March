// const student = {
//     fname: "Sameer",                        //property
//     lname: "Khan",                          //property
//     fullName: function () {                 //method
//         console.log(this.fname,this.lname);
//     }
// }

// console.log(student.fname)
// student.fullName()

// const student2 = {
//     fname:"Ajay",
//     lname:"Rathi",
//     xyz:student.fullName,
// }

// const student3 = {
//     fname:"Akash",
//     lname:"Malik",
//     fullName:student.fullName,
// }


// student2.xyz()
// a = 5
// const obj = {
//     a:2,
//     m: function(){
//         console.log(this.a);
//     }
// }

// obj.m()
// z = obj.m
// z()
a = 5
console.log(this);

function fun(){
    console.log(this);
    console.log(this.a,"***********");
}
fun()

// const obj1 = {
//     fname:"Sameer",
//     lname:"Khan"
// }

// const obj2 = {
//     fname:"Sitanshu",
//     lname:"xyz"
// }

// const f = function fun() {
//     console.log(this.fname,this.lname);
    
// }


// f.call(obj1)
// const fun = f.bind(obj1)
// const fun2 = f.bind(obj2)
// fun()
// fun2()

// function createBase(x){
//     return function(y){
//         return x+y
//     }
// }

// addsix = createBase(6)
// i10 = addsix(10)
// i11 = addsix(20)
// console.log(i10);
// console.log(i11);