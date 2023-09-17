// query.js

/*list of queries

champion_occurence_by_region
current_patch
most_banned_curr_patch
*/
const queries = {
  champion_occurence_by_region: `
    WITH ChampionOccurrences AS (
      SELECT 
        league, 
        champion_picked, 
        COUNT(champion_picked) AS occurrence 
      FROM 
        public.all_data 
      WHERE 
        role_position LIKE 'bot' 
        AND league IN ('LFL', 'LCK', 'LCS', 'LPL', 'LEC', 'MSI', 'WLDS') 
      GROUP BY 
        league, 
        champion_picked
    ),
    LeagueTotalOccurrences AS (
      SELECT 
        league, 
        SUM(occurrence) AS total_occurrence 
      FROM 
        ChampionOccurrences 
      GROUP BY 
        league
    ),
    RankedChampions AS (
      SELECT 
        co.league, 
        co.champion_picked, 
        ROW_NUMBER() OVER (PARTITION BY co.league ORDER BY co.occurrence DESC) AS rn 
      FROM 
        ChampionOccurrences co
    )
    SELECT 
      rc.league, 
      rc.champion_picked, 
      ROUND((co.occurrence::decimal / lt.total_occurrence) * 100, 2) AS occurrence_percentage 
    FROM 
      RankedChampions rc 
      JOIN LeagueTotalOccurrences lt ON rc.league = lt.league 
      JOIN ChampionOccurrences co ON rc.league = co.league AND rc.champion_picked = co.champion_picked 
    WHERE 
      rc.rn = 1;
  `,
  current_patch:`
    SELECT max(patch) FROM public.all_data;`,
  most_banned_curr_patch:`
  SELECT
    patch,
    champion_banned,
    COUNT(*) AS ban_count
FROM (
    SELECT
        patch,
        ban1 AS champion_banned
    FROM
        public.all_data
    WHERE
        patch = (
            SELECT MAX(patch) FROM public.all_data
        )
    UNION ALL
    SELECT
        patch,
        ban2 AS champion_banned
    FROM
        public.all_data
    WHERE
        patch = (
            SELECT MAX(patch) FROM public.all_data
        )
    UNION ALL
    SELECT
        patch,
        ban3 AS champion_banned
    FROM
        public.all_data
    WHERE
        patch = (
            SELECT MAX(patch) FROM public.all_data
        )
    UNION ALL
    SELECT
        patch,
        ban4 AS champion_banned
    FROM
        public.all_data
    WHERE
        patch = (
            SELECT MAX(patch) FROM public.all_data
        )
    UNION ALL
    SELECT
        patch,
        ban5 AS champion_banned
    FROM
        public.all_data
    WHERE
        patch = (
            SELECT MAX(patch) FROM public.all_data
        )
) AS bans
GROUP BY
    patch, champion_banned
ORDER BY
    ban_count DESC
LIMIT 5;
`,
test:`
SELECT ban1, ban2, ban3, ban4, ban5,patch,league
FROM public.all_data
WHERE patch = (SELECT MAX(patch) - 0.01 FROM public.all_data)
AND (participant_id = 100 OR participant_id = 200);
`
};

module.exports = queries;
