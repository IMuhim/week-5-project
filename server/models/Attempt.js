const db = require('../db/connect');

class Attempt {
  constructor({ user_id, subject_id, score, subject_name }) {
    this.user_id = user_id;
    this.subject_id = subject_id;
    this.score = score;
    this.subject_name = subject_name;
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

  static async getAttemptsByUser(user_id) {
  const result = await db.query(
    `SELECT a.user_id, a.subject_id, a.score, s.subject_name AS subject_name
     FROM attempts a
     JOIN subjects s ON a.subject_id = s.subject_id
     WHERE a.user_id = $1`,
    [user_id]
  );

  console.log("DB result rows:", result.rows);
  return result.rows.map((row) => new Attempt(row));
}

}

module.exports = Attempt;
