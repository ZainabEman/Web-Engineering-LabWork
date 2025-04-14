const express = require('express');

module.exports = function(db) {
  const router = express.Router();

  // Login Route
  router.post('/login', (req, res) => {
    const { email, password } = req.body;
    const sql = 'SELECT * FROM users WHERE email = ? AND password = ?';
    db.query(sql, [email, password], (err, results) => {
      if (err) return res.status(500).json({ error: 'Database Error' });
      if (results.length > 0) {
        const user = results[0];
        res.json({ success: true, userId: user.id });
      } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
      }
    });
  });

  // Get User Info
  router.get('/user/:id', (req, res) => {
    const id = req.params.id;
    db.query('SELECT id, name, email, created_at FROM users WHERE id = ?', [id], (err, results) => {
      if (err) return res.status(500).json({ error: 'Database Error' });
      if (results.length > 0) {
        res.json(results[0]);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    });
  });

  return router;
};
