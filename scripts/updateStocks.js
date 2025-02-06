const fs = require('fs');

async function updateStocks() {
    // Sample stock data - replace with real API call
    const stocks = {
        "stocks": [
            {"symbol": "AAPL", "name": "Apple Inc.", "price": Math.random() * 200},
            {"symbol": "GOOGL", "name": "Alphabet Inc.", "price": Math.random() * 150},
            {"symbol": "MSFT", "name": "Microsoft Corporation", "price": Math.random() * 300}
        ]
    };

    fs.writeFileSync('data/stocks.json', JSON.stringify(stocks, null, 2));
}

updateStocks();