const chromeLauncher = require('chrome-launcher');
const axios = require('axios');
const puppeteer = require('puppeteer');

(async () => {
  // Initializing a Chrome instance manually
  const chrome = await chromeLauncher.launch({
    chromeFlags: ['--headless']
  });
  const response = await axios.get(`http://localhost:${chrome.port}/json/version`);
  const { webSocketDebuggerUrl } = response.data;

  // Connecting the instance using `browserWSEndpoint`
  const browser = await puppeteer.connect({ browserWSEndpoint: webSocketDebuggerUrl });
  console.info(browser);

  await browser.close();
  await chrome.kill();
})();
