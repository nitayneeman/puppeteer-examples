const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Emitted when the DOM is parsed and ready (without waiting for resources)
  page.once('domcontentloaded', () => console.info('✅ DOM is ready'));

  // Emitted when the page is fully loaded
  page.once('load', () => console.info('✅ Page is loaded'));

  // Emitted when a script within the page uses `console`
  page.on('console', message => console[message.type()](`👉 ${message.text()}`));

  // Emitted when a script within the page uses `alert`, `prompt`, `confirm` or `beforeunload`
  page.on('dialog', async dialog => {
    console.info(`👉 ${dialog.message()}`);
    await dialog.dismiss();
  });

  // Emitted when a script within the page emits an error event (for example, page crashing)
  page.on('error', error => console.error(`❌ ${error}`));

  // Emitted after the page is closed
  page.once('close', () => console.info('✅ Page is closed'));

  await page.goto('https://pptr.dev');

  // Triggers `console` event
  await page.evaluate(() => console.info('A console message within the page'));

  // Triggers `dialog` event
  await page.evaluate(() => alert('An alert within the page'));

  // Triggers `error` event
  await page.emit('error', new Error('An error within the page'));

  // Triggers `close` event
  await page.close();

  await browser.close();
})();
