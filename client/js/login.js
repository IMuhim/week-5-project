const loginForm = document.querySelector('#loginForm')

loginForm.addEventListener('submit', async (event)=>{
    event.preventDefault()
    const email  = event.target[0].value
    const password = event.target[1].value
    
    const data = {
        email:email,
        password:password
    }
    try {
    const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });


    if (!response.ok) {
        console.log(`Server error: ${response.status}`);
    }

    const result = await response.json();
    console.log('Response from backend:', result);
    localStorage.setItem("userId", result.user_id)

} catch (error) {
    console.log('Fetch error:', error);
}

    
})
