// server.js
const express = require('express');
const mysql = require('mysql2');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const path = require('path');

dotenv.config();
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from public folder
app.use(express.static(path.join(__dirname, 'public')));

// Setup MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect((err) => {
  if (err) throw err;
  console.log("✅ MySQL Connected.");
});

// ✅ Route to load login.html by default
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// API Routes
app.use('/api', require('./routes/authRoutes')(db));

// Start Server
app.listen(3000, () => {
  console.log("🚀 Server running at http://localhost:3000");
});



//   USE user_auth_db;

// INSERT INTO users (name, email, password) VALUES
// ('Demo 1', 'demo1@example.com', '12345'),
// ('Demo 2', 'demo2@example.com', 'admin123'),
// ('Zainab', 'zainab@example.com', 'zainab123');
