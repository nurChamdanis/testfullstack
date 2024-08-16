const db = require('../db/db');
async function createOrder() {
    try {
        // Define the raw SQL query to create the table
        const createTableQuery = `
            CREATE TABLE IF NOT EXISTS Orders (
                id INTEGER NOT NULL AUTO_INCREMENT,
                kode_order VARCHAR(255) NOT NULL UNIQUE,
                kode_barang VARCHAR(255) NOT NULL, 
                qty_order INTEGER NOT NULL,       
                price DECIMAL(10, 2) NOT NULL,
                sum_price DECIMAL(10, 2) NOT NULL,
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

async function getOrder() {
    try {
        // Define the raw SQL query to fetch statistics
        const statsQuery = `
            SELECT *
            FROM Order
        `;

        // Execute the raw SQL query to fetch statistics
        const [rows] = await db.query(statsQuery);
        console.log('Cust Stats:', rows[0]);
    } catch (error) {
        console.error('Error fetching product stats:', error);
    }
}

// Export the functions
module.exports = { createOrder, getOrder }; 