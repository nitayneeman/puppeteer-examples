const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://github.com/GoogleChrome/puppeteer/blob/master/README.md');

  // Generates a PDF from the page content
  await page.pdf({ path: 'overview.pdf' });

  await browser.close();
})();
