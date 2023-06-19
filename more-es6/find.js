const numbers = [12, 23, 34, 5, 45, 65, 76, 6, 78];

const fives = numbers.find(num => num % 5 === 0);
const fivesAll = numbers.filter(num => num % 5 === 0);
console.log(fivesAll)
console.log(fives)



const products = [
    {id: 1, name: 'laptop', price: 65000},
    {id: 1, name: 'mobile', price: 80000},
    {id: 1, name: 'watch', price: 30000},
    {id: 1, name: 'tablet', price: 23000},
];

const cheap = products.find(product => product.price < 40000);
console.log(cheap)

