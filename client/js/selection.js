document.addEventListener("DOMContentLoaded", () => {
  const name = localStorage.getItem("name");
  const username = document.getElementById("welcome-name");
console.log(name)
  if (name) {
    username.textContent = `Hi, ${name}`;
  } else {
    username.textContent = "Guest";
  }
});
