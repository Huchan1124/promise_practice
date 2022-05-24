function checkScore(name) {
    return new Promise((resolve, reject) => {
        const score = Math.round(Math.random() * 100);
        console.log('批改作業中')
        console.log('分數為' + score)

            setTimeout(() => {
                resolve({
                    name,
                    score
                })
            }, 2000);

        

        // if (score >= 20) {
        //     setTimeout(() => {
        //         resolve({
        //             name,
        //             score
        //         })
        //     }, 2000);

        // } else  {
        //     setTimeout(() => {
        //         reject(name + '已達退學門檻')
        //     }, 2000);

        // }

    })
}


function checkReward(data) {
    return new Promise((resolve, reject) => {
        console.log('檢查獎品中')
        if (data.score >= 90) {
            setTimeout(() => {
                resolve(`${data.name}獲得電影票`)
            }, 2000);
        
        } else if (data.score  >= 60 && data.score  < 90) {
            setTimeout(() => {
                resolve(`${data.name}獲得獎卡`)
            }, 2000);
          
        } else {
            setTimeout(() => {
                reject(`${data.name}未達獲獎門檻，打手心十下`)
            }, 2000);
        }
    })

}

Promise.all([ checkScore('小明'), checkScore('花花'), checkScore('華華')])
.then((res)=>{
    console.log(res)
})
.catch((error)=>{
    console.log(error)
})

// checkScore('小明')
//     .then((data) => checkReward(data))
//     .then((reward) => {
//         console.log(reward)
//     })
//     .catch((error) => {
//         console.log(error)
//     })


// async  function rewardSystem(){
//         try {
//             const data = await checkScore('小明');
//             const reward = await checkReward(data);
//             console.log(reward)
//         }
//         catch(error) {
//             console.log(error)

//         }
      
//     }

//     rewardSystem()