
function getData(name) {
    if (name === 'John') {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ name: name, age: Math.floor(Math.random() * 20) + 10, major: 'CS' })
            }, 1500);
        })
    } else {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(new Error('not allowed'))
            }, 1500);
        })
    }


}

function getMovies(age) {

    if (age < 12) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('cartoon')
            }, 1500);
        })

    } else if (age < 18) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('teen movies')
            }, 1500);
        })

    } else if (age > 18 && age <= 500) {

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('adult movies')
            }, 1500);
        })
    
    }
    else {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(new Error('not allowed.too old'))
            }, 1500);
        })

    }

}


async function showData() {
    try {
        const res = await getData('John');
        const movie = await getMovies(res.age);
        console.log(movie)
    } catch (error) {
        console.log(error)
    }

}

showData()






