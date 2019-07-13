const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto('https://pptr.dev');

  // Waits until the toolbar is rendered
  await page.waitForSelector('toolbar-component');

  // Focuses the search input
  await page.focus('[type="search"]');

  // Types the text into the focused element
  await page.keyboard.type('Keyboard', { delay: 100 });

  // Choosing the third result
  await page.keyboard.press('ArrowDown', { delay: 200 });
  await page.keyboard.press('ArrowDown', { delay: 200 });
  await page.keyboard.press('Enter');

  await browser.close();
})();
