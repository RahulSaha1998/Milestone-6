const numbers = [12, 45, 54, 32, 98];
// for(const number of numbers){
//     console.log(number)
// }

const bottle = {
    color: 'yellow',
    price: 50,
    isCleaned: true,
    capacity: 1,
}

//first option to loop through an object
const keys = Object.keys(bottle);
// console.log(keys)

for(const key of keys){
    // console.log(key, bottle[key])
}

//for in loop
for(const key in bottle){
    const value = bottle[key];
    console.log(key, value)
}

//advanced
