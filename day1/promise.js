// Promise (是一個物件)

// let obj = new Promise((resolve, reject) => {
//     resolve({ name: 'John', age: 18 });
//     reject(new Error('not allowed'))


// });

// obj.then((res) => {
//         console.log(res)
//     })
//    .catch((error) => {
//         console.log(error)
//     })




function getData(name){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve({name:name,age:Math.floor(Math.random()*20)+10,major:'CS'})
        }, 1500);
    })
  
}

function getMovies(age){

    if(age<12){
        return new Promise((resolve)=>{
            setTimeout(() => {
                resolve('cartoon')
            }, 1500);
        })
       
    } else if (age<18){
        return new Promise((resolve)=>{
            setTimeout(() => {
                resolve('teen movies')
            }, 1500);
        })
       
    } else {
        return new Promise((resolve)=>{
            setTimeout(() => {
                resolve('adult movies')
            }, 1500);
        })
      
    }

}


// getData('John').then((res)=>{
//     return getMovies(res.age)
    
//     .then((movie)=>{
//         console.log(movie)
//     })
// })

getData('John')
.then((res) => getMovies(res.age))
.then((movie) => {console.log(movie)})




