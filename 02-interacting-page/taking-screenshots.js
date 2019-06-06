const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Navigates to URL
  await page.goto('https://pptr.dev');

  // Waits until the `title` meta element is rendered
  await page.waitForSelector('title');

  // Takes a screenshot of the whole page
  await page.screenshot({ path: 'screenshot.png', fullPage: true });

  await browser.close();
})();
