class Student{
    constructor(name,roll){
        this.name = name
        this.roll = roll

    }

    setAge(age){
        this.age = age
    }
}

stud1 = new Student("jazib",1)
// // stud = new Array(3)
// // for(i = 0;i<3;i++){
// //     n = require("prompt-sync")()("Enter name")
// //     r = require("prompt-sync")()("Enter roll number")
// //     stud[i] = new Student(n,r)
// // }
// // console.log(stud);
// stud1.setAge(21)
// console.log(stud1.age);

class Temperature{
    convertFahrenheit(celcius){
        console.log(((celcius*9)/5)+32);
    }

}
obj = new Temperature()
obj.convertFahrenheit(0)
console.log(stud1);