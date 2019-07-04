const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();

  // A reference for the default browser context
  const defaultContext = browser.defaultBrowserContext();
  console.log(defaultContext.isIncognito()); // False

  // Creates a new browser context
  const newContext = await browser.createIncognitoBrowserContext();
  console.log(newContext.isIncognito()); // True

  // Closes the created browser context
  await newContext.close();

  // Closes the browser with the default context
  await browser.close();
})();
