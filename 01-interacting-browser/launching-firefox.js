// Deprecated package
// const puppeteer = require('puppeteer-firefox');
const puppeteer = require("puppeteer");

(async () => {
  // FireFox's binary is needed to be fetched before
  const browser = await puppeteer.launch({ product: "firefox" });
  console.info(browser);
  await browser.close();
})();
