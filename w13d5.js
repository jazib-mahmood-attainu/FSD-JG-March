// let f1 = require("prompt-sync")
// let f2 = f1()
// let x = f2("Enter value of x ")
// let x = require("prompt-sync")()("Enter value of x ")
// console.log(x);
// class Queue{
//     constructor(){
//         this.items = [],
//         this.front = 0,
//         this.rear = 0
//     }

//     enqueue(val){
//         this.items[this.rear] = val,
//         this.rear++
//     }

//     dequeue(){
//         if(this.isEmpty()){
//             console.log("Cannot dequeue, queue empty");
//             return
//         }
//         this.front++
//     }

//     isEmpty(){
//         return this.rear-this.front == 0
//     }

//     printQueue(){
//         let str = ""
//         for(let i = this.front;i<this.rear;i++){
//             str+= this.items[i]+" , "
//         }
//         console.log("["+str+"]");
//     }

// }

class Queue{
    constructor(){
        this.items = []
    }

    enqueue(...val){
        this.items.push(...val)
    }

    dequeue(){
        if(this.isEmpty()){
            console.log("Queue is Empty");
            return
        }
        return this.items.shift()
    }

    isEmpty(){
        return this.items.length==0
    }

    printQueue(){
        console.log(this.items);
    }
}

let q1 = new Queue()
q1.enqueue(1,2)
// 

q1.printQueue()

n = 10

for(let i = 1;i<=n-1; i++){
    e = q1.dequeue()
    // console.log(e);
    fe = e + "1"
    q1.enqueue(Number(fe))
    se = e + "2"
    q1.enqueue(Number(se))

}

console.log(q1.dequeue())

str = "ali"*3
console.log(str);