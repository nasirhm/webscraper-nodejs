const rp = require('request-promise');
const cheer = require('cheerio');
const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';
const parser = require('./parsePresidentToBDate');

rp(url)
    .then(function(html){
        //making array
        const urls = [];
        
        //for loop
        for(i = 0; i<45; i++){
            //Pushing the Scraped Data in an Array
            urls.push(cheer('big > a',html)[i].attribs.href);
        }
        return Promise.all(
            urls.map(function(url){
                return parser(`https://en.wikipedia.org${url}`);
            })
        );
    }
    )
    .then(function(presidents){
        console.log(presidents);
    })
    .catch(function(err)
    {
        //error handling
        console.log(err)
    });