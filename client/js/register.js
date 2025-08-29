const registerForm = document.querySelector("#registerForm");

function showPopup(message, isError = false) {
  const popup = document.getElementById('popup');
  popup.textContent = message;

  popup.className = 'popup ' + (isError ? 'error' : 'success') + ' show';

  setTimeout(() => {
    popup.className = 'popup';
  }, 3000);
}


registerForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const name = event.target[0].value;
  const email = event.target[1].value;
  const password = event.target[2].value;
  const retypedPassword = event.target[3].value;
  
  
  if (password !== retypedPassword) {
    showPopup("Passwords don't match", true);
    return; // stop submission
  }

  const data = {
    name: name,
    email: email,
    password: password,
  };

  try {
    const response = await fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.log(errorData);
      showPopup(errorData.error || "Registration failed", true);
      return;
    }

    const result = await response.json();
    console.log("Response from backend:", result);
    showPopup("Registration successful!");

    setTimeout(() => {
      window.location.href = "login.html"; // replace with your login page path
    }, 1000);
  } catch (error) {
    console.log("Fetch error:", error);
    showPopup("Network error. Please try again.", true);
  }
});
