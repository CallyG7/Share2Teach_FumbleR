import sql from 'mssql';

class FAQDAO {
    constructor() {
        this.connectionString = "Server=tcp:share2teach-server.database.windows.net,1433;Initial Catalog=Share2Teach;Persist Security Info=False;User ID=admin-server;Password=share2teach#IT;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;";
    }

    async connect() {
        try {
            this.pool = await sql.connect(this.connectionString);
        } catch (error) {
            console.error('Failed to connect to the database:', error);
            throw error;
        }
    }

    async disconnect() {
        try {
            await this.pool.close();  // Updated to use this.pool.close()
        } catch (error) {
            console.error('Failed to close the database connection:', error);
        }
    }

    async getAllFAQs() {
        try {
            const result = await this.pool.request().query('SELECT * FROM FAQ');
            return result.recordset.map(row => new FAQ(row.id, row.question, row.answer));
        } catch (error) {
            console.error('Failed to retrieve FAQs:', error);
            throw error;
        }
    }

    async getFAQById(id) {
        try {
            const result = await this.pool.request()
                .input('id', sql.Int, id)
                .query('SELECT * FROM FAQ WHERE id = @id');
            if (result.recordset.length > 0) {
                const row = result.recordset[0];
                return new FAQ(row.id, row.question, row.answer);
            } else {
                return null;
            }
        } catch (error) {
            console.error('Failed to retrieve FAQ by ID:', error);
            throw error;
        }
    }

    async createFAQ(faq) {
        try {
            const result = await this.pool.request()
                .input('question', sql.NVarChar, faq.question)
                .input('answer', sql.NVarChar, faq.answer)
                .query('INSERT INTO FAQ (question, answer) OUTPUT INSERTED.id VALUES (@question, @answer)');
            faq.id = result.recordset[0].id;
            return faq;
        } catch (error) {
            console.error('Failed to create FAQ:', error);
            throw error;
        }
    }

    async updateFAQ(faq) {
        try {
            const result = await this.pool.request()
                .input('id', sql.Int, faq.id)
                .input('question', sql.NVarChar, faq.question)
                .input('answer', sql.NVarChar, faq.answer)
                .query('UPDATE FAQs SET question = @question, answer = @answer WHERE id = @id');
            return result.rowsAffected[0] > 0;
        } catch (error) {
            console.error('Failed to update FAQ:', error);
            throw error;
        }
    }

    async deleteFAQ(id) {
        try {
            const result = await this.pool.request()
                .input('id', sql.Int, id)
                .query('DELETE FROM FAQs WHERE id = @id');
            return result.rowsAffected[0] > 0;
        } catch (error) {
            console.error('Failed to delete FAQ:', error);
            throw error;
        }
    }
}

export default FAQDAO;
