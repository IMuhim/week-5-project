const loginForm = document.querySelector('#loginForm')

loginForm.addEventListener('submit',(event)=>{
    event.preventDefault()
    
    const email  = event.target[0].value
    const password = event.target[1].value
    console.log(email)
    console.log(password)
})