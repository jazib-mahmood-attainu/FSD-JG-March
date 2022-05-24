// class Vehicle{
//     constructor(type,tires,engine_cc){ //it is used to define properties
//         this.type = type,
//         this.tires = tires,
//         this.engine_cc = engine_cc
//     }

//     move(){  //method1
//         console.log(`${this.type} is moving`);//template literals
//     }

//     Hit(){  //method2
//         console.log(`this ${this.type} is being driven by Salman bhai`);
//     }
// }


// let car = new Vehicle("Car",4,1200)
// let motor_cycle = new Vehicle("Motor bike",2,220)


// console.log(car.type);
// car.move()
// car.Hit()

// console.log(motor_cycle.type);
// motor_cycle.move()
// motor_cycle.Hit()

class Stack{
    constructor(){
        this.items = []
    }

    push(...val){
        this.items.push(...val)
    }

    isEmpty(){
        return this.items.length==0
    }

    pop(){
        if(this.isEmpty()){
            console.log("Cannot pop, stack is empty");
            return
        }
        return this.items.pop()
    }

    peek(){
        if(this.isEmpty()){
            console.log("Cannot peek, stack is empty");
            return
        }
        return this.items[this.items.length-1]
    }
    sumtop2(){
        this.push(this.pop()+this.pop())
    }
}

let stack = new Stack()
stack.push(5,10,15)

// console.log(stack.items);
// console.log(stack.peek());
// stack.pop()

console.log(stack.items);
// stack.pop()
stack.sumtop2()
console.log(stack.items);



stack.sumtop2()