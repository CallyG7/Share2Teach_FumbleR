import { testConnection } from './DatabaseConnection.js';

try {
    const pool = await testConnection();
} catch (err) {
    console.error('Failed to get activity logs:', err);
    throw err;
}