const rp = require('request-promise');
const cheer = require('cheerio');
const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_Pakistan';


rp(url)
    .then(function(data){
        console.log(cheer('tr > th > a',data.length));
        console.log(cheer('tr > th > a',data))
    })
    .catch(function(err){
        console.log(err);
    })