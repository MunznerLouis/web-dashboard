import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import './most_banned.css';

const MostBannedCurrPatch = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    if (!data) return;

    // Define the dimensions and margins for the graph
    const margin = { top: 20, right: 30, bottom: 40, left: 100 };
    const width = 300 - margin.left - margin.right;
    const height = 200 - margin.top - margin.bottom;

    // Remove any previous SVG content
    d3.select(svgRef.current).selectAll('*').remove();

    // Create the SVG element
    const svg = d3
      .select(svgRef.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // Sort the data by ban_count in descending order
    data.sort((a, b) => b.banPercentage - a.banPercentage);

    // Define the scales for x and y axes
    const x = d3.scaleLinear().domain([0, d3.max(data, (d) => d.banPercentage)]).range([0, width]);
    const y = d3.scaleBand().domain(data.map((d) => d.champion)).range([0, height]).padding(0.1);

    // Create the x and y axes
    const yAxis = d3.axisLeft(y);

    // Append the x and y axes to the SVG
    svg.append('g').attr('class', 'y-axis').call(yAxis);

    // Create the horizontal bars
    svg
      .selectAll('.bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', 0)
      .attr('y', (d) => y(d.champion))
      .attr('width', (d) => x(d.banPercentage))
      .attr('height', y.bandwidth() * 0.7);

    // Add labels to the bars
// Add labels to the bars
svg
  .selectAll('.label')
  .data(data)
  .enter()
  .append('text')
  .attr('class', 'label')
  .attr('x', (d) => x(d.banPercentage)-2) // Position the labels at the end of the bars with a slight left offset
  .attr('y', (d) => y(d.champion) + y.bandwidth() / 2 - 4)
  .attr('dy', '0.35em')
  .style('text-anchor', 'end') // Set text-anchor to 'end' for right alignment
  .text((d) => `${d.banPercentage}%`);



  }, [data]);

  return <svg ref={svgRef}></svg>;
};

export default MostBannedCurrPatch;
