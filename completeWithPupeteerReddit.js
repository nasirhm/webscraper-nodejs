const puppeteer = require('puppeteer');
const cheer = require('cheerio');
const url = 'https://www.reddit.com';

puppeteer
  .launch()
  .then(function(browser) {
    return browser.newPage();
  })
  .then(function(page) {
    return page.goto(url).then(function() {
      return page.content();
    });
  })
  .then(function(html) {
    cheer('h2', html).each(function() {
      console.log(cheer(this).text());
    });
  })
  .catch(function(err) {
    //handle error
    console.log(err);
});