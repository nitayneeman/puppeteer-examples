const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ devtools: true });
  const page = await browser.newPage();

  // Grants permission for changing geolocation
  const context = browser.defaultBrowserContext();
  await context.overridePermissions('https://pptr.dev', ['geolocation']);

  await page.goto('https://pptr.dev');
  await page.waitForSelector('title');

  // Changes to the north pole's location
  await page.setGeolocation({ latitude: 90, longitude: 0 });

  await browser.close();
})();
