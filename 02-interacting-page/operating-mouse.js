const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.setViewport({ width: 1920, height: 1080 });

  await page.goto('https://pptr.dev');
  await page.waitForSelector('sidebar-component');

  await page.mouse.move(40, 150);

  await browser.close();
})();
