const db = require('../db/db');
async function createTable() {
    try {
        // Define the raw SQL query to create the table
        const createTableQuery = `
            CREATE TABLE IF NOT EXISTS Barang (
                id INTEGER NOT NULL AUTO_INCREMENT,
                kode_barang VARCHAR(255) NOT NULL UNIQUE,
                name_barang VARCHAR(255) NOT NULL,
                price VARCHAR(255) NOT NULL,
                PRIMARY KEY(id)
            );
        `;

        // Execute the raw SQL query to create the table
        await db.query(createTableQuery);
        console.log('Table created successfully.');
    } catch (error) {
        console.error('Error creating table:', error);
    }
}

async function fetchStats() {
    try {
        // Define the raw SQL query to fetch statistics
        const statsQuery = `
            SELECT 
                COUNT(*) AS total_count,
                AVG(price) AS average_price,
                MIN(price) AS min_price,
                MAX(price) AS max_price
            FROM Barang
        `;

        // Execute the raw SQL query to fetch statistics
        const [rows] = await db.query(statsQuery);
        console.log('Product Stats:', rows[0]);
    } catch (error) {
        console.error('Error fetching product stats:', error);
    }
}

// Export the functions
module.exports = { createTable, fetchStats };
