const express = require('express');

module.exports = function(db) {
  const router = express.Router();

  // GET all blogs
  router.get('/', (req, res) => {
    db.query('SELECT id, title, author, created_at FROM blogs ORDER BY created_at DESC', (err, results) => {
      if (err) return res.status(500).json({ error: err });
      res.json(results);
    });
  });

  // GET single blog by id
  router.get('/:id', (req, res) => {
    db.query('SELECT * FROM blogs WHERE id = ?', [req.params.id], (err, results) => {
      if (err) return res.status(500).json({ error: err });
      res.json(results[0]);
    });
  });

  // POST a new blog
  router.post('/', (req, res) => {
    const { title, author, content } = req.body;
    db.query('INSERT INTO blogs (title, author, content) VALUES (?, ?, ?)', [title, author, content], (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ success: true, message: 'Blog posted successfully', id: result.insertId });
    });
  });

  return router;
};
