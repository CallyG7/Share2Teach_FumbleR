import { json } from '@sveltejs/kit';
import bcrypt from 'bcrypt';
import { sql, config } from '../../lib/DAOClasses/DatabaseConnection';

/**
 * @param {{ request: { json: () => Promise<{ fName: string; lName: string; email: string; password: string; }> } }} param0
 */

export async function POST({ request }) {
  const { fName, lName, email, password } = await request.json();

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Connect to the database
    const pool = await sql.connect(config);

    // SQL query to insert the user
    const query = `
      INSERT INTO users (FName, LName, Email, Password)
      VALUES (@FName, @LName, @Email, @Password)
    `;

    // Execute the query
    await pool.request()
      .input('FName', sql.NVarChar, fName)
      .input('LName', sql.NVarChar, lName)
      .input('Email', sql.NVarChar, email)
      .input('Password', sql.NVarChar, hashedPassword)
      .query(query);

    return json({ message: 'Account created successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error creating account:', error);
    return json({ error: 'Error creating account' }, { status: 500 });
  }
}

