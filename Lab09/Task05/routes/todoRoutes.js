const express = require('express');

module.exports = function(db) {
  const router = express.Router();

  // Get all todos
  router.get('/', (req, res) => {
    db.query('SELECT * FROM todos ORDER BY created_at DESC', (err, results) => {
      if (err) return res.status(500).json({ error: err });
      res.json(results);
    });
  });

  // Add a new todo
  router.post('/', (req, res) => {
    const { title } = req.body;
    db.query('INSERT INTO todos (title) VALUES (?)', [title], (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ success: true, id: result.insertId });
    });
  });

  // Update todo (title or status)
  router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, status } = req.body;
    db.query('UPDATE todos SET title = ?, status = ? WHERE id = ?', [title, status, id], (err) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ success: true });
    });
  });

  // Delete todo
  router.delete('/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM todos WHERE id = ?', [id], (err) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ success: true });
    });
  });

  return router;
};
