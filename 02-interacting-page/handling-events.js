const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Emitted when the DOM is parsed and ready (without waiting for resources)
  page.once('domcontentloaded', () => console.info('Page is loaded!'));

  // Emitted when the page is fully loaded
  page.once('load', () => console.info('Page is loaded!'));

  // Emitted after the page is closed
  page.once('close', () => console.info('Page is closed!'));

  await page.goto('https://pptr.dev');

  // Triggers `close` event
  await page.close();

  await browser.close();
})();
