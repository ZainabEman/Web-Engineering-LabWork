const express = require('express');

module.exports = function(db) {
  const router = express.Router();

  // POST: Submit Feedback
  router.post('/', (req, res) => {
    const { name, email, message } = req.body;
    const sql = 'INSERT INTO feedback (name, email, message) VALUES (?, ?, ?)';
    db.query(sql, [name, email, message], (err, result) => {
      if (err) return res.status(500).json({ error: 'DB Error' });
      res.json({ success: true, message: 'Feedback submitted successfully' });
    });
  });

  // GET: Get All Feedback
  router.get('/', (req, res) => {
    db.query('SELECT * FROM feedback ORDER BY submitted_at DESC', (err, results) => {
      if (err) return res.status(500).json({ error: 'DB Error' });
      res.json(results);
    });
  });

  return router;
};
