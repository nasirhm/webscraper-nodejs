// Here to fetch JS data we're using Puppeteer

const rp = require('request-promise');
const url = 'https://www.reddit.com';

rp(url)
  .then(function(html){
    //success!
    console.log(html);
  })
  .catch(function(err){
    //handle error
    console.log(err);
  });
//The Page fetched from this is script is not complete as reddit uses JS to show Dynamic Content. Please refer to files with Puppetter if you have a similar case. By uning Request promise or fetch you can do most of the work.