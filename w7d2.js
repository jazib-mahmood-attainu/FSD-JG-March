// const student = {
//     name : ["Manish","Yesh"],
//     city : "Thane",
//     State : "Maharashtra",
//     age : 20,
//     bg : "O+ve",
//     obj : {
//         key1:"value1",
//         key2:"value2"
//     },
//     fun : function (){
//         console.log("methods");
//     }
// }

// a = Object.keys(student)
// console.log(a)
// for(let i = 0;i<a.length;i++){
//     console.log(a[i]);
// }

// console.log(student.State)
// // console.log(student["name"][0])
// // i = student.name[1]
// // console.log(i)
// // console.log(student["city"])
// // console.log(student.city)
// // console.log(student["State"])
// // console.log(student.State)
// // console.log(student.obj[0])

// // for (ele of Object.keys(student)){
// //     console.log(student["ele"])
// // }

// // const keyboard = {
// //         i : [4,5,6,7,8,9],
// //         f : ()=>{
// //             console.log("inside");
// //         }        
// // }


// // console.log(keyboard.i[3])

// // i = 10;
// // console.log(i);

// // keyboard.f()
// // f = function(){
// //     console.log("outside");
// // }
// // f()

// // keyboard["g"] = 15
// // console.log(keyboard)

// // arr = [8,5,6,"hello",9,8,3,9]
     
// // for (ele in keyboard){
// //     console.log(ele)
// // }

const student = {
    f_name : "Manish",
    l_name : "Jain" ,
    fullName :function (){console.log(this.f_name,this.l_name)}
}

student.fullName()


arr = [1,2,3,function (){console.log("hello")},{i:10}]
console.log(arr[4].i)
s = " "
for (let i in student){
    s+=student.i
}
console.log(s)

ar = [8,5,6,3,9,1]
max = Number.NEGATIVE_INFINITY
for(let i=0;i<ar.length;i++){
    if (ar[i]>max){//9>8
        max = ar[i]//8
    }

}
console.log(max)

function myfun(a,b){
    return a-b;
}

const p = [5,4,6,44,8]
p.sort(myfun)
console.log(p.length)
p.length = 3
console.log(p)
if (2 in p){
    console.log("helllo")
}
