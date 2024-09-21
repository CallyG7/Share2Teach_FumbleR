import sql from 'mssql';

// Database configuration
const config = {
    user: 'admin-server',
    password: 'share2teach#IT',
    server: 'share2teach-server.database.windows.net',
    database: 'Share2Teach',
    options: {
        encrypt: true, // For Azure SQL
        trustServerCertificate: true // For local development
    }
};

export async function testConnection() {
    try {
        // Connect to the database
        await sql.connect(config);
        console.log('Database connection successful!');
    } catch (err) {
        console.error('Database connection failed:', err);
    } 
}

/*import sql from 'mssql';

// Database configuration
const config = {
    user: 'admin-server',
    password: 'share2teach#IT',
    server: 'share2teach-server.database.windows.net',
    database: 'Share2Teach',
    options: {
        encrypt: true, // For Azure SQL
        trustServerCertificate: true // For local development
    }
};

export async function testConnection() {    try {
        await sql.connect(config);
        console.log('Database connection successful!');
    } catch (err) {
        console.error('Database connection failed:', err);
    }
}*/
export { sql, config };

