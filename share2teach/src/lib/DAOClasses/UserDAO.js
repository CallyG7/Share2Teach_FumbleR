const mysql = require('mysql2/promise');
//import User from '../Classes/User';
const User = require('../Classes/User'); // User being in the same directory

class UserDAO {
    constructor(connection) {
        this.connection = connection;
    }

    async addUser(user) {
        const query = `
            INSERT INTO USER (FName, LName, Email, Password, Role, Gender, Created_at, Updated_at)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `;
        try {
            await this.connection.execute(query, [
                user.fName, user.lName, user.email, user.password, user.role, user.gender, user.createdAt, user.updatedAt
            ]);
        } catch (error) {
            console.error('Error adding user:', error);
        }
    }

    async getUserById(userID) {
        const query = 'SELECT * FROM USER WHERE UserID = ?';
        try {
            const [rows] = await this.connection.execute(query, [userID]);
            if (rows.length > 0) {
                const row = rows[0];
                return new User(row.UserID, row.FName, row.LName, row.Email, row.Password, row.Role, row.Gender, row.Created_at, row.Updated_at);
            }
            return null;
        } catch (error) {
            console.error('Error fetching user by ID:', error);
        }
    }

    async getAllUsers() {
        const query = 'SELECT * FROM USER';
        try {
            const [rows] = await this.connection.execute(query);
            return rows.map(row => new User(row.UserID, row.FName, row.LName, row.Email, row.Password, row.Role, row.Gender, row.Created_at, row.Updated_at));
        } catch (error) {
            console.error('Error fetching all users:', error);
        }
    }

    async updateUser(user) {
        const query = `
            UPDATE USER SET FName = ?, LName = ?, Email = ?, Password = ?, Role = ?, Gender = ?, Updated_at = ?
            WHERE UserID = ?
        `;
        try {
            await this.connection.execute(query, [
                user.fName, user.lName, user.email, user.password, user.role, user.gender, user.updatedAt, user.userID
            ]);
        } catch (error) {
            console.error('Error updating user:', error);
        }
    }

    async deleteUser(userID) {
        const query = 'DELETE FROM USER WHERE UserID = ?';
        try {
            await this.connection.execute(query, [userID]);
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    }
}

module.exports = UserDAO;

