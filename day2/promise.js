
let person;
getData('John',10,2000)
.then((res)=>{
    person = res;
    console.log(person)

    getMovies(person.age, 3000)
    .then((movieType)=> console.log(movieType))
    .catch((error)=> console.log(error))

})
.catch((error)=> console.log(error))




function getData(name, age, timeout) {


    if (name==='John'){
        return new Promise((resolve,reject)=> {
            setTimeout(() => {
                resolve({ name: name, age: age })
            }, timeout);
        })
    } else {
        return new Promise((resolve,reject)=> {
            setTimeout(() => {
                reject(new Error('not allowed'))
            }, timeout);
        })
        
    }

}




function getMovies(age, timeout) {

    if (age<200){
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                if (age < 12) {
                    resolve('cartoon')
                } else if (age < 18) {
                    resolve('teen movies')
                } else {
                    resolve('adult movies')
                }
            }, timeout);
        })
    } else {
        return new Promise((resolve,reject)=> {
            setTimeout(() => {
                reject(new Error('not allowed,too old'))
            }, timeout);
        })

    }

   
  
}


