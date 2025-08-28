document.addEventListener("DOMContentLoaded", async () => {
  const userId = localStorage.getItem("userId");
  if (!userId) {
    alert("You must be logged in to view history");
    return;
  }

  try {
    const response = await fetch(`http://localhost:3000/attempts/user/${userId}`);
    if (!response.ok) throw new Error("Failed to fetch attempts");

    const data = await response.json();
    const attempts = data.attempts;
    console.log(attempts)
    const tableBody = document.getElementById("attemptsTableBody");

    if (!attempts || attempts.length === 0) {
      tableBody.innerHTML = `<tr><td colspan="3">No attempts yet</td></tr>`;
      return;
    }

    attempts.forEach((attempt) => {
        const percentage = ((attempt.score / 10) * 100) + '%';
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${attempt.subject_name}</td>
        <td>${attempt.score}</td>
        <td>${percentage}</td>
      `;
      tableBody.appendChild(row);
    });
  } catch (err) {
    console.error("Error loading attempts:", err);
  }
});
