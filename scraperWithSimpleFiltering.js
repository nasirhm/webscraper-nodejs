const rp = require('request-promise');
const cheer = require('cheerio');
const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';


rp(url)
    .then(function(data){
        //Filtering Tags - Length one is to check there isn't additional Data Coming
        console.log(cheer('big > a',data.length));
        console.log(cheer('big > a',data))
    })
    .catch(function(err){
        console.log(err);
    })