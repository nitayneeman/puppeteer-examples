const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://pptr.dev');
  await page.waitForSelector('title');

  // Captures the current state of the accessibility tree
  const snapshot = await page.accessibility.snapshot({ interestingOnly: false });
  console.info(snapshot);

  await browser.close();
})();
