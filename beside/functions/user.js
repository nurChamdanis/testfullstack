const db = require('../db/db');
async function createUsers() {
    try {
        // Define the raw SQL query to create the table
        const createTableQuery = `
            CREATE TABLE IF NOT EXISTS Users (
                id INTEGER NOT NULL AUTO_INCREMENT,
                username VARCHAR(255) NOT NULL UNIQUE,
                password VARCHAR(255) NOT NULL,
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

async function getUsers() {
    try {
        // Define the raw SQL query to fetch statistics
        const statsQuery = `
            SELECT *
            FROM Users
        `;

        // Execute the raw SQL query to fetch statistics
        const [rows] = await db.query(statsQuery);
        console.log('Cust Stats:', rows[0]);
    } catch (error) {
        console.error('Error fetching product stats:', error);
    }
}

// Export the functions
module.exports = { createUsers, getUsers };

 