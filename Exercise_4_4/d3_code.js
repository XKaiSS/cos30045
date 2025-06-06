// Select the newly added div and add svg
const svg = d3.select(".responsive-svg-container")
  .append("svg")
  .attr("viewBox", "0 0 1200 1600")
  .style("border", "1px solid black");

// Add a test rectangle to the svg
svg.append("rect")
  .attr("x", 10)
  .attr("y", 10)
  .attr("width", 414)
  .attr("height", 16)
  .attr("fill", "blue");


d3.csv("./tvEnergyConsumption.csv", d => {
  return {
    brand: d['Brand_Reg'], 
    consumption: +d['Average_Energy_Consumption(kWh/year)'] 
  };
}).then(data => {
  console.log(data); 
  createBarChart(data); 
});
