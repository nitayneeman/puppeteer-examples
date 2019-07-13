const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // Instructs the blank page to navigate a URL
  await page.goto('https://pptr.dev');

  // Waits until the `title` meta element is rendered
  await page.waitForSelector('title');

  // Fetches page's title
  const title = await page.title();
  console.info(`The title is: ${title}`);

  await browser.close();
})();
