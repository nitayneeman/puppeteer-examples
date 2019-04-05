const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Navigates to URL
  await page.goto('https://pptr.dev');

  // Waits until the `title` meta element is rendered
  await page.waitForSelector('title');
  const title = await page.title();
  console.info(`The title is: ${title}`);

  await browser.close();
})();
