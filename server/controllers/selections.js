const path = require("path");

// Serve the subject selection page
async function showSelectionPage(req, res) {
  if (!req.session.user) {
    return res.redirect("/login.html"); // redirect if not logged in
  }

  const filePath = path.join(__dirname, "../../client/selection.html");
  console.log("Attempting to serve file:", filePath); // Debug log
  res.sendFile(filePath);
}

// Logout user
async function logout(req, res) {
  req.session.destroy((err) => {
    if (err) return res.send("Error logging out");
    res.redirect("/login.html");
  });
}

// Export functions individually
module.exports = {
  showSelectionPage,
  logout,
};
