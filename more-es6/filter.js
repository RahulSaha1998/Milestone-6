const numbers = [12, 23, 34, 5, 45, 65, 76, 6, 78];
const bigNums = numbers.filter(number => number > 20);
const smallNums = numbers.filter(number => number < 10);
const even = numbers.filter(num => num % 2 ===0);
// console.log(even)
// console.log(smallNums)
// console.log(bigNums)

const products = [
    {id: 1, name: 'laptop', price: 45000},
    {id: 1, name: 'mobile', price: 80000},
    {id: 1, name: 'watch', price: 35000},
    {id: 1, name: 'tablet', price: 23000},
];

// const expensive = products.filter(product => product.price > 1000)
// const expensive = products.filter(product => product.price > 100)
const expensive = products.filter(product => product.price < 100)
console.log(expensive)