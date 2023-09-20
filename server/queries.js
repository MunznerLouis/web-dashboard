// query.js

/*list of queries

champion_occurence_by_region
current_patch
most_banned_curr_patch
*/
const queries = {
  current_patch:`
SELECT max(patch) FROM public.all_data;`,

  most_banned:`
SELECT ban1, ban2, ban3, ban4, ban5,patch,league
FROM public.all_data
WHERE patch = (SELECT MAX(patch) - 0.01 FROM public.all_data)
AND (participant_id = 100 OR participant_id = 200);
`,
  best_champions:
`select result_bool, champion_picked from public.all_data 
WHERE patch = (SELECT MAX(patch) - 0.01 FROM public.all_data)
AND (participant_id <> 100 and participant_id <> 200);`,
};

module.exports = queries;
