
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

// Main chart creation function
const createBarChart = data => {
  // 1. Create linear scale for x-axis (quantitative data)
  const xScale = d3.scaleLinear()
    .domain([0, 1310]) 
    .range([0, 500]);  

  // 2. Create band scale for y-axis (categorical data)
  const yScale = d3.scaleBand()
    .domain(data.map(d => d.brand)) // Array of brand names
    .range([0, 500])  // Pixel range (vertical space)
    .padding(0.1);    

  // 3. Data binding and attribute setting
  svg.selectAll("rect")
    .data(data)
    .join("rect")
    // Set CSS class for styling (sanitize brand names)
    .attr("class", d => `bar bar-${d.brand.replace(/\s+/g, '-')}`)
    // Positioning (50px left margin for future labels)
    .attr("x", 50)  
    // Vertical position from band scale
    .attr("y", d => yScale(d.brand))
    // Width scaled by consumption value
    .attr("width", d => xScale(d.consumption))
    // Height from band scale's calculated bandwidth
    .attr("height", yScale.bandwidth())
    // Visual styling
    .attr("fill", "blue");
};