const users = [
    {id:1, name:'bro', job:'yo'}
]

// console.log(users[0].name);

const data = {
    count: 500,
    data: [
        {id:1, name:'ass', job:'tun tun'},
        {id:2, name:'bass', job:'tum tum'},
    ]
}
const firstJob = data.data[0].job;
// console.log(firstJob)

const user = {
    id: 5001,
    name: 'Thomas alba edison',
    address: {
        street: {
            first: '35/A kochukhet lane',
            second: 'third floor',
            third: 'right side'
        },
        postOffice: 'cantonment',
        city: 'Dhaka'
    }
} 

const userFloor = user.address?.stret?.second;
console.log(userFloor);