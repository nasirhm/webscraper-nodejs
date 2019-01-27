const rp = require('request-promise');
const cheer = require('cheerio');
const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_Pakistan';


rp(url)
    .then(function(data){
        console.log(cheeer('tr > th > a',html.length));
        console.log(cheer('tr > tr > a',html))
    })
    .catch(function(err){
        console.log(err);
    })