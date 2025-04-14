const express = require('express');

module.exports = function (db) {
  const router = express.Router();

  router.post('/', (req, res) => {
    const { event_name, organizer_name, event_date, latitude, longitude } = req.body;
    const sql = 'INSERT INTO events (event_name, organizer_name, event_date, latitude, longitude) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [event_name, organizer_name, event_date, latitude, longitude], (err, result) => {
      if (err) return res.status(500).json({ error: 'Database Error', details: err });
      res.json({ success: true, eventId: result.insertId });
    });
  });

  return router;
};
