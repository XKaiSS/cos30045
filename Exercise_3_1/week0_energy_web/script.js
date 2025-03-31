// Function to navigate to the home page
function navigateToHome() {
    window.location.href = "index.html";
}

// 加载主页内容                                                                    
function loadHome() {
    document.getElementById('content').innerHTML = `
        <h1>Welcome to the Appliance Energy Consumption Website</h1>
        <p>Explore the energy consumption data of various appliances in the Australian market.</p>
       <a href="#" onclick="loadTelevisions();">Learn more about energy-efficient televisions</a>
    `;
}

// 加载电视内容
function loadTelevisions() {
    document.getElementById('content').innerHTML = `
        <h1>Energy Consumption of Televisions</h1>
        <p>Learn about the energy consumption of different television models in the Australian market.</p>
        <h2>Brand Energy Efficiency Comparison</h2>
        <img src="brand_vs_energy.png" alt="Brand Energy Efficiency Chart">
        <h2>Screen Technology Comparison</h2>
        <p>This scatter plot compares the energy efficiency of different screen technologies used in TVs.</p>
        <img src="tech_vs_energy.png" alt="Screen Technology Comparison Chart">
            
        <h2>Screen Size vs Energy Consumption</h2>
        <p>See the relationship between screen size and energy consumption in the chart below.</p>
        <img src="size_vs_energy.png" alt="Screen Size vs Energy Consumption Chart">
        
    `;
}

// 加载关于我们内容
function loadAbout() {
    document.getElementById('content').innerHTML = `
        <h1>About Us</h1>
        <p>This project showcases how to use web technologies to display energy consumption data of home appliances.</p>
    `;
}

// 默认加载主页内容
loadHome();
