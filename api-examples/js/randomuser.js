const loadUser = () => {
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => displayUser(data));
}

const displayUser = user => {
    const genderTag = document.getElementById('gender');
    genderTag.innerHTML = user.results[0].gender;

    const name = document.getElementById('name');
    name.innerHTML = user.results[0].name.title +' '+ user.results[0].name.first + ' ' + user.results[0].name.first;

    const locationTag = document.getElementById('location');
    locationTag.innerHTML = user.results[0].location.city;

    const imgTag = document.getElementById('img');
    imgTag.innerHTML = user.results[0].picture.medium;



    console.log(user.results[0].picture.medium)
}

loadUser();