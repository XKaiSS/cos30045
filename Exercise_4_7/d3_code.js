const svg = d3.select(".responsive-svg-container")
  .append("svg")
  .attr("viewBox", "0 0 500 600")  
  .style("border", "1px solid black");

d3.csv("data/tvEnergyConsumption.csv", d => ({
  brand: d['Brand_Reg'],
  consumption: +d['Average_Energy_Consumption(kWh/year)'] 
})).then(data => {
  console.log(data);
  createBarChart(data);
});

const createBarChart = data => {
  // Keep the scale unchanged
  const xScale = d3.scaleLinear()
    .domain([0, 1310]) 
    .range([0, 500]);

  const yScale = d3.scaleBand()
    .domain(data.map(d => d.brand))
    .range([0, 500])
    .padding(0.1);

  // Create groups
  const barGroups = svg.selectAll(".bar-group")
    .data(data)
    .join("g")
    .attr("class", "bar-group")
    .attr("transform", d => `translate(50,${yScale(d.brand)})`);

  // Add bars
  barGroups.append("rect")
    .attr("width", d => xScale(d.consumption))
    .attr("height", yScale.bandwidth())
    .attr("fill", "blue");

  // Brand label (on the left) - font size reduced to 8px
  barGroups.append("text")
    .text(d => d.brand)
    .attr("x", -8)  // Adjust position
    .attr("y", yScale.bandwidth()/2)
    .attr("dy", "0.3em")
    .attr("text-anchor", "end")
    .style("font-size", "6px")  // Reduced from 10px to 8px
    .style("font-family", "Arial, sans-serif");

  // Consumption value label (on the right) - font size reduced to 8px
  barGroups.append("text")
    .text(d => d.consumption)
    .attr("x", d => xScale(d.consumption) + 8)  // Adjust position
    .attr("y", yScale.bandwidth()/2)
    .attr("dy", "0.3em")
    .style("font-size", "6px")  // Reduced from 10px to 8px
    .style("font-family", "Arial, sans-serif");
};
