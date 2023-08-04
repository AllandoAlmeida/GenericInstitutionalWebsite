/* ------------------------------- Coloque sua lógica aqui ------------------------------- */
function handleModal(){
    const button = document.querySelector('.button__modal--register')
    const buttonRegisterMain = document.querySelector('.button__register--main')
    const modalRegister = document.querySelector('.modal__register')

    button.addEventListener('click', ()=>{        
        modalRegister.showModal()
        closeModal()
    })

    buttonRegisterMain.addEventListener('click', ()=>{        
        modalRegister.showModal()
        closeModal()
    })
}

function closeModal(){
    const button = document.querySelector('.modal__register--close')
    const modalRegister = document.querySelector('.modal__register')

    button.addEventListener('click', ()=>{        
        modalRegister.close()
    })
}

handleModal()


function finalizeRegister (){
    const registerFinalize = document.querySelector('.signUp')
    registerFinalize.addEventListener('submit', () => {
        const registerInput = document.querySelector(".modal__container--input")
        if (registerInput.value == ''){
            return
        }else{
            let strInput = registerInput.value
            alert(`Parabéns ${strInput} !!! Sua inscriçao foi realizado com sucesso! em breve entraremos em contato`)
        }
    })
}

finalizeRegister()


 const presentation = document.querySelector(".main__content--component");
 const whoWeAre = document.querySelector("#whoWeAre")
    presentation.addEventListener('click', function(){
        whoWeAre.scrollIntoView({behavior:"smooth"})
});

