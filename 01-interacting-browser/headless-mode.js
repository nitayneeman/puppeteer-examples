const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  console.info(browser);
  await browser.close();
})();
