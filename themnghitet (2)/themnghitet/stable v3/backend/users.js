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

async function connectDB() {
  try {
    await client.connect();
    console.log('Users: Connected to PostgreSQL');
  } catch (err) {
    console.error('Users: Connection error', err.stack);
    process.exit(1);
  }
}

connectDB();

router.get('/', async (req, res) => {
    const { id } = req.query; 

    try {
        let query;
        let params = [];

        if (id) {
            query = 'SELECT * FROM users WHERE id = $1'; 
            params = [id];
        } else {
            query = 'SELECT * FROM users';
        }

        const result = await client.query(query, params);

        if (result.rows.length === 0) {
            return res.status(404).json({ message: id ? 'Not found' : 'Not found' });
        }

        res.status(200).json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
