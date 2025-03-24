// routes/productRoutes.js
const express = require('express');

module.exports = function(db) {
  const router = express.Router();

  // Get all products
  router.get('/', (req, res) => {
    db.query('SELECT * FROM products', (err, results) => {
      if (err) return res.status(500).json({ error: err });
      res.json(results);
    });
  });

  // Add a new product
  router.post('/', (req, res) => {
    const { name, category, price, description } = req.body;
    const sql = 'INSERT INTO products (name, category, price, description) VALUES (?, ?, ?, ?)';
    db.query(sql, [name, category, price, description], (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ success: true, message: 'Product added' });
    });
  });

  // Update product
  router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name, category, price, description } = req.body;
    const sql = 'UPDATE products SET name=?, category=?, price=?, description=? WHERE id=?';
    db.query(sql, [name, category, price, description, id], (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ success: true, message: 'Product updated' });
    });
  });

  // Delete product
  router.delete('/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM products WHERE id=?', [id], (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ success: true, message: 'Product deleted' });
    });
  });

  return router;
};
