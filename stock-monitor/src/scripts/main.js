// Fetch stock data from stocks.json and update the HTML content
async function fetchStockData() {
    try {
        const response = await fetch('../data/stocks.json');
        const stocks = await response.json();
        updateStockPrices(stocks);
    } catch (error) {
        console.error('Error fetching stock data:', error);
    }
}

// Update the HTML with stock prices
function updateStockPrices(stocks) {
    const stockList = document.getElementById('stock-list');
    stockList.innerHTML = ''; // Clear existing content

    stocks.forEach(stock => {
        const listItem = document.createElement('li');
        listItem.textContent = `${stock.name}: $${stock.price}`;
        stockList.appendChild(listItem);
    });
}

// Initialize the stock monitoring
document.addEventListener('DOMContentLoaded', fetchStockData);