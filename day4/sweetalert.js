
document.querySelector('.hex').addEventListener('click', () => {

    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="">Why do I have this issue?</a>'
    }).then((res) => {
        console.log(res)

        if(res.isConfirmed){
            Swal.fire({
                icon: 'success',
                title: 'YES',
                text: 'SUCCESS!',
                footer: '<a href="">Why do I have this issue?</a>'
            })
        }


        
    })
})
