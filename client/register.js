const registerForm = document.querySelector('#registerForm')

registerForm.addEventListener('submit', async (event)=>{
    event.preventDefault();
    
    const name = event.target[0].value
    const email = event.target[1].value
    const password = event.target[2].value

    const data = {
        name:name,
        email:email,
        password:password
    }

    try {
    const response = await fetch('http://localhost:3000/register', {
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

} catch (error) {
    console.log('Fetch error:', error);
}
})