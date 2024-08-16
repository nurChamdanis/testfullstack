const db = require('../db/db');
async function createCust() {
    try {
        // Define the raw SQL query to create the table
        const createTableQuery = `
            CREATE TABLE IF NOT EXISTS Cust (
                id INTEGER NOT NULL AUTO_INCREMENT,
                kode_cust VARCHAR(255) NOT NULL UNIQUE,
                name_cust VARCHAR(255) NOT NULL, 
                PRIMARY KEY (id)
            );
        `;

        // Execute the raw SQL query to create the table
        await db.query(createTableQuery);
        console.log('Table created successfully.');
    } catch (error) {
        console.error('Error creating table:', error);
    }
}

async function getCust() {
    try {
        // Define the raw SQL query to fetch statistics
        const statsQuery = `
            SELECT *
            FROM Cust
        `;

        // Execute the raw SQL query to fetch statistics
        const [rows] = await db.query(statsQuery);
        console.log('Cust Stats:', rows[0]);
    } catch (error) {
        console.error('Error fetching product stats:', error);
    }
}

// Export the functions
module.exports = { createCust, getCust };
 