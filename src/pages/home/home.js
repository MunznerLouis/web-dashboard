import React, { useState, useEffect } from 'react';
import './home.css';
import '../pages.css'
import '../../components/graphs/graphs.css'
import MostBannedCurrPatch from '../../components/graphs/most_banned/most_banned'; // Make sure to adjust the import path as needed.
import BestChampions from '../../components/graphs/best_champions/best_champions';

export default function Home() {
  const [banData, setBanData] = useState([]);
  const [bestChampData, setBestChampData] = useState([]);
  const [patchInfo, setPatchInfo] = useState(null); 

  useEffect(() => {
    fetch('http://localhost:5000/api/top5_most_banned_champions')
      .then(response => response.json())
      .then(data => {
        setBanData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    fetch('http://localhost:5000/api/top5_best_champions')
      .then(response => response.json())
      .then(data => {
        setBestChampData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    fetch('http://localhost:5000/api/current_patch')
      .then(response => response.json())
      .then(data => {
        
        const patchValue = data[0]?.max || 'N/A'; // Use 'N/A' as a default if data is not available
        setPatchInfo(patchValue);
      })
      .catch(error => {
        console.error('Error fetching patch info:', error);
      });

  }, []);

  return (
    <div className="pages">
      <div className="home">
        <header className="home-header">
          <h1>Few stats about patch {patchInfo}</h1>
        </header>

        <div className = 'graph_container1' >
        <div className='graph_container1-1'>
        <h3>Most picked champions</h3>
        <MostBannedCurrPatch data={banData} />
        </div>

        <div className='graph_container1-1'>
        <h3>Best champions</h3>
        <BestChampions data={bestChampData} />
        </div>

        <div className='graph_container1-1'>
        <h3>Most banned champions</h3>
        <MostBannedCurrPatch data={banData} />
        </div>

        <div className='graph_container1-1'>
        <h3>Highest KDA player</h3>
        <MostBannedCurrPatch data={banData} />
        </div>

        <div className='graph_container1-1'>
        <h3>Best team</h3>
        <MostBannedCurrPatch data={banData} />
        </div>

        <div className='graph_container1-1'>
          <h3>Biggest stomp (time)</h3>
        <MostBannedCurrPatch data={banData} />
        </div>
        </div>
        <h1>______________________________________________________________________________</h1>
        <h1>TODO : PLAYER OR TEAM REDIRECT</h1>
      </div>
    </div>
  );
  
}
