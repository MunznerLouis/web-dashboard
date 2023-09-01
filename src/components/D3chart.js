import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

function D3Chart({ data }) {
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    
    // Sample data for the line chart
    const dataset = [
      { x: 0, y: 5 },
      { x: 1, y: 10 },
      { x: 2, y: 8 },
      { x: 3, y: 15 },
      { x: 4, y: 7 },
    ];

    // Create scales for mapping data to SVG coordinates
    const xScale = d3.scaleLinear()
      .domain([0, d3.max(dataset, d => d.x)]) // Input data domain
      .range([0, 400]); // Output SVG range

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(dataset, d => d.y)])
      .range([300, 0]); // Inverted to match SVG coordinate system

    // Create a line generator
    const line = d3.line()
      .x(d => xScale(d.x))
      .y(d => yScale(d.y));

    // Append a path element to the SVG to display the line
    svg.append('path')
      .datum(dataset)
      .attr('fill', 'none')
      .attr('stroke', '#F0F0F0')
      .attr('stroke-width', 2)
      .attr('d', line);

    // Add x-axis
    svg.append('g')
      .attr('transform', `translate(0, ${300})`) // Position at the bottom
      .call(d3.axisBottom(xScale));

    // Add y-axis
    svg.append('g')
      .call(d3.axisLeft(yScale));

  }, []);

  return (
    <svg ref={svgRef} width={400} height={300}>
      {/* The line chart will be displayed here */}
    </svg>
  );
}

export default D3Chart;
