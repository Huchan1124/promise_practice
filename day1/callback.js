
// const btn = document.querySelector('button');

// btn.addEventListener('click', function(){
  
//     setTimeout(printMsg, 1500,'John');
// })


// function printMsg(name){
//     console.log('Hello!'+ name);
// }

// function getData(name){
//     setTimeout(() => {
//         console.log({name:name,age:Math.floor(Math.random()*20)+10,major:'CS'})
//         return {name:name,age:Math.floor(Math.random()*20)+10,major:'CS'}
//     }, 1500);
// }

// console.log('start')

// let data = getData('John');

// console.log(data)


// console.log('end')



// 2.callback function
function getData(name,callback){
    setTimeout(() => {
        callback({name:name,age:Math.floor(Math.random()*20)+10,major:'CS'})
    }, 1500);
}

function getMovies(age,callback){

    if(age<12){
        setTimeout(() => {
            callback('cartoon')
        }, 1500);
    } else if (age<18){
        setTimeout(() => {
            callback('teen movies')
        }, 1500);
    } else {
        setTimeout(() => {
            callback('adult movies')
        }, 1500);
    }

}



 getData('John',(obj)=>{
    //  取得 getData 的結果
    console.log(obj)
    
    // 根據 getData 裡的 age 判斷 回傳結果 
    getMovies(obj.age,(str)=>{
         //  取得 getMovies的結果
        console.log(str)
    })
});












// document.querySelector('button').addEventListener("click", function() {
//     setTimeout(myFunction, 3000);
//   });
  
//   function myFunction() {
//     alert('Hello');
//   }
