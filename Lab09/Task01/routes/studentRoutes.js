// routes/studentRoutes.js
const express = require('express');

module.exports = function(db) {
  const router = express.Router();

  // GET: Check Email Availability
  router.get('/check-email/:email', (req, res) => {
    const email = req.params.email;
    db.query('SELECT * FROM students WHERE email = ?', [email], (err, results) => {
      if (err) return res.status(500).json({ error: 'DB error' });
      if (results.length > 0) {
        return res.json({ available: false });
      } else {
        return res.json({ available: true });
      }
    });
  });

  // POST: Register Student
  router.post('/register', (req, res) => {
    const { name, email, password, department } = req.body;
    const sql = 'INSERT INTO students (name, email, password, department) VALUES (?, ?, ?, ?)';
    db.query(sql, [name, email, password, department], (err, result) => {
      if (err) {
        if (err.code === 'ER_DUP_ENTRY') {
          return res.status(400).json({ success: false, message: 'Email already exists' });
        }
        return res.status(500).json({ success: false, message: 'Registration failed' });
      }
      res.json({ success: true, message: 'Student registered successfully' });
    });
  });

  return router;
};
