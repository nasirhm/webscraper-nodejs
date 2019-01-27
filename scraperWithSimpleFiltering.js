const rp = require('request-promise');
const cheer = require('cheerio');
const url = 'https://www.indeed.com/q-Blockchain-jobs.html';


rp(url)
    .then(function(data){
        console.log(cheer('div > h2',data.length));
        console.log(cheer('div > h2',data))
    })
    .catch(function(err){
        console.log(err);
    })