const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ devtools: true, slowMo: 200 });

  // Browser operations

  // Option 1 - resolving a promise when `setTimeout` finishes
  const sleep = duration => new Promise(resolve => setTimeout(resolve, duration));
  await sleep(3000);

  // Option 2 - if we have a page instance, just using `waitFor`
  await page.waitFor(3000);

  // Holds the browser until we terminate the process explicitly
  await browser.waitForTarget(() => false);

  await browser.close();
})();
