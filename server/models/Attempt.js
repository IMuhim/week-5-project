const db = require('../db/connect');

class Attempt {
  constructor({ user_id, subject_id, score }) {
    this.user_id = user_id;
    this.subject_id = subject_id;
    this.score = score;
  }

  static async createAttempt({ user_id, subject_id, score }) {
    const result = await db.query(
      `INSERT INTO attempts (user_id, subject_id, score)
       VALUES ($1, $2, $3)
       RETURNING *;`,
      [user_id, subject_id, score]
    );

    return new Attempt(result.rows[0]);
  }
}

module.exports = Attempt;
