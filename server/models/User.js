const bcrypt = require('bcrypt');
const db = require('../db/connect')

class User {
  constructor({ user_id, name, email, password}) {
    this.user_id = user_id;
    this.name = name;
    this.email = email;
    this.password = password;
  }

  static async register({ email, password, name }) {
    // check if email already exists
    const existing = await db.query('SELECT * FROM users WHERE email = $1;', [email]);
    if (existing.rows.length > 0) {
      throw new Error("Email already registered.");
    }

    // insert into db
    const result = await db.query(
      `INSERT INTO users (name, email, password)
       VALUES ($1, $2, $3) RETURNING user_id, name, email;`,
      [name, email, password]
    );

    console.log(result.rows[0])

    return new User(result.rows[0]); // hashed password not returned
  }
  static async login({email, password}){
    const result = await db.query('SELECT * FROM users WHERE email = $1;', [email]);
    if (result.rows.length === 0) {
      throw new Error("Invalid email or password.");
    }

    const user = result.rows[0];

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      throw new Error("Invalid email or password.");
    }

    return new User({ id: user.id, name: user.name, email: user.email });
  }
}

module.exports = User;
