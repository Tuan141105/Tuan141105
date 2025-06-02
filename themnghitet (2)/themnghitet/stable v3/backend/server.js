const express = require('express');
const { Client } = require('pg');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

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
        console.log('Server: Connected to PostgreSQL');
    } catch (err) {
        console.error('Server: Connection error:', err.stack);
        process.exit(1);
    }
}
connectDB();

app.get('/', (req, res) => {
    res.send('Đây là Backend API');
});

try {

  const loginRoutes = require('./login');
  app.use('/login', loginRoutes);

  const UsersRouter = require('./users');
  app.use('/api/users', UsersRouter);

  const cloud_serverRouter = require('./cloud_server');
  app.use('/api/cloud_servers', cloud_serverRouter);

  const customersRouter = require('./customers');
  app.use('/api/customers', customersRouter);

} catch (err) {
    console.error('Error importing routes:', err.message);
}

app.use((err, req, res, next) => {
    console.error('Unhandled error:', err);
    res.status(500).send('Something went wrong!');
});

app.listen(port, () => {
    console.log(`Backend is running on http://localhost:${port}`);
});
