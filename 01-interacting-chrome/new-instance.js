const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  console.info(browser);
  await browser.close();
})();
