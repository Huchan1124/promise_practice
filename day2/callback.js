
function getData(name, age, timeout, callback) {
    setTimeout(() => {
        callback({ name: name, age: age })
    }, timeout);
}




function getMovies(age, timeout, callback) {
    setTimeout(() => {

        if (age < 12) {
            callback('cartoon')
        } else if (age < 18) {
            callback('teen movies')
        } else {
            callback('adult movies')
        }
    }, timeout);
}


let person = {};

getData('John', 18, 2000, (obj) => {
    person = obj;
    getMovies(person.age, 2000, (str) => {
        console.log(str)
    })
})




