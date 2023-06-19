// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json()) //close to JSON.parse
//       .then(json => console.log(json))


function loadData() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    fetch(url)
        .then(response => response.json()) //close to JSON.parse
        .then(json => console.log(json))

}