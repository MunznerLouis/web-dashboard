// api.js
const express = require('express');
const router = express.Router();
const pool = require('./db'); // Import your PostgreSQL connection pool
const queries = require('./queries'); // Import your queries from query.js
const dataHandler = require('./data_handler'); // Import data handler module

router.get('/current_patch', (req, res) => {
  const query = queries.current_patch;

  pool.query(query, (err, results) => {
    if (err) {
      console.error('Error executing PostgreSQL query:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    res.json(results.rows); // PostgreSQL results are in results.rows
  });
});

router.get('/best_champions', (req, res) => {
  const query = queries.best_champions;

  pool.query(query, (err, results) => {
    if (err) {
      console.error('Error executing PostgreSQL query:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    res.json(results.rows); // PostgreSQL results are in results.rows
  });
});

router.get('/most_banned', (req, res) => {
  const query = queries.most_banned;

  pool.query(query, (err, results) => {
    if (err) {
      console.error('Error executing PostgreSQL query:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    res.json(results.rows); // PostgreSQL results are in results.rows
  });
});

// ------------------- BELOW ARE THE ENDPOINTS FOR THE FRONTEND MODIFIED FROM UPPER ENDPOINTS -------------------

router.get('/top5_most_banned_champions', async (req, res) => {
  try {
    // Use the "most_banned" query to fetch the data from your database
    const { rows } = await pool.query(queries.most_banned);

    // Calculate the top 5 most banned champions in percentage
    const top5Champions = dataHandler.getTop5MostBannedChampions(rows);

    // Send the top 5 most banned champions to the frontend
    res.json(top5Champions);
  } catch (error) {
    console.error('Error fetching and processing data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/Top5_best_champions', async (req, res) => {
  try {
    // Use the "most_banned" query to fetch the data from your database
    const { rows } = await pool.query(queries.best_champions);

    // Calculate the top 5 most banned champions in percentage
    const top5Champions = dataHandler.getTop5BestChampions(rows);

    // Send the top 5 most banned champions to the frontend
    res.json(top5Champions);
  } catch (error) {
    console.error('Error fetching and processing data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


module.exports = router;


