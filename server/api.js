// api.js
const express = require('express');
const router = express.Router();
const pool = require('./db'); // Import your PostgreSQL connection pool

// Define a route to fetch data from PostgreSQL
router.get('/data', (req, res) => {
  pool.query("WITH ChampionOccurrences AS (SELECT league, champion_picked, COUNT(champion_picked) AS occurrence FROM public.pro_player WHERE role_position LIKE 'bot' AND league IN ('LFL', 'LCK', 'LCS', 'LPL', 'LEC', 'MSI', 'WLDS') GROUP BY league, champion_picked), LeagueTotalOccurrences AS (SELECT league, SUM(occurrence) AS total_occurrence FROM ChampionOccurrences GROUP BY league), RankedChampions AS (SELECT co.league, co.champion_picked, ROW_NUMBER() OVER (PARTITION BY co.league ORDER BY co.occurrence DESC) AS rn FROM ChampionOccurrences co) SELECT rc.league, rc.champion_picked, ROUND((co.occurrence::decimal / lt.total_occurrence) * 100, 2) AS occurrence_percentage FROM RankedChampions rc JOIN LeagueTotalOccurrences lt ON rc.league = lt.league JOIN ChampionOccurrences co ON rc.league = co.league AND rc.champion_picked = co.champion_picked WHERE rc.rn = 1;",(err, results) => 
  {
    if (err) {
      console.error('Error executing PostgreSQL query:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    
    res.json(results.rows); // PostgreSQL results are in results.rows
  });
});

module.exports = router;
