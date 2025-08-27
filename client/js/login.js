const loginForm = document.querySelector('#loginForm')

loginForm.addEventListener('submit', async (event)=>{
    event.preventDefault()
    const email  = event.target[0].value
    const password = event.target[1].value
    console.log(email)
    console.log(password)

    const data = {
        email:email,
        password:password
    }

    try {
        const response = await fetch('https://localhost:3000/login',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:json.stringify(data)
        });

        const result = await response.json();
        console.log(result)
    } catch (error) {
        console.log(error)
    }
    
})