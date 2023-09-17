// api.js
const express = require('express');
const router = express.Router();
const pool = require('./db'); // Import your PostgreSQL connection pool
const queries = require('./queries'); // Import your queries from query.js
const dataHandler = require('./data_handler'); // Import data handler module

// Define a route to fetch data from PostgreSQL
router.get('/data', (req, res) => {
  const query = queries.champion_occurence_by_region;

  pool.query(query, (err, results) => {
    if (err) {
      console.error('Error executing PostgreSQL query:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    res.json(results.rows); // PostgreSQL results are in results.rows
  });
});

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


router.get('/most_banned_current_patch', (req, res) => {
  const query = queries.most_banned_curr_patch;

  pool.query(query, (err, results) => {
    if (err) {
      console.error('Error executing PostgreSQL query:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    res.json(results.rows); // PostgreSQL results are in results.rows
  });
});

router.get('/test', (req, res) => {
  const query = queries.test;

  pool.query(query, (err, results) => {
    if (err) {
      console.error('Error executing PostgreSQL query:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    res.json(results.rows); // PostgreSQL results are in results.rows
  });
});

router.get('/top5_most_banned_champions', async (req, res) => {
  try {
    // Use the "test" query to fetch the data from your database
    const { rows } = await pool.query(queries.test);

    // Calculate the top 5 most banned champions in percentage
    const top5Champions = dataHandler.getTop5MostBannedChampions(rows);

    // Send the top 5 most banned champions to the frontend
    res.json(top5Champions);
  } catch (error) {
    console.log('test')
    console.error('Error fetching and processing data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


module.exports = router;


