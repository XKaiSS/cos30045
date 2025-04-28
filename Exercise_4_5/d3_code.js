// Select the newly added div and add svg
const svg = d3.select(".responsive-svg-container")
  .append("svg")
  .attr("viewBox", "0 0 1200 1600")
  .style("border", "1px solid black");

// Add a test rectangle to the svg

  // 数据加载和处理
  d3.csv("data/tvEnergyConsumption.csv", d => ({
    brand: d['Brand_Reg'],
    consumption: +d['Average_Energy_Consumption(kWh/year)']
  })).then(data => {
    console.log(data);
    createBarChart(data);
  });
  
  // Create the bar chart with data-bound elements
  const createBarChart = data => {
    svg
      .selectAll("rect")
      .data(data)
      .join("rect")
      .attr("class", d => `bar bar-${d.brand.replace(/\s+/g, '-')}`)
      .attr("x", 10)
      .attr("y", (d, i) => 10 + i * 50) // Adjust spacing as needed
      .attr("width", d => d.consumption)
      .attr("height", 40)
      .attr("fill", "steelblue");
  };