const loginForm = document.querySelector('#loginForm')


function showPopup(message, isError = false) {
  const popup = document.getElementById('popup');
  popup.textContent = message;

  popup.className = 'popup ' + (isError ? 'error' : 'success') + ' show';

  setTimeout(() => {
    popup.className = 'popup';
  }, 3000);
}



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
        const errorData = await response.json();
            showPopup(errorData.error || 'Login failed', true);
            return;
    }

    const result = await response.json();
    console.log('Response from backend:', result);
    localStorage.setItem("userId", result.user.user_id)
    showPopup("Login successful!");
    
    setTimeout(() => {
      window.location.href = '/selection' // replace with your login page path
    }, 1000);

} catch (error) {
    console.log('Fetch error:', error);
    showPopup("Network error. Please try again.", true);
}

    
})
