const express = require('express');

module.exports = function(db) {
  const router = express.Router();

  // POST: Apply for a job
  router.post('/', (req, res) => {
    const { job_id, name, email, resume_link } = req.body;
    const sql = 'INSERT INTO applicants (job_id, name, email, resume_link) VALUES (?, ?, ?, ?)';
    db.query(sql, [job_id, name, email, resume_link], (err, result) => {
      if (err) return res.status(500).json({ error: 'DB error' });
      res.json({ success: true, message: 'Application submitted successfully' });
    });
  });

  // GET: List applicants for a job
  router.get('/:jobId', (req, res) => {
    const jobId = req.params.jobId;
    db.query('SELECT * FROM applicants WHERE job_id = ?', [jobId], (err, results) => {
      if (err) return res.status(500).json({ error: 'DB error' });
      res.json(results);
    });
  });

  return router;
};
