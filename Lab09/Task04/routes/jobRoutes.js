const express = require('express');

module.exports = function(db) {
  const router = express.Router();

  // GET: Fetch all jobs
  router.get('/', (req, res) => {
    db.query('SELECT * FROM jobs ORDER BY created_at DESC', (err, results) => {
      if (err) return res.status(500).json({ error: 'DB error' });
      res.json(results);
    });
  });

  return router;
};
