//1. var let const
//break up with var
const numbers = [12, 32, 43, 56, 67];
let salary = 450;
salary = 500;

//2. default parameters

function calculateSalary(salary, tax=0.25, bonus = 0){
    const remaining = salary - salary*tax;
    const total = remaining * bonus;
    return total;
}

//3.template string
const elementHTML = `
<div>
    <h3>Name: </h3>
    <p>Address: </p>
    <p>Salary: ${calculateSalary(1000, 0, 0)}</p>
    <p>Others: ${numbers[2]}</p>
</div>

`

//4 Arrow function
const doubleIt = x => x*2;
const calculateSalary2 = (salary, tax, bonus) => salary - salary * tax + bonus;

//5. Spread out
const ages =[11, 12, 23, 34, 34, 45];
const newAges = [...ages, 67, 87];

//destructuring
const {x,y, ...c} = {x:12, y:32, z:45, name:'rahul'};
const [a , b] = [12, 23, 34, 56, 21];