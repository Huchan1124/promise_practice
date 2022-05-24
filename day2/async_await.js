



async function showData(){
    try {
        let person = await getData('John',18,1000);
        console.log(person)
        let movieType = await getMovies(person.age,2000)
        console.log(movieType)
    }
    catch (error){
        console.log(error)

    }

}

showData()



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

