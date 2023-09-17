import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import './graphs.css';

function BarChartComponent({ data, title }) {
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const width = svg.attr('width');
    const height = svg.attr('height');
    const margin = { top: 20, right: 30, bottom: 30, left: 40 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    // Create scales for x and y
    const xScale = d3
      .scaleBand()
      .domain(data.map(d => d.league))
      .range([0, innerWidth])
      .padding(0.1);

    const yScale = d3
      .scaleLinear()
      .domain([0, 100])
      .nice()
      .range([innerHeight, 0]);

    // Create a group for the chart content
    const g = svg
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // Create and style the bars
    g.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', d => xScale(d.league))
      .attr('y', d => yScale(d.occurrence_percentage))
      .attr('width', xScale.bandwidth())
      .attr('height', d => innerHeight - yScale(d.occurrence_percentage))
      .attr('fill', '#bb86fc');

    // Add labels on top of the bars
    g.selectAll('text')
      .data(data)
      .enter()
      .append('text')
      .text(d => d.champion_picked)
      .attr('x', d => xScale(d.league) + xScale.bandwidth() / 2)
      .attr('y', d => yScale(d.occurrence_percentage) - 5) // Adjust vertical position
      .attr('text-anchor', 'middle')
      .attr('font-size', '10px')
      .attr('fill', '#E0E0E0');

    // Create x-axis
    const xAxis = d3.axisBottom(xScale);
    g.append('g')
      .attr('transform', `translate(0,${innerHeight})`)
      .call(xAxis);

    // Create y-axis
    const yAxis = d3.axisLeft(yScale);
    g.append('g').call(yAxis);

    // Add a title
    svg
      .append('text')
      .attr('x', width / 2)
      .attr('y', margin.top)
      .attr('text-anchor', 'middle')
      .attr('font-size', '18px')
      .attr('fill', '#E0E0E0')
      .text(title); // Set your desired chart title here

  }, [data, title]);

  return (

    <svg className="donut-chart" ref={svgRef} width={700} height={520}>
      {}
    </svg>

  );
}

export default BarChartComponent;
