//1. create object using object literals
const player = {};
player.name = 'small Nirob';
player.specialty = 'batsman';
player.bat = function(){
    console.log('swing your bat');
}
player.bat();
// console.log(player);


const student = {
    name: 'pandey',
    job: 'khay andey',
    ball: function(){
        console.log('throw the ball');
    },
    salary: 100000
}

//2. object constructor
const person = new Object();
console.log(person) 

//3. object create method
// const item = Object.create(null);
const atel = Object.create(student);
console.log(atel.name);

//4. class
class Person{
    name = 'abul';
    address = 'sadar ghat';
    constructor(age){
        this.age = age;
    }
}

const person1 = new Person(56);
console.log(person1)

//5. function
function Car(model, price){
    this.model = model;
    this.price = price;
}

const tesla = new Car('elon', 32);
console.log(tesla)