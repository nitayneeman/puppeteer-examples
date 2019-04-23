const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto('https://pptr.dev');
  await page.waitForSelector('sidebar-component');

  // Hovers the second link inside the API sidebar
  await page.mouse.move(40, 150);

  // Clicks the second link and triggers `mouseup` event after 1000ms
  await page.mouse.click(40, 150, { delay: 1000 });

  await browser.close();
})();
