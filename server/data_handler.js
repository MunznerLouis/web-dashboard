// data_handler.js

// Function to calculate the top 5 most banned champions in percentage
function getTop5MostBannedChampions(data) {
    const championCounts = {}; // Object to store ban counts for each champion
    let totalBans = 0; // Total number of bans
  
    // Iterate through the data to count bans for each champion and calculate the total bans
    data.forEach((entry) => {
      for (let i = 1; i <= 5; i++) {
        const champion = entry[`ban${i}`];
        if (champion) {
          championCounts[champion] = championCounts[champion] ? championCounts[champion] + 1 : 1;
          
        }
      }
      totalBans++;
    });
  
    // Calculate the ban percentages for each champion
    const championPercentages = Object.keys(championCounts).map((champion) => ({
      champion,
      banPercentage: Math.floor((championCounts[champion] * 2 / totalBans) * 100),
    }));
  
    // Sort the champion percentages in descending order
    championPercentages.sort((a, b) => b.banPercentage - a.banPercentage);
  
    // Return the top 5 most banned champions by percentage
    return championPercentages.slice(0, 5);
  }
  
  module.exports = {
    getTop5MostBannedChampions,
  };
  