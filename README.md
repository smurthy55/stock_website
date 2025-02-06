# stock-monitor/stock-monitor/README.md

# Stock Monitoring Website

This project is a simple stock monitoring website that displays the prices of stocks you own. The stock prices are updated daily using GitHub Actions.

## Project Structure

```
stock-monitor
├── src
│   ├── index.html        # Main HTML document
│   ├── styles
│   │   └── main.css      # Styles for the website
│   └── scripts
│       └── main.js       # JavaScript for fetching stock prices
├── .github
│   └── workflows
│       └── update-stocks.yml  # GitHub Actions workflow for updating stocks
├── data
│   └── stocks.json       # JSON file containing stock data
├── package.json          # npm configuration file
└── README.md             # Project documentation
```

## Setup

1. Clone the repository:
   ```
   git clone <repository-url>
   cd stock-monitor
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Update the `data/stocks.json` file with your stock information.

4. Configure the GitHub Actions workflow in `.github/workflows/update-stocks.yml` to run daily.

5. Open `src/index.html` in a web browser to view your stock prices.

## Usage

The website will automatically fetch and display the latest stock prices from the `stocks.json` file. Make sure to keep the `stocks.json` file updated with your stock information for accurate pricing.