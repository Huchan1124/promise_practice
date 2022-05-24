function getData(name, age, timeout, callback) {
    setTimeout(() => {

        callback({ name: name, age: age })

    }, timeout);
}

function getMovies(age, timeout, callback) {

    if (age < 12) {
        setTimeout(() => {
            callback('cartoon')
        }, timeout);
    } else if (age < 18) {
        setTimeout(() => {
            callback('teens movies')
        }, timeout)
    } else {
        setTimeout(() => {
            callback('adult movies')
        }, timeout)
    }

}

getData('John', 23, 1500, (res) => {
    console.log(res)

    getMovies(res.age, 1500, (movie) => {
        console.log(movie)
    })

})

