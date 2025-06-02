const express = require('express');
const { Client } = require('pg');
const router = express.Router();

// Database connection setup
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
    console.log('Cloud Servers: Connected to PostgreSQL');
  } catch (err) {
    console.error('Cloud Servers: Connection error', err.stack);
    process.exit(1); // Exit the process if the connection fails
  }
}

connectDB();

// POST: Create a new cloud server record
router.post('/', async (req, res) => {
  const { name, cpu, ssd, ram, bandwidth, operating_system, backup, price, note } = req.body;
  try {
    const result = await client.query(
      `INSERT INTO cloud_servers (name, cpu, ssd, ram, bandwidth, operating_system, backup, price, note) 
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`,
      [name, cpu, ssd, ram, bandwidth, operating_system, backup, price, note]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error creating cloud server:', err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// GET: Retrieve all cloud server records
router.get('/', async (req, res) => {
  try {
    const result = await client.query('SELECT * FROM cloud_servers');
    res.status(200).json(result.rows);
  } catch (err) {
    console.error('Error retrieving cloud servers:', err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// GET: Retrieve a cloud server record by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await client.query('SELECT * FROM cloud_servers WHERE cloud_servers_id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Cloud server not found' });
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error('Error retrieving cloud server by ID:', err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// PUT: Update a cloud server record by ID
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, cpu, ssd, ram, bandwidth, operating_system, backup, price, note } = req.body;
  try {
    const result = await client.query(
      `UPDATE cloud_servers SET name = $1, cpu = $2, ssd = $3, ram = $4, bandwidth = $5, 
        operating_system = $6, backup = $7, price = $8, note = $9 
       WHERE cloud_servers_id = $10 RETURNING *`,
      [name, cpu, ssd, ram, bandwidth, operating_system, backup, price, note, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Cloud server not found' });
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error('Error updating cloud server:', err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// DELETE: Delete a cloud server record by ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await client.query('DELETE FROM cloud_servers WHERE cloud_servers_id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Cloud server not found' });
    }
    res.status(200).json({ message: 'Cloud server deleted successfully' });
  } catch (err) {
    console.error('Error deleting cloud server:', err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
