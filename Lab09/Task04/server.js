const express = require('express');
const mysql = require('mysql2');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const path = require('path');

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect((err) => {
  if (err) throw err;
  console.log("✅ MySQL connected.");
});

app.use('/api/jobs', require('./routes/jobRoutes')(db));
app.use('/api/applicants', require('./routes/applicantRoutes')(db));

app.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
});
