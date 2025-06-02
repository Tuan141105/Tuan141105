const express = require('express');
const { Client } = require('pg');
const router = express.Router();

// Database connection
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '12345',
  port: 5432,
});

// Connect to the database
async function connectDB() {
  try {
    await client.connect();
    console.log('Customer Database: Connected to PostgreSQL');
  } catch (err) {
    console.error('Customer Database: Connection error', err.stack);
    process.exit(1);
  }
}

connectDB();

// GET: Search customers by email or phone (same as previously discussed)
router.get('/', async (req, res) => {
  const searchTerm = req.query.searchTerm || '';
  try {
    const result = await client.query(
      `SELECT * FROM customers
       WHERE email ILIKE $1 OR phone LIKE $1`,
      [`%${searchTerm}%`]
    );
    res.status(200).json(result.rows);
  } catch (err) {
    console.error('Error fetching customers:', err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// POST: Add a new customer
router.post('/', async (req, res) => {
  const { email, name, phone, status } = req.body;
  
  if (!email || !name || !phone || !status) {
    return res.status(400).json({ error: 'Missing required fields: email, name, phone, status' });
  }

  try {
    const result = await client.query(
      `INSERT INTO customers (email, name, phone, status)
       VALUES ($1, $2, $3, $4) RETURNING *`,
      [email, name, phone, status]
    );
    res.status(201).json(result.rows[0]);  // Return the newly created customer
  } catch (err) {
    console.error('Error adding customer:', err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// PUT: Update a customer's details (by customer_id)
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { email, name, phone, status } = req.body;

  if (!email || !name || !phone || !status) {
    return res.status(400).json({ error: 'Missing required fields: email, name, phone, status' });
  }

  try {
    const result = await client.query(
      `UPDATE customers
       SET email = $1, name = $2, phone = $3, status = $4
       WHERE customer_id = $5 RETURNING *`,
      [email, name, phone, status, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Customer not found' });
    }
    res.status(200).json(result.rows[0]);  // Return the updated customer
  } catch (err) {
    console.error('Error updating customer:', err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// DELETE: Delete a customer by ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const result = await client.query(
      'DELETE FROM customers WHERE customer_id = $1 RETURNING *',
      [id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Customer not found' });
    }
    res.status(200).json({ message: 'Customer deleted successfully' });
  } catch (err) {
    console.error('Error deleting customer:', err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
