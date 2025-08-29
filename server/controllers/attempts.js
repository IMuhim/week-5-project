const Attempt = require("../models/Attempt");

const addAttempt = async (req, res) => {
  try {
    const { user_id, subject_id, score } = req.body;
    const attempt = await Attempt.createAttempt({ user_id, subject_id, score });
    res.status(201).json({ "message": 'sucessfully added attempt',"success": true, attempt });
  } catch (err) {
    console.error("Error creating attempt:", err);
    res.status(500).json({ success: false, error: err.message });
  }
};

const getAttemptsByUser = async (req, res) => {
  try {
    const { user_id } = req.params;
    const attempts = await Attempt.getAttemptsByUser(user_id);
    console.log("Fetching attempts for user:", user_id);
    console.log(attempts)
    res.json({ success: true, attempts });
  } catch (err) {
    console.error("Error fetching attempts:", err);
    res.status(500).json({ success: false, error: err.message });
  }
};

module.exports = {
  addAttempt,
  getAttemptsByUser,
};
