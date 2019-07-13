const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();

  // Creates a new page on the default browser context
  const page = await browser.newPage();
  console.info(page);

  await browser.close();
})();
