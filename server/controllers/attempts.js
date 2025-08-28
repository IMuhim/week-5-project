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

module.exports = {
  addAttempt,
};
