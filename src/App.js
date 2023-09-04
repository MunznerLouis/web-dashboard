// src/App.js

import React, { useState, useEffect } from 'react';
import './App.css';
import DonutChartComponent from './components/D3chart';
import Footer from './footer/footer.js';

function App() {
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
    <div className="App">
      <header className="App-header">
        <h1>Graph de fou</h1>
      </header>
      <main>
        <div className="App-chart">
          <DonutChartComponent data={chartData} title="Most picked ADC for each region in percentage" />
        </div>
        <Footer/>
      </main>   
    </div>
  );
}

export default App;
