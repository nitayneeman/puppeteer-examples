// Only the import was changed!
const puppeteer = require('puppeteer-firefox');

(async () => {
  const browser = await puppeteer.launch();
  console.info(browser);
  await browser.close();
})();
