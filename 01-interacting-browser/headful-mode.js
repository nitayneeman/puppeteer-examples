const puppeteer = require('puppeteer');

(async () => {
  // Makes the browser to be launched in a headful way
  const browser = await puppeteer.launch({ headless: false });
  console.info(browser);

  await browser.close();
})();
