const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Called when the whole page has loaded
  page.once('load', () => console.info('Page loaded!'));

  // Called after the page is closed
  page.once('close', () => console.info('Page closed!'));

  await page.goto('https://pptr.dev');

  // Triggers `close` event
  await page.close();

  await browser.close();
})();
