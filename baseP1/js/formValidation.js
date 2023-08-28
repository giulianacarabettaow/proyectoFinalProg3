function formValidation(form, input){
    input.addEventListener('focus',function(){
        console.log('Me clickearon')
    })

    input.addEventListener('blur', function(){
        console.log('me dejaron de clickear, capaz me escribieron algo')
    })

    input.addEventListener('input',function(){
        console.log(this.value)
    })

    form.addEventListener('submit', function(e){
        e.preventDefault() /*deja de tener funcionamiento habitual el form (hacer submits de la informacion)estamos evitando el submit del form*/
        if(input.value.length<3){
            alert('Es muy corta tu busqueda')

        }else{
            this.submit()
        }
    })  
}

window.addEventListener('load', function(){
    let input=document.querySelector('.placeholder')
    let form=document.querySelector('.form')

    formValidation(form,input)
})