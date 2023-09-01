// src/App.js

import React from 'react';
import './App.css';
import D3Chart from './components/D3chart.js';

function App() {
  // Dummy data for visualization
  const data = [1, 2, 3, 4, 5];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Cool graph uh ?</h1>
      </header>
      <main>
        <div className="in-between-space"></div>
        <div className="App-chart">
          <D3Chart data={data} />
        </div>
      </main>
    </div>
  );
}

export default App;
