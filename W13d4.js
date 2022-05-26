class Vehicle{
    constructor(tires,size,type){
        this.tires = tires,
        this.size  = size,
        this.type = type
    }

    move(){
        console.log(`This vehicle is a ${this.type}`);
    }
    
}

let veh1 = new Vehicle(16,"Huge","Truck")
// veh1.move()

class Car extends Vehicle{
    constructor(model_name,tires,size,type){
        super(tires,size,type)
        this.model_name = model_name

    }

    move(){
        console.log(`${this.type} is being driven`);
    }
    
}

let car1 = new Car("Maruti",4,"Medium","Car")
console.log(car1.model_name);
console.log(car1.type);
car1.move()
// car1.drive()

