const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Option 1 - analyzing load time through Navigation Timing metrics
  // Executes Navigation API within the page context
  const loadTimeMetrics = await page.evaluate(() => JSON.stringify(window.performance));
  // Parses the result to JSON
  console.info(JSON.parse(loadTimeMetrics));

  // Option 2 - analyzing runtime Puppeteer metrics
  // Returns runtime metrics of the page
  const runtimeMetrics = await page.metrics();
  console.info(runtimeMetrics);

  // Option 3 - analyzing browser activities through tracing
  // Starts to record a trace of the operations
  await page.tracing.start({ path: 'trace.json' });
  await page.goto('https://github.com');
  // Stops the recording
  await page.tracing.stop();

  await browser.close();
})();
