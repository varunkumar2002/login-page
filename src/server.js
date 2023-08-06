
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001; // Choose a suitable port for your backend server

// Configure middleware
app.use(bodyParser.json());
app.use(cors());

// Create MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'userdetails',
});

connection.connect((error) => {
  if (error) {
    console.error('Error connecting to MySQL database:', error);
    return;
  }
  console.log('Connected to MySQL database');
});

// Define API endpoints
app.post('/api/register', (req, res) => {
  const { username, password, email } = req.body;

  const sql = 'INSERT INTO users (username, password, email) VALUES (?, ?, ?)';
  const values = [username, password, email];

  connection.query(sql, values, (error, result) => {
    if (error) {
      console.error('Error during registration:', error);
      res.status(500).json({ message: 'An error occurred during registration' });
      return;
    }

    res.status(201).json({ message: 'User registered successfully' });
  });
});

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  const sql = 'SELECT * FROM users WHERE username = ? AND password = ?';
  const values = [username, password];

  connection.query(sql, values, (error, result) => {
    if (error) {
      console.error('Error during login:', error);
      res.status(500).json({ message: 'An error occurred during login' });
      return;
    }

    if (result.length > 1) {
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Backend server listening on port ${port}`);
});
