const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.emulate(devices['iPhone X']);
  await page.goto('https://pptr.dev');

  await browser.close();
})();
