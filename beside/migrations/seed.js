const db = require('../db/db');

async function initializeBarang() {
    try {
        // Query to check if the Barang table has any records
        const statsQuery = `
            SELECT 
                COUNT(*) as count
            FROM barang
        `;
        const [[{ count }]] = await db.query(statsQuery); // Destructure to get the count value

        // Check if the count is 0 (indicating the Barang table is empty)
        if (count === 0) {
            const createTableQuery = `
                INSERT INTO barang (kode_barang, name_barang, price) VALUES
                ('Product 1', 'Description for Product 1', 10.00),
                ('Product 2', 'Description for Product 2', 20.00),
                ('Product 3', 'Description for Product 3', 30.00),
                ('Product 4', 'Description for Product 4', 40.00),
                ('Product 5', 'Description for Product 5', 50.00),
                ('Product 6', 'Description for Product 6', 60.00),
                ('Product 7', 'Description for Product 7', 70.00),
                ('Product 8', 'Description for Product 8', 80.00),
                ('Product 9', 'Description for Product 9', 90.00),
                ('Product 10', 'Description for Product 10', 100.00);
            `;

            // Execute the insert query to add products
            await db.query(createTableQuery); // Correctly executing the SQL query
            console.log('Products inserted successfully.');
        } else {
            console.log('Barang table is not empty. No products inserted.');
        }
    } catch (error) {
        console.error('Error checking or inserting data:', error);
    }
}

module.exports = { initializeBarang };
