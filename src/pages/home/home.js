import React, { useState, useEffect } from 'react';
import './home.css';
import DonutChartComponent from '../../components/graphs/D3chart';

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
      <div className="home">
        <header className="home-header">
          <h1>Graph de fou</h1>
        </header>

        <DonutChartComponent data={chartData} title="Most picked ADC for each region in percentage" />    
      </div>
    );
  }