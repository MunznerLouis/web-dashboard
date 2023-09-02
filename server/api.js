// api.js
const express = require('express');
const router = express.Router();
const pool = require('./db'); // Import your PostgreSQL connection pool

// Define a route to fetch data from PostgreSQL
router.get('/data', (req, res) => {
  pool.query('SELECT DISTINCT champion_picked FROM public.pro_player LIMIT 10', (err, results) => {
    if (err) {
      console.error('Error executing PostgreSQL query:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.json(results.rows); // PostgreSQL results are in results.rows
  });
});

module.exports = router;
