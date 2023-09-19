import React, { useState, useEffect } from 'react';
import './home.css';
import '../pages.css'
import '../../components/graphs/graphs.css'
import MostBannedCurrPatch from '../../components/graphs/most_banned/most_banned'; // Make sure to adjust the import path as needed.


export default function Home() {
  const [chartData, setChartData] = useState([]);
  const [patchInfo, setPatchInfo] = useState(null); 

  useEffect(() => {
    fetch('http://localhost:5000/api/top5_most_banned_champions')
      .then(response => response.json())
      .then(data => {
        setChartData(data);
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
        <MostBannedCurrPatch data={chartData} />
        </div>
        <div className='graph_container1-1'>
        <MostBannedCurrPatch data={chartData} />
        </div>
        </div>
        <h1>test1</h1>
        <h1>test2</h1>
        <h1>test3</h1>
        <h1>test4</h1>
        <h1>test5</h1>
        <h1>test1</h1>
        <h1>test2</h1>
        <h1>test3</h1>
        <h1>test4</h1>
        <h1>test5</h1>
        <h1>test1</h1>
        <h1>test2</h1>
        <h1>test3</h1>
        <h1>test4</h1>
        <h1>test5</h1>

      </div>
    </div>
  );
  
}
