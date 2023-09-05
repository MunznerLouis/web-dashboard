import React, { useState, useEffect } from 'react';
import './Home.css';
import DonutChartComponent from '../components/graphs/D3chart';

export default function Home() {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
      // Fetch data from your endpoint (http://localhost:5000/api/data)
      fetch('http://localhost:5000/api/data')
        .then(response => response.json())
        .then(data => {
          setChartData(data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []);
  
    return (
      <div className="Home">
        <header className="Home-header">
          <h1>Graph de fou</h1>
        </header>

        <DonutChartComponent data={chartData} title="Most picked ADC for each region in percentage" />    
      </div>
    );
  }