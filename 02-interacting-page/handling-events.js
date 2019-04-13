const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Part 1 - listening the events

  // Emitted when the DOM is parsed and ready (without waiting for resources)
  page.once('domcontentloaded', () => console.info('✅ DOM is ready'));

  // Emitted when the page is fully loaded
  page.once('load', () => console.info('✅ Page is loaded'));

  // Emitted when the page attaches a frame
  page.on('frameattached', () => console.info('✅ Frame is attached'));

  // Emitted when the a frame within the page is navigated to a new URL
  page.on('framenavigated', () => console.info('👉 Frame is navigated'));

  // Emitted when a script within the page uses `console.timeStamp`
  page.on('metrics', data => console.info(`👉 A timestamp added at ${data.metrics.Timestamp}`));

  // Emitted when a script within the page uses `console`
  page.on('console', message => console[message.type()](`👉 ${message.text()}`));

  // Emitted when a script within the page uses `alert`, `prompt`, `confirm` or `beforeunload`
  page.on('dialog', async dialog => {
    console.info(`👉 ${dialog.message()}`);
    await dialog.dismiss();
  });

  // Emitted when the page emits an error event (for example, the page crashes)
  page.on('error', error => console.error(`❌ ${error}`));

  // Emitted when the page detaches a frame
  page.on('framedetached', () => console.info('✅ Frame is detached'));

  // Emitted after the page is closed
  page.once('close', () => console.info('✅ Page is closed'));

  // Part 2 - triggering the events

  await page.goto('https://pptr.dev');

  // Triggers `metrics` event
  await page.evaluate(() => console.timeStamp());

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
