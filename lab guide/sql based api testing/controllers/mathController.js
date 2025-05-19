const db = require('../models/db');

exports.computeGCD = (req, res) => {
  const { a, b } = req.body;
  const query = 'SELECT GCD(?, ?) AS result';
  db.execute(query, [a, b], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(result[0]);
  });
};

exports.computePower = (req, res) => {
  const { base, exponent } = req.body;
  const query = 'SELECT POW(?, ?) AS result';
  db.execute(query, [base, exponent], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(result[0]);
  });
};

exports.computeFactorial = (req, res) => {
  const { n } = req.body;
  const query = `
    WITH RECURSIVE factorial(n, fact) AS (
      SELECT 1, 1
      UNION ALL
      SELECT n+1, (n+1)*fact FROM factorial WHERE n < ?
    )
    SELECT fact AS result FROM factorial WHERE n = ?
  `;
  db.execute(query, [n, n], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(result[result.length - 1]);
  });
};